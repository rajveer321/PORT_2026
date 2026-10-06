import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  ShieldAlert,
  Server,
  Users,
  Cpu,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const pillars = [
    {
      title: 'Zero-Disruption Cutover Governance',
      stat: '98% On-Time Go-Live',
      icon: ShieldAlert,
      color: 'blue',
      description:
        'Managing end-to-end cutovers across 30+ complex multi-module environments with strict change control, rollback playbooks, and stakeholder communication to prevent operational downtime.',
    },
    {
      title: 'Database Architecture & API Integration',
      stat: 'PostgreSQL & SQL Server',
      icon: Server,
      color: 'indigo',
      description:
        'Advanced database operations including index tuning, transactional data correction, schema alignment, and Swagger-documented REST API integrations with ERP and third-party systems.',
    },
    {
      title: 'User Adoption & Change Management',
      stat: '+30% User Adoption',
      icon: Users,
      color: 'emerald',
      description:
        'Delivering structured multi-tier training academies for department heads, asset custodians, and procurement officers, converting initial user friction into dependable daily adoption.',
    },
    {
      title: 'Standardized Deployment Frameworks',
      stat: '25% Efficiency Gain',
      icon: Cpu,
      color: 'amber',
      description:
        'Designed repeatable deployment frameworks, automated data validation scripts, and structured onboarding workflows that shortened implementation cycles across client rollouts.',
    },
  ];

  return (
    <section id="about" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-100/60 dark:bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Narrative */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              Executive Profile
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight mb-6">
              Engineering reliable software implementations for mission-critical enterprise teams.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
              <p>
                As a Senior Implementation Specialist with 4+ years of dedicated experience, I bridge
                the gap between complex software systems and day-to-day organizational operations. My
                expertise spans{' '}
                <strong className="text-slate-900 dark:text-white font-semibold">
                  Enterprise Asset Management, Purchase Order (PO) workflows, and IT/Admin Ticketing systems
                </strong>
                .
              </p>
              <p>
                From leading implementations at{' '}
                <span className="text-blue-600 dark:text-blue-300 font-semibold">FASTFACTS Powered by Newgen</span> to delivering solutions
                across 50+ client accounts at{' '}
                <span className="text-blue-600 dark:text-blue-300 font-semibold">Spine Technologies</span>, I specialize in navigating the
                technical intricacies of database management, API connectivity, and high-stakes UAT
                sign-offs.
              </p>
              <p>
                I thrive on serving as a technical escalation lead and mentor—troubleshooting complex
                incidents under pressure and ensuring clients achieve measurable returns on their
                technology investment.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-4">
                <button
                  onClick={onOpenResume}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                >
                  <span>Read full career milestones</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Delivery Pillars */}
          <div className="lg:col-span-7">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4">
              Core Delivery Pillars
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-5 rounded-xl bg-white dark:bg-slate-900/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="p-2.5 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 text-blue-600 dark:text-blue-400">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-xs font-mono font-semibold text-emerald-600 dark:text-emerald-400 tabular-nums">
                          {pillar.stat}
                        </span>
                      </div>
                      <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">{pillar.title}</h3>
                      <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/60 flex items-center gap-1.5 text-[11px] text-slate-600 dark:text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400 shrink-0" />
                      <span>Enterprise validated across Tier-1 clients</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
