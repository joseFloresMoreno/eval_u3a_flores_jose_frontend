import Header from "./components/Header";
import ContactForm from "./components/ContactForm";
import TestimonialCarousel from "./components/TestimonialCarousel";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import FaqSection from "./components/FaqSection";

const regiones = [
  "Arica y Parinacota",
  "Tarapaca",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaiso",
  "Metropolitana",
  "O'Higgins",
  "Maule",
  "Nuble",
  "Biobio",
  "La Araucania",
  "Los Rios",
  "Los Lagos",
  "Aysen",
  "Magallanes",
];

// Data will be fetched from internal API routes

export default async function Home() {
  const base = process.env.NEXT_PUBLIC_BASE_URL ?? 'http://localhost:3000';
  const [aboutRes, servicesRes, faqsRes] = await Promise.all([
    fetch(`${base}/api/about`, { next: { revalidate: 60 } }),
    fetch(`${base}/api/services`, { next: { revalidate: 60 } }),
    fetch(`${base}/api/faqs`, { next: { revalidate: 60 } }),
  ]);

  const about = await aboutRes.json();
  const services = await servicesRes.json();
  const faqs = await faqsRes.json();
  return (
    <main className="min-h-screen bg-[linear-gradient(165deg,#f6f6f6_0%,#ffffff_35%,#f1f1f1_100%)] text-[#212529]">
      <div className="mx-auto w-full max-w-6xl px-6 pb-16 pt-8 md:px-10">
        <Header />

        <section className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:items-center">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-[#3ea4c9]/30 bg-[#3ea4c9]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#043f6c]">
              Asesoria gratuita para pymes
            </p>
            <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
              Impulsa tu negocio
              <span className="block text-[#3ea4c9]">con apoyo experto</span>
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-slate-700 md:text-lg">
              Acompanamos a emprendedores y pequenas empresas con asesorias,
              capacitaciones y vinculacion comercial para que crezcan con una
              estrategia sostenible en su territorio.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#servicios"
                className="rounded-full bg-[#ef4040] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#d53a3a]"
              >
                Ver servicios
              </a>
              <a
                href="#cobertura"
                className="rounded-full border border-[#3ea4c9]/40 px-6 py-3 text-sm font-semibold text-[#09395f] transition hover:border-[#3ea4c9] hover:text-[#3ea4c9]"
              >
                Explorar cobertura
              </a>
            </div>
          </div>

          <aside className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_24px_48px_rgba(9,57,95,0.12)]">
            <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-slate-500">
              Alcance nacional
            </h3>
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl bg-[#3ea4c9]/12 p-4">
                <p className="text-3xl font-black text-[#09395f]">16</p>
                <p className="mt-1 text-sm text-[#043f6c]">Regiones activas</p>
              </div>
              <div className="rounded-2xl bg-[#09395f]/10 p-4">
                <p className="text-3xl font-black text-[#09395f]">+50</p>
                <p className="mt-1 text-sm text-[#043f6c]">Centros de apoyo</p>
              </div>
              <div className="rounded-2xl bg-[#eaa824]/15 p-4">
                <p className="text-3xl font-black text-[#09395f]">1:1</p>
                <p className="mt-1 text-sm text-[#09395f]">Mentoria experta</p>
              </div>
              <div className="rounded-2xl bg-[#f1f1f1] p-4">
                <p className="text-3xl font-black text-[#09395f]">100%</p>
                <p className="mt-1 text-sm text-[#043f6c]">Sin costo</p>
              </div>
            </div>
          </aside>
        </section>

        <ServicesSection services={services} />

        <section id="cobertura" className="mt-20 rounded-3xl bg-[#09395f] p-8 md:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#ef4040]">
            Cobertura territorial
          </p>
          <h3 className="mt-2 text-3xl font-black tracking-tight text-white">
            Estamos presentes en todo Chile
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Busca el centro mas cercano y accede a acompanamiento empresarial
            especializado para fortalecer tu negocio en cada etapa de crecimiento.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {regiones.map((region) => (
              <span
                key={region}
                className="rounded-full border border-[#516f8e] bg-[#043f6c] px-3 py-1.5 text-xs font-semibold text-[#f6f6f6]"
              >
                {region}
              </span>
            ))}
          </div>
        </section>

        <section id="testimonios" className="mt-20">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Voces de emprendedores</p>
          <h3 className="mt-1 text-3xl font-black tracking-tight text-slate-900">Testimonios</h3>
          <div className="mt-6">
            <TestimonialCarousel
              items={[
                { quote: "La asesoría me ayudó a identificar oportunidades de venta y organizar mis finanzas. Recomendable 100%.", author: "Ana, emprendedora local" },
                { quote: "Participar en los talleres aceleró nuestra estrategia digital y nos conectó con clientes nuevos en la región.", author: "Talleres Ltda." },
                { quote: "Los mentores nos ayudaron a mejorar la presentación de nuestro proyecto, logramos un pequeño financiamiento.", author: "Microventa S.A." },
                { quote: "Las prácticas y el seguimiento marcaron una diferencia real en nuestras ventas mensuales.", author: "Panadería La esquina" },
                { quote: "El programa nos conectó con proveedores y nos enseñó a controlar los costos. Muy útil.", author: "EcoTienda" },
              ]}
            />
          </div>
        </section>

        <AboutSection about={about} />

        <FaqSection faqs={faqs} />

        <section id="contactanos" className="mt-20">
          <div className="mx-auto max-w-6xl px-2">
            <ContactForm servicios={services.map((s) => s.title)} />
          </div>
        </section>
      </div>
    </main>
  );
}
