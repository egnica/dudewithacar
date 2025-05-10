"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "../../supabase/supabaseClient";

export default function AuthWatcher() {
  const router = useRouter();

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN") {
          router.replace("/dashboard");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [router]);

  return null;
}
