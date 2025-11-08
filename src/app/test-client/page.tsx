"use client";

import { useEffect, useState } from "react";

export default function TestClientPage() {
  const [count, setCount] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    console.log("🔥🔥🔥 TestClientPage: useEffect EJECUTADO EN CLIENTE");
    console.log("🔥🔥🔥 TestClientPage: typeof window:", typeof window);
    console.log("🔥🔥🔥 TestClientPage: document disponible:", !!document);
    
    setMounted(true);
  }, []);

  const handleClick = () => {
    console.log("🔥🔥🔥 TestClientPage: Botón clickeado");
    setCount(count + 1);
  };

  return (
    <div style={{ 
      padding: "40px", 
      fontSize: "24px", 
      backgroundColor: mounted ? "#90EE90" : "#FFB6C1",
      minHeight: "100vh"
    }}>
      <h1>🔥 TEST CLIENTE (Fuera de internacionalización)</h1>
      <p>Estado: {mounted ? "✅ Montado en cliente" : "⏳ Esperando..."}</p>
      <p>typeof window: {typeof window}</p>
      <p>Contador: {count}</p>
      <button 
        onClick={handleClick}
        style={{
          padding: "10px 20px",
          fontSize: "18px",
          backgroundColor: "#0070f3",
          color: "white",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}
      >
        Incrementar Contador
      </button>
      
      {!mounted && (
        <div style={{ marginTop: "20px", color: "red" }}>
          ⚠️ Si ves esto por mucho tiempo, el useEffect no se está ejecutando
        </div>
      )}
    </div>
  );
}