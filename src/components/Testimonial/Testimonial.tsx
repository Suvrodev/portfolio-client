"use client";
import "./Testimonial.css";
import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard/TestimonialCard";
import { TTestimonial } from "@/utils/types/globalTypes";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const startX = useRef<number | null>(null);

  useEffect(() => {
    fetch("/testimonial.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  // Auto-slide every 3 seconds
  useEffect(() => {
    if (testimonials.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]); // Added dependency to fix issue

  // Handle touch/swipe events
  const handleStart = (e: React.MouseEvent | React.TouchEvent) => {
    startX.current = "touches" in e ? e.touches[0].clientX : e.clientX;
  };

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (startX.current === null) return;

    const x = "touches" in e ? e.touches[0].clientX : e.clientX;
    const deltaX = x - startX.current;

    if (deltaX > 50) {
      // Swipe right (previous)
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      startX.current = null;
    } else if (deltaX < -50) {
      // Swipe left (next)
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      startX.current = null;
    }
  };

  const handleEnd = () => {
    startX.current = null;
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold pText mb-10">Testimonial</h1>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-2xl md:text-3xl font-bold pText text-center mb-10">
          OUR SATISFIED CUSTOMERS FEEDBACK
        </h1>
      </div>

      <div
        className="testimonial-container  "
        onMouseDown={handleStart}
        onMouseMove={handleMove}
        onMouseUp={handleEnd}
        onMouseLeave={handleEnd}
        onTouchStart={handleStart}
        onTouchMove={handleMove}
        onTouchEnd={handleEnd}
      >
        <div
          className="testimonial-wrapper"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {testimonials.map((testimonial: TTestimonial, index: number) => (
            <div key={index} className="testimonial-slide">
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
