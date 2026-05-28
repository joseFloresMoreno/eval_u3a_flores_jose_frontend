import React from 'react';

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

export default function AboutSection({ about }: { about: { title: string; intro: string; team?: TeamMember[] } }) {
  return (
    <section id="nosotros" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-4">{about.title}</h2>
        <p className="text-gray-700 mb-8">{about.intro}</p>

        {about.team && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {about.team.map((m) => (
              <div key={m.name} className="p-4 border rounded-md">
                <div className="font-semibold">{m.name}</div>
                <div className="text-sm text-gray-600">{m.role}</div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
