import React from 'react';

type Props = {
  title: string;
  eyebrow?: string;
  variant?: 'default' | 'accent' | 'dark';
  className?: string;
};

export default function SectionTitle({ title, eyebrow, variant = 'default', className = '' }: Props) {
  const color = variant === 'accent' ? 'text-[#3ea4c9]' : variant === 'dark' ? 'text-[#09395f]' : 'text-slate-900';

  return (
    <div className={`mb-4 ${className}`}>
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{eyebrow}</p>
      )}
      <h2 className={`mt-1 text-3xl font-black tracking-tight ${color}`}>{title}</h2>
    </div>
  );
}
