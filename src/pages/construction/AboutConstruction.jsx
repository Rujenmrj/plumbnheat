import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

export default function AboutConstruction() {
  const [sectionRef, sectionVisible] = useScrollAnimation(0.1);

  return (
    <section 
      ref={sectionRef}
      className={`max-w-6xl mx-auto px-4 py-16 text-center transition-all duration-1000 ${
        sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <h2 className="text-3xl font-semibold mb-6">
        Comprehensive Building & Plumbing Services
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Based in Aldershot, Hampshire, we provide top-quality building,
        renovation, and plumbing services for homeowners and businesses alike.
        Whether you're planning a full bathroom renovation, an extension, or an
        emergency plumbing repair, our skilled team is ready to deliver
        exceptional craftsmanship — on time and within budget.
      </p>
    </section>
  );
}
