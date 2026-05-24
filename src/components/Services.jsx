import { Plane, Briefcase, GraduationCap, Users, Building2, ChevronRight } from 'lucide-react';
import { useIntersectionObserver } from '@hooks/useIntersectionObserver';

const SERVICES = [
  {
    icon:        Plane,
    title:       'Visit Visa',
    description: 'Tourism, family visits, and short-term travel visas processed efficiently with expert guidance from document preparation to embassy liaison.',
    accent:      'from-blue-900 to-blue-700',
    delay:       'delay-100',
  },
  {
    icon:        Briefcase,
    title:       'Work Visa',
    description: 'Employment-based visas, corporate transfers, and skilled worker programs opening doors to global career opportunities across every sector.',
    accent:      'from-amber-700 to-amber-500',
    delay:       'delay-200',
  },
  {
    icon:        GraduationCap,
    title:       'Study Abroad',
    description: 'Student visas, university placements, and education pathway consulting for top institutions in the UK, Canada, Australia, and beyond.',
    accent:      'from-blue-800 to-indigo-700',
    delay:       'delay-300',
  },
  {
    icon:        Users,
    title:       'Skilled Immigration',
    description: 'Express Entry, points-based systems, and permanent residency programs for qualified professionals seeking a new home abroad.',
    accent:      'from-amber-600 to-yellow-500',
    delay:       'delay-400',
  },
  {
    icon:        Building2,
    title:       'Business Immigration',
    description: 'Investor visas, entrepreneur programs, and corporate immigration strategies for business expansion and international mobility.',
    accent:      'from-blue-950 to-indigo-900',
    delay:       'delay-500',
  },
];

function ServiceCard({ icon: Icon, title, description, accent, delay, visible }) {
  return (
    <article
      className={`group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl
                  border border-gray-100 hover:border-amber-400/60
                  transition-all duration-500 hover:-translate-y-2
                  ${visible ? `animate-fade-up ${delay}` : 'opacity-0'}`}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 bg-gradient-to-br ${accent} rounded-xl
                    flex items-center justify-center mb-6 shadow-lg
                    group-hover:scale-110 group-hover:rotate-3
                    transition-all duration-300`}
        aria-hidden="true"
      >
        <Icon className="text-white" size={28} />
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-blue-950 mb-3 font-display">{title}</h3>
      <p className="text-gray-500 leading-relaxed text-sm">{description}</p>

      {/* Learn more link */}
      <div
        className="mt-6 flex items-center gap-1 text-amber-600 font-semibold text-sm
                   group-hover:gap-2 transition-all duration-200"
        aria-hidden="true"
      >
        <span>Learn More</span>
        <ChevronRight
          size={16}
          className="transform group-hover:translate-x-1 transition-transform duration-200"
        />
      </div>
    </article>
  );
}

export default function Services() {
  const [ref, visible] = useIntersectionObserver();

  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 to-white"
    >
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* ── Heading ──────────────────────────────────── */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-[0.3em] uppercase
                           text-amber-600 mb-4">
            What We Offer
          </span>
          <h2
            id="services-heading"
            className={`section-heading mb-4 ${visible ? 'animate-fade-up' : 'opacity-0'}`}
          >
            Core Immigration Services
          </h2>
          <p className={`section-sub ${visible ? 'animate-fade-up delay-200' : 'opacity-0'}`}>
            Comprehensive visa solutions tailored to your unique goals and circumstances
          </p>
        </div>

        {/* ── Cards Grid ───────────────────────────────── */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, i) => (
            <ServiceCard key={i} {...service} visible={visible} />
          ))}

          {/* ── CTA Card ─────────────────────────────── */}
          <div
            className={`sm:col-span-2 lg:col-span-1 flex flex-col items-center
                        justify-center text-center bg-gradient-to-br from-blue-950 to-indigo-950
                        rounded-2xl p-8 shadow-navy transition-all duration-500
                        hover:shadow-navy-lg hover:-translate-y-2
                        ${visible ? 'animate-fade-up delay-600' : 'opacity-0'}`}
          >
            <div className="text-4xl font-display font-bold text-amber-400 mb-2">
              50+
            </div>
            <div className="text-white font-semibold text-lg mb-3">Countries Covered</div>
            <p className="text-blue-200/70 text-sm leading-relaxed mb-6">
              Don't see your destination? We handle applications worldwide.
            </p>
            <a href="#consultation" className="btn-primary text-sm">
              Ask Our Experts
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
