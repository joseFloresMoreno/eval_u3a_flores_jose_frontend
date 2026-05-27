"use client";

import React from "react";

type Props = {
  quote: string;
  author: string;
  role?: string;
};

export default function TestimonialCard({ quote, author, role }: Props) {
  return (
    <div className="w-full">
      <div className="mx-auto max-w-3xl rounded-2xl bg-transparent p-6">
        <p className="text-base md:text-lg leading-7 md:leading-8 text-slate-800 italic text-center">{quote}</p>
        <footer className="mt-4 text-center">
          <p className="font-bold text-slate-900 not-italic">{author}</p>
          {role && <p className="text-sm text-slate-500">{role}</p>}
        </footer>
      </div>
    </div>
  );
}
