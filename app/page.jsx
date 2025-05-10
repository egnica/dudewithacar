"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import { supabase } from "../supabase/supabaseClient";

export default function Home() {
  const dev = "http://localhost:3002/dashboard";
  const live = "https://dudewithacar.com/dashboard";
  const redirectUrl = process.env.NODE_ENV === "development" ? dev : live;

  const handleGoogleLogin = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: redirectUrl,
      },
    });

    if (error) {
      console.error("Google sign-in error:", error.message);
    }
  };
  return (
    <div className={styles.page}>
      <h1>Dude with a Car (dot com)</h1>
      <h2>Coming soon</h2>
      <p>Sign in:</p>
      <button onClick={handleGoogleLogin}>Sign in with Google</button>
    </div>
  );
}
