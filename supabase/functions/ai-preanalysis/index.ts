import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";
import { SYSTEM_INSTRUCTIONS } from "./curriculum.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const apiKey = Deno.env.get("OPENAI_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "OPENAI_API_KEY puudub serveris. Lisa Lovable Cloud secret." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { caseData } = await req.json().catch(() => ({ caseData: null }));

    const userInput = caseData
      ? `Õppija juhtum (JSON):\n${JSON.stringify(caseData, null, 2)}\n\nKoosta eelanalüüs vastavalt juhistele, kasutades riikliku õppekava väljavõtet ja arvestuse põhimõtteid.`
      : "Nikita T., 8. klass. Jalgpall 3× nädalas Pärnu Spordikoolis, eestikeelne treeningkeskkond. Võistlused ja laagrid. Treeneri kinnitus olemas. Koosta eelanalüüs.";

    const resp = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4.1-mini",
        instructions: SYSTEM_INSTRUCTIONS,
        input: userInput,
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("OpenAI error", resp.status, errText);
      let msg = "OpenAI päring ebaõnnestus.";
      if (resp.status === 401) msg = "OpenAI API key on vale või aegunud.";
      else if (resp.status === 429) msg = "OpenAI rate limit või krediit otsas.";
      else if (resp.status === 402) msg = "OpenAI krediit on otsas.";
      return new Response(JSON.stringify({ error: msg, status: resp.status, detail: errText.slice(0, 500) }), {
        status: resp.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await resp.json();
    let text: string = data.output_text ?? "";
    if (!text && Array.isArray(data.output)) {
      for (const item of data.output) {
        if (item?.content) {
          for (const c of item.content) {
            if (typeof c?.text === "string") text += c.text;
            else if (c?.text?.value) text += c.text.value;
          }
        }
      }
    }

    return new Response(JSON.stringify({ text, id: data.id }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("ai-preanalysis error", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unknown error" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
