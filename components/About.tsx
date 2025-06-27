import Image from "next/image";

export default function About() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <Image src="/web.png" alt="Our Team" className="rounded-xl shadow-lg" />
        <div>
          <h2 className="text-3xl font-bold mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            We’re a passionate team of designers, developers, and strategists
            who work together to craft exceptional digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
}
