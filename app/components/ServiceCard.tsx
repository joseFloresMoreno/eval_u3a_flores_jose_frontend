"use client";

import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  description?: string;
  excerpt?: string;
  imageSrc?: string;
  image?: string;
};

export default function ServiceCard({ title, description, excerpt, imageSrc, image }: Props) {
  const handleContact = () => {
    // emit event so ContactForm can update its select value
    try {
      window.dispatchEvent(new CustomEvent("select-service", { detail: title }));
    } catch {}
    const contactSection = document.getElementById("contactanos");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    try {
      history.replaceState(null, "", `#contactanos`);
    } catch {}
  };
  const placeholderSvg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 120 120'><rect width='120' height='120' fill='%23f3f4f6'/><circle cx='92' cy='28' r='18' fill='%23ef4040'/><path d='M0 90 L34 54 L68 90 L102 50 L120 80 L120 120 L0 120 Z' fill='%23e5e7eb'/></svg>`;
  // prefer explicit props, fallback to alternate names
  const desc = description ?? excerpt ?? '';
  let rawImg = imageSrc ?? image ?? '';
  // normalize paths that include `public/` to start with `/`
  if (rawImg && rawImg.startsWith('public/')) {
    rawImg = '/' + rawImg.slice('public/'.length);
  }
  const imgSrc = rawImg || `data:image/svg+xml;utf8,${encodeURIComponent(placeholderSvg)}`;

  return (
    <article className="group rounded-2xl border border-slate-200 bg-white overflow-hidden transition hover:-translate-y-1 hover:border-[#3ea4c9]/40 hover:shadow-[0_18px_35px_rgba(9,57,95,0.16)] flex flex-col md:flex-row">
      <div className="relative h-48 md:h-auto md:w-1/3 flex-shrink-0">
        <Image src={imgSrc} alt={title} fill className="object-cover" />
      </div>
      <div className="flex-1 p-6">
        <h4 className="text-xl font-extrabold tracking-tight text-slate-900 group-hover:text-[#3ea4c9]">{title}</h4>
        <p className="mt-3 text-sm leading-7 text-slate-600">{desc}</p>
        <div className="mt-4">
          <button type="button" onClick={handleContact} className="rounded-full bg-[#ef4040] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#d53a3a] cursor-pointer">
            Contáctanos
          </button>
        </div>
      </div>
    </article>
  );
}
