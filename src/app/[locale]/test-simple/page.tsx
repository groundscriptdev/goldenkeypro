"use client";

import { useEffect, useState } from "react";

export default function TestSimplePage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    console.log("🔥 TestSimplePage: useEffect ejecutado");
    console.log("🔥 TestSimplePage: typeof window:", typeof window);
    
    setIsClient(true);
    
    if (typeof window !== 'undefined') {
      console.log("🔥 TestSimplePage: Estamos en cliente");
    } else {
      console.log("🔥 TestSimplePage: Estamos en servidor");
    }
  }, []);

  return (
    <div style={{ padding: "20px", fontSize: "24px", backgroundColor: "lightblue" }}>
      <h1>Test Simple</h1>
      <p>{isClient ? "✅ Cliente-side renderizado" : "⏳ Cargando..."}</p>
      <p>typeof window: {isClient ? typeof window : "undefined"}</p>
      {isClient && <button onClick={() => alert("Click funciona!")}>Probar Click</button>}
    </div>
  );
}