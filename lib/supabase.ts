import { createClient, type SupabaseClient } from "@supabase/supabase-js";

let cachedClient: SupabaseClient | null = null;

export function hasSupabaseConfig(): boolean {
  return Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY);
}

export function getSupabaseServerClient(): SupabaseClient | null {
  if (!hasSupabaseConfig()) {
    return null;
  }

  if (!cachedClient) {
    const supabaseUrl = validateSupabaseUrl(process.env.NEXT_PUBLIC_SUPABASE_URL as string);
    cachedClient = createClient(
      supabaseUrl,
      process.env.SUPABASE_SERVICE_ROLE_KEY as string,
      {
        auth: {
          persistSession: false
        }
      }
    );
  }

  return cachedClient;
}

function validateSupabaseUrl(rawUrl: string): string {
  let url: URL;

  try {
    url = new URL(rawUrl);
  } catch {
    throw new Error(
      "Invalid NEXT_PUBLIC_SUPABASE_URL. Use the project API URL, for example https://<project-ref>.supabase.co."
    );
  }

  const isDashboardUrl =
    url.hostname === "supabase.com" ||
    url.hostname === "app.supabase.com" ||
    url.pathname.includes("/dashboard");

  if (isDashboardUrl) {
    throw new Error(
      "NEXT_PUBLIC_SUPABASE_URL is set to a Supabase dashboard URL. Use Project Settings > API > Project URL, for example https://<project-ref>.supabase.co."
    );
  }

  return url.toString().replace(/\/$/, "");
}
