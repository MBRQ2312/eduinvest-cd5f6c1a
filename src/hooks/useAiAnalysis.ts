import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";

interface AiResult {
  text: string;
  id?: string;
}

const cache = new Map<string, AiResult>();

/**
 * Käivitab AI eelanalüüsi taustal. Cache'itud sessiooni jaoks, et mitte
 * uut päringut iga vaate avamise peale teha. Kasutaja ei näe spinner'it —
 * see hook töötab "fire and forget" stiilis taustal.
 */
export const useAiAnalysis = (caseData: unknown) => {
  const key = JSON.stringify(caseData);
  const [data, setData] = useState<AiResult | null>(cache.get(key) ?? null);
  const [isLoading, setIsLoading] = useState(!cache.has(key));
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (cache.has(key)) {
      setData(cache.get(key)!);
      setIsLoading(false);
      return;
    }
    let cancelled = false;
    setIsLoading(true);
    supabase.functions
      .invoke("ai-preanalysis", { body: { caseData } })
      .then(({ data: res, error: err }) => {
        if (cancelled) return;
        if (err) {
          setError(err.message);
        } else if (res) {
          const result = res as AiResult;
          cache.set(key, result);
          setData(result);
        }
        setIsLoading(false);
      })
      .catch((e) => {
        if (cancelled) return;
        setError(e instanceof Error ? e.message : "Tundmatu viga");
        setIsLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [key, caseData]);

  return { data, isLoading, error };
};
