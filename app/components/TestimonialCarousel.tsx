"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

type Testimonial = {
  quote: string;
  author: string;
  role?: string;
};

type Props = {
  items: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
};

export default function TestimonialCarousel({ items, autoPlay = true, interval = 6000 }: Props) {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const [nextIndex, setNextIndex] = useState(0);
  const [animate, setAnimate] = useState(false);
  const currentIndexRef = useRef(index);

  

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") setIndex((i) => (i - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") setIndex((i) => (i + 1) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [items.length]);

  useEffect(() => {
    currentIndexRef.current = index;
  }, [index]);

  const startTransition = useCallback(
    (n: number) => {
      if (transitioning) return;
      const next = (n + items.length) % items.length;
      setNextIndex(next);
      setTransitioning(true);
      setAnimate(false);
      // kick off transition on next frame
      requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      setTimeout(() => {
        setIndex(next);
        setTransitioning(false);
      }, 500);
    },
    [items.length, transitioning]
  );

  const go = (n: number) => startTransition(n);

  useEffect(() => {
    if (!autoPlay || paused) return;
    const t = setInterval(() => {
      startTransition((currentIndexRef.current + 1) % items.length);
    }, interval);
    return () => clearInterval(t);
  }, [autoPlay, paused, interval, items.length, startTransition]);

  return (
    <section
      aria-label="Testimonios"
      className="relative mx-auto max-w-6xl"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      ref={containerRef}
    >
      <div className="overflow-hidden rounded-2xl p-6 bg-transparent">
        <div className="relative min-h-[140px] flex items-center justify-center">
          {!transitioning && (
            <article className="w-full" aria-hidden={false} tabIndex={0}>
              <TestimonialCard quote={items[index].quote} author={items[index].author} role={items[index].role} />
            </article>
          )}

          {transitioning && (
            <>
              <div className={`absolute inset-0 transition-opacity duration-500 ${animate ? "opacity-0" : "opacity-100"}`}>
                <TestimonialCard quote={items[index].quote} author={items[index].author} role={items[index].role} />
              </div>
              <div className={`absolute inset-0 transition-opacity duration-500 ${animate ? "opacity-100" : "opacity-0"}`}>
                <TestimonialCard quote={items[nextIndex].quote} author={items[nextIndex].author} role={items[nextIndex].role} />
              </div>
            </>
          )}
        </div>
      </div>

      <button
        aria-label="Anterior testimonio"
        onClick={() => go(index - 1)}
        className="hidden md:flex md:absolute md:left-2 md:top-1/2 md:-translate-y-1/2 md:p-2 text-slate-700 hover:text-[#3ea4c9] cursor-pointer focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        aria-label="Siguiente testimonio"
        onClick={() => go(index + 1)}
        className="hidden md:flex md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:p-2 text-slate-700 hover:text-[#3ea4c9] cursor-pointer focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      <div className="mt-6 flex flex-col items-center gap-3">
        <div className="flex items-center gap-2">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Ir al testimonio ${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
              className={`h-2 w-8 rounded-full transition-colors ${i === index ? "bg-[#3ea4c9]" : "bg-slate-200"}`}
            />
          ))}
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            aria-label="Anterior testimonio"
            onClick={() => go(index - 1)}
            className="p-2 text-slate-700 hover:text-[#3ea4c9] cursor-pointer focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            aria-label="Siguiente testimonio"
            onClick={() => go(index + 1)}
            className="p-2 text-slate-700 hover:text-[#3ea4c9] cursor-pointer focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
