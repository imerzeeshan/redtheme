"use client";
import { useEffect, useRef, useState } from "react";

export default function SkillBar({ label, percentage }) {
  const barRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);

  // Observe visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.3 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => {
      if (barRef.current) observer.unobserve(barRef.current);
    };
  }, [hasAnimated]);

  // Animate with requestAnimationFrame
  useEffect(() => {
    if (!hasAnimated) return;

    let start: number | null = null;
    const duration = 3000;

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percent = Math.min((progress / duration) * percentage, percentage);
      setWidth(Math.round(percent));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [hasAnimated, percentage]);

  return (
    <li
      className={`mt-4 transition-opacity duration-700 ${
        hasAnimated ? "opacity-100" : "opacity-0"
      }`}
      ref={barRef}
    >
      <div className="text-gray-700 font-medium mb-1">{label}</div>

      <div className="relative w-full h-1 bg-gray-300 rounded-full overflow-visible">
        {/* Progress Fill */}
        <div
          className="h-1 bg-red-700 rounded-full transition-all duration-100"
          style={{ width: `${width}%` }}
        ></div>

        {/* Circle + Percentage */}
        <div
          className="absolute -top-6 flex flex-col items-center transition-all duration-100"
          style={{ left: `calc(${width}% - 20px)` }}
        >
          <span className="text-sm text-red-700 font-semibold">{width}%</span>
          <div className="w-3 h-3 bg-red-700 rounded-full"></div>
        </div>
      </div>
    </li>
  );
}
