const services = [
  {
    title: "Web Design",
    desc: "Sleek, responsive, and visually captivating websites.",
  },
  {
    title: "Development",
    desc: "From elegant static sites to robust full-stack apps.",
  },
  {
    title: "SEO & Marketing",
    desc: "Boost your visibility and dominate search rankings.",
  },
];

export default function Services() {
  return (
    <section className="py-16 px-6 bg-gray-50/30 backdrop-blur-md rounded-xl mx-4 my-8 border border-white/20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-10 tracking-tight text-gray-900 drop-shadow">
          What We Offer
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <div
              key={i}
              className="bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-white/30"
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {s.title}
              </h3>
              <p className="text-gray-600 font-light">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
