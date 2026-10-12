import AuroraBackground from "./effects/AuroraBackground";

const STATS = [
  { value: "2010", label: "Teaching since" },
  { value: "2", label: "Campuses in Delhi" },
  { value: "14", label: "Job-oriented courses" },
  { value: "ISO 9001:2015", label: "Certified institute" },
];

export default function TrustStrip() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#05031F] via-[#0C0950] to-[#05031F] px-4 py-10 sm:px-6 lg:px-8">
      <AuroraBackground />
      <dl className="relative z-10 mx-auto grid max-w-6xl grid-cols-2 gap-y-8 md:grid-cols-4 md:divide-x md:divide-white/15">
        {STATS.map((s) => (
          <div key={s.label} className="px-4 text-center">
            <dt className="order-2 mt-1 text-sm text-white/70">{s.label}</dt>
            <dd className="text-2xl font-bold text-[#F5B301] sm:text-3xl">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
