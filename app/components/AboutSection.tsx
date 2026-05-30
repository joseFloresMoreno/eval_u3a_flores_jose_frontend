"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import SectionTitle from './SectionTitle';

type TeamMember = {
  name: string;
  role: string;
  image?: string;
};

export default function AboutSection({ about }: { about?: { title: string; intro: string; team?: TeamMember[] } }) {
  const [data, setData] = useState(about ?? { title: 'Sobre nosotros', intro: '', team: [] as TeamMember[] });

  useEffect(() => {
    let mounted = true;
    fetch('/api/about')
      .then((res) => res.json())
      .then((d) => {
        if (mounted && d) setData(d);
      })
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <section id="nosotros" className="py-16 scroll-mt-20">
      <div className="container mx-auto px-4">
        <SectionTitle title={data.title} eyebrow={undefined} variant="dark" />
        <p className="text-gray-700 mb-8">{data.intro}</p>

        {data.team && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {data.team.map((m: TeamMember) => {
              // normalize image path
              let img = m.image ?? '';
              if (img.startsWith('public/')) img = '/' + img.slice('public/'.length);
              return (
                <div key={m.name} className="p-4 border rounded-md flex items-center gap-4">
                  {img ? (
                    <div className="flex-shrink-0">
                      <Image src={img} alt={`${m.name} avatar`} width={96} height={96} className="rounded-full object-cover" />
                    </div>
                  ) : (
                    <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center text-xl font-semibold text-gray-700">
                      {m.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                    </div>
                  )}
                  <div>
                    <div className="font-semibold">{m.name}</div>
                    <div className="text-sm text-gray-600">{m.role}</div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
