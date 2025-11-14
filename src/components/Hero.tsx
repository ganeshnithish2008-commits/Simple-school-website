export default function Hero() {
  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="container mx-auto px-6 py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Empowering Minds,<br />
            Shaping Futures
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join Brightwood Academy where excellence meets innovation.
            We provide world-class education to help students reach their full potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#courses" className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-center font-semibold">
              Explore Courses
            </a>
            <a href="#contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg border-2 border-blue-600 hover:bg-blue-50 transition-colors text-center font-semibold">
              Schedule a Visit
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
