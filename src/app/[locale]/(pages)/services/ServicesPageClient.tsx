"use client";

import { useState, useEffect } from "react";
import { Titulos } from '@/components/groundscript/subheader';
import OpenAccClient from "./OpenAccClient";
import RealState from "./RealState";
import Accounting from "./Accounting";
import VisaPensionado from "./VisaPensionado";
import VisaInversionista from "./VisaInversionista";
import AllServices from "@/components/groundscript/AllServices";

interface ServicesPageClientProps {
  locale: string;
}

export default function ServicesPageClient({ locale }: ServicesPageClientProps) {
  const [activeTab, setActiveTab] = useState("open-acc-client");

  // Handle tab click with smooth scroll
  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    const element = document.getElementById(tabId);
    if (element) {
      const offset = 120; // Height of nav + some padding
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  // Handle scroll to update active tab
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "open-acc-client",
        "real-state",
        "accounting",
        "visa-pensionado",
        "visa-inversionista"
      ];

      const scrollPosition = window.scrollY + 150; // Offset for detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initial position

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Titulos
        titleKey="title"
        descriptionKey="subtitle"
        translationNamespace="services_page"
        backgroundImage="/images/tree.jpg"
        tabs={[
          { id: "open-acc-client", labelKey: "list.company_formation.title" },
          { id: "real-state", labelKey: "list.real_estate_advisory.title" },
          { id: "accounting", labelKey: "list.accounting.title" },
          { id: "visa-pensionado", labelKey: "list.pensionado_visa.title" },
          { id: "visa-inversionista", labelKey: "list.solvency_visa.title" }
        ]}
        defaultActiveTab="open-acc-client"
        activeTab={activeTab}
        onTabChange={handleTabClick}
      />

      <AllServices/>

      <OpenAccClient/>
      <RealState/>
      <Accounting/>
      <VisaPensionado/>
      <VisaInversionista/>
    </>
  );
}