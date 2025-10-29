// Ejemplo de cómo utilizar el componente Titulos en una página
import { Titulos } from './TItulos';

export function EjemploTitulos() {
  return (
    <div>
      {/* Otro contenido de la página */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contenido anterior</h2>
          <p className="text-gray-600">Este es un ejemplo de cómo el componente Titulos se integra con el resto del contenido.</p>
        </div>
      </section>

      {/* Componente Titulos adaptado */}
      <Titulos />

      {/* Contenido posterior */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-4">Contenido posterior</h2>
          <p className="text-gray-600">Después del componente Titulos, continúa el flujo normal de la página.</p>
        </div>
      </section>
    </div>
  );
}

export default EjemploTitulos;