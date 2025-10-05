import React from "react";
import AboutHero from "../components/AboutHero";
import AboutStats from "../components/AboutStats";
import AboutMission from "../components/AboutMission";
import AboutTeam from "../components/AboutTeam";
import ContactSection from "../components/ContactSection";
import NewsletterSection from "../components/NewsletterSection";

export default function About() {
  return (
    <div className="bg-[#0e0122] min-h-screen">
      <AboutHero />
      <AboutStats />
      <AboutMission />
      <AboutTeam />
      <ContactSection></ContactSection>
      <NewsletterSection></NewsletterSection>
    </div>
  );
}
