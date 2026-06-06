"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [fadeLogo, setFadeLogo] = useState(false);
  const [hideIntro, setHideIntro] = useState(false);

  useEffect(() => {
    const logoTimer = setTimeout(() => {
      setFadeLogo(true);
    }, 1200);

    const introTimer = setTimeout(() => {
      setHideIntro(true);
    }, 2000);

    return () => {
      clearTimeout(logoTimer);
      clearTimeout(introTimer);
    };
  }, []);

  if (hideIntro) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-[#f8f7f4] flex items-center justify-center">
      <img
        src="/logo-intro.png"
        alt="Ninni Puglisi"
        className={`
          w-[90px] md:w-[140px] h-auto
          transition-opacity duration-700
          ${fadeLogo ? "opacity-0" : "opacity-100"}
        `}
      />
    </div>
  );
}