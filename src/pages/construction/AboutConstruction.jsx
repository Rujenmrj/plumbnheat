import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function AboutConstruction() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
    <section
      ref={sectionRef}
      className={`max-w-6xl mx-auto px-4 py-16 text-center transition-all duration-1000 ${
        sectionVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10"
      }`}
    >
      <h2 className="text-3xl text-primary-600 font-semibold mb-6">
        Quality Building & Renovation Services
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Based in Aldershot, Hampshire, we provide top-quality building,
        renovation, and refurbishment services for homeowners and businesses.
        Our complete in-house solutions cover all your building needs, from
        structural works to heating, plumbing, and electrical installations. We
        are your one-stop shop for projects of any size. With over 15 years of
        experience, our team ensures quality, efficiency, and reliability in
        every project.
      </p>
    </section>
  );
}
