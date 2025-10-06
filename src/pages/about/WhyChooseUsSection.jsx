import { Clock, Users, ThumbsUp, ShieldCheck, Tag } from "lucide-react";

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
    icon: Tag,
    title: "Cheapest Rates in Aldershot",
    desc: "Starting from £160 emergency call-out, beating local competitors’ rates.",
  },
  {
    icon: ShieldCheck,
    title: "Guaranteed Work",
    desc: "All our services come with quality assurance and reliability.",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-26 bg-white">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-15 leading-tight">
          Why Choose Us
        </h2>

        <div className="flex overflow-x-auto gap-6 snap-x snap-mandatory md:grid md:grid-cols-5 md:overflow-visible md:gap-8 scrollbar-hide">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 shadow-md flex flex-col items-center text-center min-w-[200px] md:min-w-0 hover:shadow-lg transition-all duration-200 snap-start"
            >
              <div className="bg-[#f24e4b] text-white w-12 h-12 mb-3 flex items-center justify-center rounded-full">
                <Icon className="w-6 h-6" />
              </div>
              <h4 className="font-semibold mb-2 text-[#2e2e2e]">{title}</h4>
              <p className="text-gray-600 text-sm">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
