
import ImageSlider from "../../components/ImageSlider";

const slides = [
  {
    image: "/image1.jpg",
    link: "/services/plumbing",
    title: "Plumbing Services",
    description: "Expert plumbing solutions for your home.",
    alt: "Plumbing service",
  },
  {
    image: "/image2.jpg",
    link: "/services/heating",
    title: "Heating Solutions",
    description: "Reliable heating installations and repairs.",
    alt: "Heating service",
  },
  {
    image: "/image3.jpg",
    link: "/services/construction",
    title: "Construction Projects",
    description: "Quality construction services for all needs.",
    alt: "Construction service",
  },
  {
    image: "/image4.jpg",
    link: "/about",
    title: "About Us",
    description: "Learn more about our expert team.",
    alt: "About us",
  },
];

export default function ImageSwiperUsage() {
  return <ImageSlider slides={slides} />;
}
