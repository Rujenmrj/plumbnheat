import { CheckCircle, Star, Users, ShieldCheck } from "lucide-react";

const OurValuesSection = () => {
  const values = [
    {
      icon: CheckCircle,
      title: "Reliability",
      text: "We show up when you need us and get the job done right.",
    },
    {
      icon: Star,
      title: "Quality Workmanship",
      text: "Every job, big or small, is handled with precision.",
    },
    {
      icon: Users,
      title: "Customer Care",
      text: "We treat your home like our own.",
    },
    {
      icon: ShieldCheck,
      title: "Fair Pricing",
      text: "No hidden fees — just honest quotes and trusted service.",
    },
  ];

  return (
    <section className="bg-primary-100 py-26">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-primary-500 mb-15 leading-tight">
          Our Values
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10">
          {values.map(({ icon: Icon, title, text }) => (
            <div
              key={title}
              className="bg-white rounded-xl p-8 shadow-md border border-primary-100 flex flex-col items-center text-center 
                         hover:shadow-lg hover:-translate-y-1 transition-all duration-200"
            >
              <div className="bg-primary-500 text-white p-4 rounded-full mb-4 flex items-center justify-center">
                <Icon className="w-10 h-10" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-[#2e2e2e]">{title}</h4>
              <p className="text-gray-600 text-base">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
