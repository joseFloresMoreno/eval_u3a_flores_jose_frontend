"use client";

import React, { useState } from "react";
import Image from "next/image";
const NAV_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#faq", label: "Preguntas Frecuentes" },
  { href: "#contactanos", label: "Contáctanos" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("#servicios");

  React.useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#',''));
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive('#' + entry.target.id);
          }
        });
      },
      { root: null, rootMargin: '0px 0px -45% 0px', threshold: 0.1 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-50 mb-8 rounded-3xl border border-[#3ea4c9]/20 bg-white/90 p-4 shadow-[0_10px_30px_rgba(9,57,95,0.08)] backdrop-blur md:mb-14 md:p-6">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-2">
        <div className="flex items-center gap-3">
          <Image
            src="/cropped-logo-cdn-2021.png"
            alt="Logo Centros de Negocios Sercotec"
            width={180}
            height={50}
            priority
            className="h-auto w-auto"
          />
        </div>

        <nav>
          <ul className="hidden items-center gap-4 text-sm font-semibold md:flex md:text-base">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setActive(l.href)}
                  className={`rounded-md px-3 py-2 transition-colors duration-200 ${
                    active === l.href
                      ? 'bg-[#eaf6fb] text-[#043f6c] font-bold'
                      : 'text-[#09395f] hover:text-[#043f6c] hover:bg-[#f1f6f9]'
                  }`}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="md:hidden">
            <button
              aria-label="Abrir menú"
              onClick={() => setOpen((s) => !s)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-[#09395f] text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                className="h-5 w-5"
              >
                {open ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {open && (
        <div className="md:hidden mt-3">
          <div className="mx-auto max-w-6xl rounded-2xl border border-slate-200 bg-white p-4">
            <ul className="flex flex-col gap-2">
              {NAV_LINKS.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => {
                      setOpen(false);
                      setActive(l.href);
                    }}
                    className="block rounded-md px-3 py-2 text-[#09395f] hover:bg-[#f1f1f1]"
                  >
                    {l.label}
                  </a>
                </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
