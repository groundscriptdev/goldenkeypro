"use client";

import { useSimplePropertiesWorking } from "@/hooks/useSimplePropertiesWorking";
import { useSimpleTest } from "@/hooks/useSimpleTest";
import DirectPropertyLoader from "./DirectPropertyLoader";

export default function TestHookComponent() {
  console.log("TestHookComponent: Renderizado");
  
  // Probar el hook simple primero
  const { data, loading: testLoading } = useSimpleTest();
  
  const { properties, loading, error } = useSimplePropertiesWorking({
    autoFetch: true
  });

  console.log("TestHookComponent: data:", data, "testLoading:", testLoading);
  console.log("TestHookComponent: properties:", properties, "loading:", loading, "error:", error);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Test Hook Component</h1>
      
      <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-lg font-bold mb-2">Simple Test Hook:</h2>
        <p>Data: {data}</p>
        <p>Loading: {testLoading ? "Yes" : "No"}</p>
      </div>
      
      <div className="p-4 border border-gray-300 rounded">
        <h2 className="text-lg font-bold mb-2">Properties Hook:</h2>
        <p>Loading: {loading ? "Yes" : "No"}</p>
        <p>Error: {error || "None"}</p>
        <p>Properties count: {properties.length}</p>
        {properties.length > 0 && (
          <div>
            <h3 className="font-semibold">First property:</h3>
            <pre className="text-xs">{JSON.stringify(properties[0], null, 2)}</pre>
          </div>
        )}
      </div>
      
      <DirectPropertyLoader />
    </div>
  );
}