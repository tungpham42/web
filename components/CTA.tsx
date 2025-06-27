export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-br from-blue-500/50 to-purple-500/50 backdrop-blur-lg text-white py-16 px-6 text-center rounded-xl mx-4 my-8 border border-white/20 shadow-lg"
    >
      <h2 className="text-4xl font-extrabold mb-4 tracking-tight drop-shadow">
        Ready to Ignite Your Project?
      </h2>
      <p className="mb-6 text-lg font-light">
        Transform your vision into reality. Reach out today!
      </p>
      <a
        href="mailto:contact@soft.io.vn"
        className="inline-block px-8 py-4 bg-white/90 text-blue-600 font-semibold rounded-xl shadow-lg hover:bg-blue-100/80 transition-all duration-300 transform hover:scale-105"
      >
        Connect Now
      </a>
    </section>
  );
}
