"use client";

import { useEffect } from "react";

export default function LandbotScript() {
  useEffect(() => {
    // Votre script Landbot original
    const initLandbot = () => {
      if (!window.myLandbot) {
        const s = document.createElement("script");
        s.type = "module";
        s.async = true;
        s.addEventListener("load", function () {
          window.myLandbot = new window.Landbot.Livechat({
            configUrl:
              "https://storage.googleapis.com/landbot.online/v3/H-3142602-TWAIPZQE3UCW7L0F/index.json",
          });
        });
        s.src = "https://cdn.landbot.io/landbot-3/landbot-3.0.0.mjs";
        const x = document.getElementsByTagName("script")[0];
        x.parentNode.insertBefore(s, x);
      }
    };

    // Événements pour initialiser Landbot
    window.addEventListener("mouseover", initLandbot, { once: true });
    window.addEventListener("touchstart", initLandbot, { once: true });

    // Nettoyage
    return () => {
      window.removeEventListener("mouseover", initLandbot);
      window.removeEventListener("touchstart", initLandbot);
    };
  }, []);

  return null; // Ce composant ne rend rien
}
