import { useEffect } from "react";
import Script from "next/script";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Ensure OneSignal loads only on the client side
    if (typeof window !== "undefined") {
      window.OneSignalDeferred = window.OneSignalDeferred || [];
      window.OneSignalDeferred.push(async (OneSignal) => {
        await OneSignal.init({
          appId: process.env.NEXT_PUBLIC_ONESIGNAL_APP_ID, // Use env variable
          notifyButton: { enable: true },
        });
      });
    }
  }, []);

  return (
    <>
      {/* Add OneSignal SDK Script */}
      <Script
        src="https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.page.js"
        strategy="lazyOnload"
      />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;