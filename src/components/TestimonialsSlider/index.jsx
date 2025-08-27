import { useEffect, useRef, useState } from "react";

const testimonials = [
  { text: "As a dealer, partnering with Diamond Warranty has been a game-changer. My customers love the coverage options, and it's boosted my business.", author: "David Brown" },
  { text: "Diamond Warranty has been a lifesaver for my business. Their coverage is comprehensive and their customer service is top-notch.", author: "John Doe" },
  { text: "I've been using Diamond Warranty for years, and I couldn't be happier. They've always been there when I needed them.", author: "Jane Smith" },
  { text: "The peace of mind that comes with Diamond Warranty is priceless. I highly recommend their services to anyone looking for vehicle protection.", author: "Mike Johnson" },
  { text: "Diamond Warranty's claims process is smooth and efficient. They've made dealing with car issues so much less stressful.", author: "Sarah Williams" },
];

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(1);
  const sliderRef = useRef(null);
  const autoplayRef = useRef(null);
  const startX = useRef(0);

  // 🔥 Responsive items per view
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // large screens
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // medium screens
      } else {
        setItemsPerView(1); // small screens
      }
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);
    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  // 🔥 Autoplay
  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, [currentIndex, itemsPerView]);

  const startAutoSlide = () => {
    stopAutoSlide();
    autoplayRef.current = setInterval(() => slide("next"), 5000);
  };

  const stopAutoSlide = () => {
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = null;
    }
  };

  const slide = (direction) => {
    if (direction === "prev") {
      setCurrentIndex((prev) =>
        prev === 0 ? testimonials.length - itemsPerView : prev - 1
      );
    } else {
      setCurrentIndex((prev) =>
        prev >= testimonials.length - itemsPerView ? 0 : prev + 1
      );
    }
  };

  // 🔥 Touch swipe
  const handleTouchStart = (e) => {
    stopAutoSlide();
    startX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const diffX = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(diffX) > 50) {
      slide(diffX > 0 ? "next" : "prev");
    } else {
      startAutoSlide();
    }
  };

  return (
    <section className="mb-section flex flex-col gap-4 items-center lg:mb-[96px] md:mb-[64px] mb-[32px]">
      <h3 className="inline-block tracking-tighter text-3xl lg:text-4xl font-semibold text-gray/80">
        What People Say About Us
      </h3>

      <div
        className="relative overflow-hidden w-full"
        onMouseEnter={stopAutoSlide}
        onMouseLeave={startAutoSlide}
      >
      <div
  ref={sliderRef}
  className="slider flex transition-transform duration-300 ease-in-out"
  style={{
    transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
  }}
>
  {testimonials.map((item, idx) => (
    <div
      key={idx}
      className="slider-item flex-shrink-0 basis-full md:basis-1/3 p-4"
    >
      <div className="flex w-full rounded-2xl bg-secondary/5">
        <div className="p-6 lg:p-8 flex flex-col gap-4">
          <p className="tracking-tight text-base lg:text-lg text-gray/60 font-serif">
            {item.text}
          </p>
          <h6 className="tracking-tighter font-lexend text-md lg:text-lg font-semibold text-gray/80">
            {item.author}
          </h6>
        </div>
      </div>
    </div>
  ))}
</div>


        {/* Prev */}
        <button
          onClick={() => slide("prev")}
          className="slider-prev flex justify-center items-center size-10 absolute top-1/2 -translate-y-1/2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 active:scale-95 left-0 rotate-180"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>

        {/* Next */}
        <button
          onClick={() => slide("next")}
          className="slider-next flex justify-center items-center size-10 absolute top-1/2 -translate-y-1/2 bg-secondary/10 text-secondary rounded-full hover:bg-secondary/20 active:scale-95 right-0"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
      </div>
    </section>
  );
}
