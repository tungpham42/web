export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-600/70 to-purple-600/70 backdrop-blur-lg text-white px-6 border-b border-white/20">
      <h1 className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight drop-shadow-lg">
        Crafting Stunning Digital Worlds
      </h1>
      <p className="text-lg md:text-xl max-w-xl mb-6 font-light">
        A creative web agency obsessed with design, innovation, and impact.
      </p>
      <a
        href="#contact"
        className="px-8 py-4 bg-white/90 text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105"
      >
        Start the Journey
      </a>
    </section>
  );
}
