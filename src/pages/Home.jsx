import React from "react";
import { useOutletContext } from "react-router-dom";
import HeroSection from "@/components/site/HeroSection";
import AboutSection from "@/components/site/AboutSection";
import AnnouncementsSection from "@/components/site/AnnouncementsSection";
import SubscribeSection from "@/components/site/SubscribeSection";
import GallerySection from "@/components/site/GallerySection";
import ContactSection from "@/components/site/ContactSection";

export default function Home() {
  const { user } = useOutletContext();
  return (
    <>
      <HeroSection />
      <AboutSection />
      <AnnouncementsSection user={user} />
      <SubscribeSection user={user} />
      <GallerySection />
      <ContactSection />
    </>
  );
}