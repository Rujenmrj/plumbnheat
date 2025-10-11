import ImageSlider from "../../components/ImageSlider";
import { useScrollAnimation } from "../../components/hooks/useScrollAnimation"; 

const slides = [
  {
    image: "/home/construction.png",
    link: "/services/construction",
    title: "Construction Services",
    alt: "Construction worker",
  },
  {
    image: "/home/plumbing.png",
    link: "/services/plumbing",
    title: "Plumbing Solutions",
    alt: "Plumbing technician",
  },
  {
    image: "/home/heating.png",
    link: "/services/heating",
    title: "Heating Services",
    alt: "Heating worker",
  },
];

export default function HeroSection() {
  const [ref, isVisible] = useScrollAnimation(0.2);

  return (
    <section className="bg-primary-100 w-full">
      <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-primary-600 mb-6 leading-tight">
          Reliable Plumbing & Heating Solutions
        </h1>
        <p className="text-gray-600 text-lg mb-8 max-w-lg">
          Professional plumbing, heating, and maintenance services you can trust — serving homes and businesses with excellence and care.
        </p>
        <button className="bg-secondary-500 hover:bg-secondary-400 text-white px-6 py-3 rounded-lg font-semibold transition">
          Emergency Call: <span className="font-bold">+977 980-XXXXXXX</span>
        </button>
        <div className="mt-10 flex justify-center md:justify-start gap-8 text-primary-600">
          <div className="text-center">
            <h3 className="text-3xl font-bold">1200+</h3>
            <p className="text-gray-700">Happy Customers</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">10+</h3>
            <p className="text-gray-700">Years Experience</p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold">24/7</h3>
            <p className="text-gray-700">Service</p>
          </div>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <ImageSlider slides={slides} />
      </div>
    </div>
  </section>
);
}