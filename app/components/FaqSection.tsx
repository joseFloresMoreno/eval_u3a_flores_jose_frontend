import React from 'react';

export default function FaqSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section id="faq" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-6">Preguntas Frecuentes</h2>
        <div className="space-y-3">
          {faqs.map((f, i) => (
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
