// TikTokPixel.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const TikTokPixel = ({ pixelId }) => {
  return (
    <Helmet>
      <script>
        {`
          !function (w, d, t) {
            w.TiktokAnalyticsObject=t;
            var ttq=w[t]=w[t]||[];
            ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
            ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
            for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
            ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
            ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js";var o=n&&n.partner;ttq._i=ttq._i||{};ttq._i[e]=[];ttq._i[e]._u=r;ttq._t=ttq._t||{};ttq._t[e]=+new Date;ttq._o=ttq._o||{};ttq._o[e]=n||{};var script=d.createElement("script");script.type="text/javascript";script.async=true;script.src=r+"?sdkid="+e+"&lib="+t;var firstScript=d.getElementsByTagName("script")[0];firstScript.parentNode.insertBefore(script,firstScript)};
            ttq.load('${pixelId}');
            ttq.page();
          }(window, document, 'ttq');
        `}
      </script>
    </Helmet>
  );
};

export default TikTokPixel;