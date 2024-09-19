import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import global from "../assets/global.jpg";
import img2 from "../assets/Img2.jpg";
import img3 from "../assets/Img3.jpg";

const slides = [
  {
    image: global,
    title: "Global Quality Food Exporter From India",
    description:
      "We export food including raw vegetables, fruits, spices & many more",
  },
  {
    image: img2,
    title: "Fresh Produce Straight from the Farm",
    description: "High-quality fruits and vegetables for global markets",
  },
  {
    image: img3,
    title: "Spices that Elevate Every Dish",
    description: "Authentic Indian spices exported worldwide",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[640px] bg-black mb-40 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full cursor-default transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img src={slide.image.src} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-black bg-opacity-55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
            <h1 className="text-5xl font-bold mb-4">{slide.title}</h1>
            <p className="text-lg max-w-2xl">{slide.description}</p>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-gray-800" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-10 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-gray-800" />
      </button>
    </div>
  );
};

export default Hero;
