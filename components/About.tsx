import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-6 bg-white/30 backdrop-blur-md rounded-xl mx-4 my-8 border border-white/20">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <Image
            src="/web.png"
            alt="Our Team"
            width={500}
            height={500}
            className="rounded-xl shadow-lg border border-white/30"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl"></div>
        </div>
        <div>
          <h2 className="text-4xl font-extrabold mb-4 tracking-tight text-gray-900 drop-shadow">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed font-light">
            We’re a dynamic team of designers, developers, and strategists
            crafting immersive digital experiences that captivate and inspire.
          </p>
        </div>
      </div>
    </section>
  );
}
