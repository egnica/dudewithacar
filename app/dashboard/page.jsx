"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";

export default function Dashboard() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
    };

    getUser();
  }, []);

  return (
    <main>
      <h1>Dashboard</h1>
      {user ? <p>Welcome, {user.email}</p> : <p>Loading user info...</p>}
    </main>
  );
}
