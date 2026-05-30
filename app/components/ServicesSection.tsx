"use client";

import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';
import SectionTitle from './SectionTitle';

export default function ServicesSection({ services }: { services?: { id: string; title: string; excerpt: string; image?: string }[] }) {
  const [items, setItems] = useState(services ?? []);

  useEffect(() => {
    let mounted = true;
    fetch('/api/services')
      .then((res) => res.json())
      .then((data) => {
        if (mounted && Array.isArray(data)) setItems(data);
      })
      .catch(() => {
        // network or dev error: keep fallback items if provided
      });
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="servicios" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title="Servicios" eyebrow={undefined} variant="dark" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {items.map((s: any) => (
            <ServiceCard key={s.id ?? s.title} title={s.title} excerpt={s.excerpt} image={s.image ?? ''} />
          ))}
        </div>
      </div>
    </section>
  );
}
