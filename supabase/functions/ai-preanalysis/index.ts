import { corsHeaders } from "https://esm.sh/@supabase/supabase-js@2.95.0/cors";
import { SYSTEM_INSTRUCTIONS } from "./curriculum.ts";

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });

  try {
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "LOVABLE_API_KEY puudub. Luba Lovable Cloud / AI Gateway." }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }

    const { caseData } = await req.json().catch(() => ({ caseData: null }));

    const userInput = caseData
      ? `Õppija juhtum (JSON):\n${JSON.stringify(caseData, null, 2)}\n\nKoosta eelanalüüs vastavalt juhistele, kasutades riikliku õppekava väljavõtet ja arvestuse põhimõtteid.`
      : "Nikita T., 8. klass. Jalgpall 3× nädalas Pärnu Spordikoolis, eestikeelne treeningkeskkond. Võistlused ja laagrid. Treeneri kinnitus olemas. Koosta eelanalüüs.";

    const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-3-flash-preview",
        messages: [
          { role: "system", content: SYSTEM_INSTRUCTIONS },
          { role: "user", content: userInput },
        ],
      }),
    });

    if (!resp.ok) {
      const errText = await resp.text();
      console.error("AI gateway error", resp.status, errText);
      let msg = "AI päring ebaõnnestus.";
      if (resp.status === 429) msg = "Liiga palju päringuid, proovi hetke pärast uuesti.";
      else if (resp.status === 402) msg = "Lovable AI krediit on otsas. Lisa krediiti Settings → Workspace → Usage.";
      return new Response(JSON.stringify({ error: msg, status: resp.status, detail: errText.slice(0, 500) }), {
        status: resp.status,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await resp.json();
    const text: string = data.choices?.[0]?.message?.content ?? "";

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
