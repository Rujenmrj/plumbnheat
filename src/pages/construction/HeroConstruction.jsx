export default function Hero() {
  return (
    <section
      className="w-full h-[80vh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/images/construction-hero.jpg')" }}
    >
      <div className="bg-black/60 p-10 rounded-2xl max-w-4xl text-center text-white">
        <h1 className="text-5xl font-bold mb-4">
          Expert Bathroom Renovations & Complete Building Solutions
        </h1>
        <p className="text-lg mb-6">
          From minor plumbing jobs to full property refurbishments — your
          trusted local builders in Aldershot, Hampshire.
        </p>
        <a
          href="tel:+441234567890"
          className="bg-secondary-500 hover:bg-secondary-400 transition text-white px-6 py-3 rounded-lg text-lg inline-block"
        >
          Call Now: 01234 567890
        </a>
        <a
          href="#contact"
          className="ml-4 bg-primary-500 hover:bg-primary-400 transition text-white px-6 py-3 rounded-lg text-lg inline-block"
        >
          Get a Free Estimate
        </a>
      </div>
    </section>
  );
}
