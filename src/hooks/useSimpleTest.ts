import { useState, useEffect } from "react";

export const useSimpleTest = () => {
  console.log("useSimpleTest: Hook inicializado");
  
  const [data, setData] = useState<string>("initial");
  const [loading, setLoading] = useState<boolean>(false);

  console.log("useSimpleTest: Antes del useEffect");

  useEffect(() => {
    console.log("useSimpleTest: useEffect EJECUTADO!");
    setLoading(true);
    
    // Simular una llamada API
    setTimeout(() => {
      console.log("useSimpleTest: Simulando respuesta de API");
      setData("data loaded");
      setLoading(false);
    }, 1000);
  }, []);

  console.log("useSimpleTest: Después del useEffect");

  return { data, loading };
};