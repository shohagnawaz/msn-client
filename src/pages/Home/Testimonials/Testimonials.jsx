import { useState, useEffect } from "react";

const testimonials = [
  { id: 1, name: "Alice", text: "Excellent service and fast delivery!" },
  { id: 2, name: "Bob", text: "Very reliable and easy to track my parcels." },
  { id: 3, name: "Carol", text: "Customer support is amazing and very helpful." },
  { id: 4, name: "David", text: "I trust this company for all my shipments." },
  { id: 5, name: "Eva", text: "Smooth and hassle-free delivery experience every time." },
  { id: 6, name: "Frank", text: "Real-time tracking works perfectly and keeps me updated." },
  { id: 7, name: "Grace", text: "Highly recommend their service to anyone needing fast shipping." },
  { id: 8, name: "Hannah", text: "Affordable and reliable — I am very satisfied." },
  { id: 9, name: "Ian", text: "The delivery was prompt and handled carefully." },
  { id: 10, name: "Jane", text: "Very professional service with a friendly team." },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const total = testimonials.length;

  // Auto slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, [total]);

  const handlePrev = () => {
    setCurrent((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrent((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  return (
    <div className="my-16 px-4">
      <h2 className="text-3xl font-bold text-center">
        What our customers are saying
      </h2>

      {/* Slider */}
      <div className="max-w-3xl mx-auto mt-6 overflow-hidden relative">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="flex-shrink-0 w-full p-4"
            >
              <div className="p-6 bg-base-100 shadow-md rounded-xl w-full">
                <p className="italic text-lg">"{t.text}"</p>
                <p className="mt-4 font-semibold text-right">— {t.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Buttons */}
      <div className="flex justify-center mt-6 space-x-4">
        <button className="btn btn-sm btn-outline" onClick={handlePrev}>
          Prev
        </button>
        <span className="font-medium">
          {current + 1} of {total}
        </span>
        <button className="btn btn-sm btn-outline" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
}
