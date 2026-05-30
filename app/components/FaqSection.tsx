"use client";

import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';

export default function FaqSection({ faqs }: { faqs?: { q: string; a: string }[] }) {
  const [items, setItems] = useState(faqs ?? []);

  useEffect(() => {
    let mounted = true;
    fetch('/api/faqs')
      .then((res) => res.json())
      .then((data) => {
        if (mounted && Array.isArray(data)) setItems(data);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="faq" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Preguntas Frecuentes" variant="dark" />
        <div className="space-y-3">
          {items.map((f, i) => (
            <details key={i} className="border rounded-md p-4">
              <summary className="cursor-pointer font-semibold">{f.q}</summary>
              <div className="mt-2 text-gray-700">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
