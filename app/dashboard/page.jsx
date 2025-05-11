"use client";
import styles from "../page.module.css";
import { useEffect, useState } from "react";
import { supabase } from "../../supabase/supabaseClient";
import { motion, AnimatePresence } from "framer-motion";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [serviceS, setService] = useState(null);

  useEffect(() => {
    // This grabs user from local storage
    const getUser = async () => {
      const {
        data: { user },
      } = await supabase.auth.getUser();
      setUser(user);
      console.log(user);
    };

    getUser();
  }, []);

  return (
    <main>
      <h1>Service Select</h1>
      {user ? <p>Welcome, {user.email}</p> : <p>Loading user info...</p>}
      <div className={styles.btnContain}>
        <div className={styles.serviceBtn}>
          Personal <br /> Transport
        </div>
        <div onClick={() => setService(aa)} className={styles.serviceBtn}>
          Item <br />
          Delivery
        </div>
        <div onClick={() => setService(aa)} className={styles.serviceBtn}>
          Light
          <br /> Moving
        </div>
        <div onClick={() => setService(aa)} className={styles.serviceBtn}>
          Grocery <br />
          Shopping
        </div>
        <div onClick={() => setService(aa)} className={styles.serviceBtn}>
          Food <br />
          Pickup
        </div>
        <div onClick={() => setService(aa)} className={styles.serviceBtn}>
          Prescription <br />
          Pickup
          
        </div>
        <div onClick={() => setService(aa)} className={styles.serviceBtn}>
          Custom <br />
          Job
        </div>
      </div>
    </main>
  );
}
