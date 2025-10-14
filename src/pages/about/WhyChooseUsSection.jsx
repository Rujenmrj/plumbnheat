import { Clock, Users, ThumbsUp, ShieldCheck, Tag } from "lucide-react";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation";

const features = [
  {
    icon: Users,
    title: "Experienced Professionals",
    desc: "Our team consists of certified and skilled plumbers and technicians.",
  },
  {
    icon: Clock,
    title: "24/7 Availability",
    desc: "We’re always ready to help — day or night, rain or shine.",
  },
  {
    icon: ThumbsUp,
    title: "Customer Satisfaction",
    desc: "We prioritize our clients’ comfort and safety above all else.",
  },
  
  {
    icon: ShieldCheck,
    title: "Guaranteed Work",
    desc: "All our services come with quality assurance and reliability.",
  },
];

const WhyChooseUsSection = () => {
  const [titleRef, titleVisible] = useScrollAnimation(0.1);
  const [cardsRef, cardsVisible] = useScrollAnimation(0.1);

  return (
    <section className="pt-20 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <div 
          ref={titleRef}
          className={`transition-all duration-1000 ${
            titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-500s mb-4 leading-tight">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg mb-12">
            Here's why homeowners across <span className="text-secondary-500 font-semibold">Aldershot, Hampshire</span> choose us.
          </p>
        </div>

        {/* feature cards */}

        <div
          ref={cardsRef}
          className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 transition-all duration-1000 delay-200 ${
            cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-8 shadow-md flex flex-col justify-between items-center text-center h-full md:h-[240px] hover:shadow-lg transition-all duration-200"
            >
              <div className="flex flex-col items-center">
                <div className="bg-[var(--color-secondary-500)] text-white w-12 h-12 mb-3 flex items-center justify-center rounded-full shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <h4 className="font-semibold mb-2 text-[#2e2e2e] text-lg">{title}</h4>
                <p className="text-gray-600 text-sm h-[60px] leading-relaxed">{desc}</p>
              </div>
              
          
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default WhyChooseUsSection;
