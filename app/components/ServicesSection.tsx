import React from 'react';
import ServiceCard from './ServiceCard';

export default function ServicesSection({ services }: { services: { id: string; title: string; excerpt: string; image?: string }[] }) {
  return (
    <section id="servicios" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Servicios</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard key={s.id} title={s.title} excerpt={s.excerpt} image={s.image ?? ''} />
          ))}
        </div>
      </div>
    </section>
  );
}
