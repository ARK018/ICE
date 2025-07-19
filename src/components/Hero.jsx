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
    <div className="relative w-full min-h-[100vh] bg-black mb-20 sm:mb-32 md:mb-40 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image.src}
            alt={slide.title}
            className="object-cover w-full h-full"
            loading={index === 0 ? "eager" : "lazy"}
          />
          <div className="absolute inset-0 bg-black bg-opacity-55" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4 sm:p-6 md:p-8">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 px-4 sm:px-6 leading-tight">
              {slide.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg max-w-[90%] sm:max-w-2xl px-4 sm:px-6 text-white/80">
              {slide.description}
            </p>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-6 md:left-10 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1.5 sm:p-2 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-6 md:right-10 top-1/2 transform -translate-y-1/2 bg-white/30 hover:bg-white/50 rounded-full p-1.5 sm:p-2 transition-all focus:outline-none focus:ring-2 focus:ring-white/50"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-white/50
              ${
                index === currentSlide
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
