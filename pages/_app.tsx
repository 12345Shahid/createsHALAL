// File: pages/_app.tsx
import { useEffect, useState } from "react";
import { supabase } from "../config/database";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();
  }, []);

  return <Component {...pageProps} user={user} />;
}

export default MyApp;
