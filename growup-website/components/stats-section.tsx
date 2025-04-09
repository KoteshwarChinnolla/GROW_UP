export default function StatsSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-white to-indigo-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of professionals who have transformed their careers
            with our services
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-indigo-600 mb-2">15K+</div>
            <p className="text-gray-600 font-medium">Successful Placements</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-indigo-600 mb-2">98%</div>
            <p className="text-gray-600 font-medium">Client Satisfaction</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
            <p className="text-gray-600 font-medium">Corporate Partners</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-4xl font-bold text-indigo-600 mb-2">25K+</div>
            <p className="text-gray-600 font-medium">Career Transformations</p>
          </div>
        </div>
      </div>
    </section>
  );
}
