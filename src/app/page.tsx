export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          Panama Golden Key
        </h1>
        <p className="text-xl text-center mb-8">
          Expert guidance for Chinese investors seeking Panama residency through
          investment opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Residency Programs</h2>
            <p className="text-gray-700">
              Learn about Panama's Qualified Investor Visa program and other
              residency options.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Real Estate</h2>
            <p className="text-gray-700">
              Explore premium investment properties in Panama's most desirable
              locations.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Medical Tourism</h2>
            <p className="text-gray-700">
              Discover world-class healthcare facilities and medical services in
              Panama.
            </p>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
