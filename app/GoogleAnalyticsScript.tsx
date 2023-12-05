import React from "react";
import Script from "next/script";

const GoogleAnalyticsScript = () => {
  return (
    <>
      {/* Google tag (gtag.js) */}
      <Script async src="https://www.googletagmanager.com/gtag/js?id=TAG_ID" />

      <Script id="my-script">{`window.dataLayer = window.dataLayer || [];
   function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());

   gtag('config', 'TAG_ID');`}</Script>
    </>
  );
};

export default GoogleAnalyticsScript;
