'use client';
import { useEffect, useState } from "react";
import BannerImage from "../components/bannerImage/Banner";
import MainContent from "../components/mainContent/MainContent";

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const contentTop = document.getElementById("mainContent")?.getBoundingClientRect().top || 0;
      if (contentTop <= window.innerHeight) {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <BannerImage />
      <MainContent isVisible={isVisible} />
    </div>
  );
}
