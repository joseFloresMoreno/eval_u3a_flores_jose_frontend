"use client";

import React, { useEffect, useState } from "react";

type Props = {
  servicios: string[];
};

export default function ContactForm({ servicios }: Props) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [servicio, setServicio] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      const custom = e as CustomEvent<string>;
      if (custom?.detail) setServicio(custom.detail);
    };
    window.addEventListener("select-service", handler as EventListener);
    return () => window.removeEventListener("select-service", handler as EventListener);
  }, []);

  const validate = () => {
    const next: Record<string, string> = {};
    if (!nombre.trim()) next.nombre = "Ingrese su nombre";
    if (!correo.match(/^\S+@\S+\.\S+$/)) next.correo = "Ingrese un correo válido";
    if (!servicio) next.servicio = "Seleccione un servicio";
    if (!mensaje.trim() || mensaje.trim().length < 10) next.mensaje = "Mensaje demasiado corto";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    // Aquí iría la llamada real al backend
    console.log({ nombre, correo, servicio, mensaje });
    setTimeout(() => {
      alert("Formulario enviado. Gracias!");
      setNombre("");
      setCorreo("");
      setServicio("");
      setMensaje("");
      setSubmitted(false);
    }, 600);
  };

  return (
    <form id="contact-form" onSubmit={onSubmit} className="w-full rounded-3xl bg-[linear-gradient(180deg,#09395f_0%,#043f6c_100%)] p-7 text-white shadow-[0_20px_45px_rgba(9,57,95,0.35)]">
      <h3 className="text-lg font-bold text-white">Contacto</h3>
      <p className="mt-1 text-sm text-white/80">Rellena el formulario y nos pondremos en contacto.</p>

      <div className="mt-4 grid gap-3">
        <label className="text-xs font-semibold text-white/90">Nombre</label>
        <input value={nombre} onChange={(e) => setNombre(e.target.value)} className="rounded-md p-2 bg-white text-black w-full" />
        {errors.nombre && <div className="text-xs text-rose-400">{errors.nombre}</div>}

        <label className="text-xs font-semibold text-white/90">Correo</label>
        <input value={correo} onChange={(e) => setCorreo(e.target.value)} type="email" className="rounded-md p-2 bg-white text-black w-full" />
        {errors.correo && <div className="text-xs text-rose-400">{errors.correo}</div>}

        <label className="text-xs font-semibold text-white/90">Servicio</label>
        <select value={servicio} onChange={(e) => setServicio(e.target.value)} id="servicio" className="rounded-md p-2 bg-white text-black w-full">
          <option value="">-- Seleccione --</option>
          {servicios.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
        {errors.servicio && <div className="text-xs text-rose-400">{errors.servicio}</div>}

        <label className="text-xs font-semibold text-white/90">Mensaje</label>
        <textarea value={mensaje} onChange={(e) => setMensaje(e.target.value)} rows={4} className="rounded-md p-2 bg-white text-black w-full" />
        {errors.mensaje && <div className="text-xs text-rose-400">{errors.mensaje}</div>}

        <div className="mt-2 flex gap-2">
          <button disabled={submitted} type="submit" className="inline-flex items-center rounded-full bg-[#ef4040] px-4 py-2 text-sm font-bold text-white disabled:opacity-60 cursor-pointer">
            {submitted ? "Enviando..." : "Enviar"}
          </button>
          <button type="button" onClick={() => { setNombre(""); setCorreo(""); setServicio(""); setMensaje(""); setErrors({}); }} className="inline-flex items-center rounded-full border border-white/30 px-4 py-2 text-sm font-semibold text-white cursor-pointer">
            Limpiar
          </button>
        </div>
      </div>
    </form>
  );
}
