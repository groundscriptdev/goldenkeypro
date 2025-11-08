"use client";

import { useEffect, useState } from "react";

export default function TestRawClientPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("🔥🔥🔥 TestRawClientPage: useEffect EJECUTADO en cliente");
    setMounted(true);
    
    // Test básico de API
    fetch('/api/proxy/properties')
      .then(res => res.json())
      .then(data => {
        console.log("🔥🔥🔥 TestRawClientPage: Datos recibidos:", data.results?.length || 0);
      })
      .catch(err => {
        console.error("🔥🔥🔥 TestRawClientPage: Error:", err);
      });
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test Raw Client</h1>
      <p>Estado: {mounted ? "✅ Montado en cliente" : "❌ No montado"}</p>
      <p>Timestamp: {new Date().toISOString()}</p>
    </div>
  );
}