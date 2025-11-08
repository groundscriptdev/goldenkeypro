"use client";

import { useEffect, useState } from "react";

export default function TestRawPage() {
  const [message, setMessage] = useState("Cargando...");

  useEffect(() => {
    console.log("🔥🔥🔥 TestRawPage: useEffect ejecutado");
    console.log("🔥🔥🔥 TestRawPage: typeof window:", typeof window);
    
    if (typeof window !== 'undefined') {
      setMessage("✅ Cliente-side renderizado");
      console.log("🔥🔥🔥 TestRawPage: Estamos en cliente");
    } else {
      setMessage("❌ Server-side renderizado");
      console.log("🔥🔥🔥 TestRawPage: Estamos en servidor");
    }
  }, []);

  return (
    <div style={{ padding: "20px", fontSize: "24px", backgroundColor: "yellow" }}>
      <h1>Test RAW (sin internacionalización)</h1>
      <p>{message}</p>
      <p>typeof window: {typeof window}</p>
      <button onClick={() => alert("Click funciona!")}>Probar Click</button>
    </div>
  );
}