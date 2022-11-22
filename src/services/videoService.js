import { createClient } from "@supabase/supabase-js";

const PROJECT_URL = "https://eipskqnllidpnuokxncc.supabase.co";
const PUBLIC_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVpcHNrcW5sbGlkcG51b2t4bmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjkwNzE1MTQsImV4cCI6MTk4NDY0NzUxNH0.v_hcu6iyT8v45_ZuKQVLEi6eHh9JJUSHZBVJ_7g2k64";
const supabase = createClient(PROJECT_URL, PUBLIC_KEY);

export function videoService() {
    return {
        getAllVideos() {
            return supabase.from("video")
                    .select("*");
        }
    }
} 