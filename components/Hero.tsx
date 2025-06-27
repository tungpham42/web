export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-br from-blue-500 to-purple-600 text-white px-6">
      <h1 className="text-5xl font-bold mb-4">We Build Stunning Websites</h1>
      <p className="text-lg max-w-xl mb-6">
        A creative web agency focused on design, development and results.
      </p>
      <a
        href="#contact"
        className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow hover:bg-blue-100 transition"
      >
        Let’s Work Together
      </a>
    </section>
  );
}
