"use client";

import { useState } from "react";
import PropertyModalWithTabs from "@/components/ui/PropertyModalWithTabs";
import { Button } from "@/components/ui/button";

interface TestPropertyCardWrapperProps {
  propertyId: string;
  locale: string;
}

export default function TestPropertyCardWrapper({ propertyId, locale }: TestPropertyCardWrapperProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
      <div className="mb-4">
        <div className="w-full h-32 bg-gray-200 rounded-lg flex items-center justify-center">
          <span className="text-gray-500">Propiedad #{propertyId}</span>
        </div>
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Propiedad de Prueba #{propertyId}
      </h3>
      
      <p className="text-gray-600 mb-4">
        Esta es una propiedad de prueba para verificar el funcionamiento del modal con tabs.
      </p>
      
      <Button
        className="w-full bg-jade-green text-white hover:bg-jade-green/90"
        onClick={() => setIsModalOpen(true)}
      >
        Ver Detalles
      </Button>

      <PropertyModalWithTabs
        propertyId={propertyId}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        locale={locale}
      />
    </div>
  );
}