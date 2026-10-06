import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Briefcase,
  Calendar,
  MapPin,
  ChevronDown,
  ChevronUp,
  CheckCircle2,
  Building2,
  Award,
} from 'lucide-react';

export const ExperienceSection: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string>('fastfacts');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Career Trajectory
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Work Experience & Leadership
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Leading end-to-end software delivery for high-stakes enterprise clients, optimizing database
            performance, and scaling deployment frameworks across fast-paced teams.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6">
          {PORTFOLIO_DATA.experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;

            return (
              <div
                key={exp.id}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isExpanded
                    ? 'bg-white dark:bg-slate-900/80 border-slate-300 dark:border-slate-700 shadow-lg dark:shadow-xl dark:shadow-black/40'
                    : 'bg-white/80 dark:bg-slate-900/40 border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700/80 shadow-xs'
                }`}
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-7 cursor-pointer flex flex-col md:flex-row md:items-center justify-between gap-4 select-none"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleExpand(exp.id);
                    }
                  }}
                  aria-expanded={isExpanded}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-600/10 border border-blue-200 dark:border-blue-500/20 flex items-center justify-center shrink-0 text-blue-600 dark:text-blue-400 mt-1">
                      <Building2 className="w-6 h-6" />
                    </div>

                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                          {exp.title}
                        </h3>
                        {exp.isCurrent && (
                          <span className="text-[11px] font-mono font-medium text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 px-2 py-0.5 rounded">
                            Current Role
                          </span>
                        )}
                      </div>

                      <div className="text-base font-semibold text-blue-600 dark:text-blue-400">
                        {exp.company}
                        {exp.companySubtitle && (
                          <span className="text-xs text-slate-500 dark:text-slate-400 font-normal ml-2">
                            ({exp.companySubtitle})
                          </span>
                        )}
                      </div>

                      {/* Clean Unboxed Metadata */}
                      <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mt-2">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          <span>{exp.period}</span>
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
                          <span>{exp.location}</span>
                        </span>
                        {exp.clientCount && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-slate-700 dark:text-slate-300 font-mono">{exp.clientCount}</span>
                          </>
                        )}
                        {exp.goLiveRate && (
                          <>
                            <span aria-hidden="true">·</span>
                            <span className="text-emerald-600 dark:text-emerald-400 font-mono font-medium">{exp.goLiveRate}</span>
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end gap-3 pt-2 md:pt-0 border-t md:border-t-0 border-slate-100 dark:border-slate-800">
                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400 md:hidden">
                      {isExpanded ? 'Hide details' : 'View achievements & metrics'}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-colors">
                      {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Content */}
                {isExpanded && (
                  <div className="px-6 pb-7 sm:px-7 pt-2 border-t border-slate-200 dark:border-slate-800/80 space-y-6">
                    {/* Key Highlight Banner */}
                    <div className="p-4 rounded-xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-900/40 flex items-start gap-3">
                      <Award className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                      <div>
                        <span className="text-xs font-semibold uppercase tracking-wider text-blue-700 dark:text-blue-400 block mb-0.5">
                          Executive Impact Highlight
                        </span>
                        <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200">{exp.highlight}</p>
                      </div>
                    </div>

                    {/* Detailed Achievements */}
                    <div>
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-3">
                        Detailed Responsibilities & Key Contributions
                      </h4>
                      <ul className="space-y-2.5">
                        {exp.achievements.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                            <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech & Capabilities Used */}
                    <div className="pt-2">
                      <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                        Core Systems & Technologies Leveraged
                      </h4>
                      <div className="flex flex-wrap items-center gap-2 text-xs">
                        {exp.technologies.map((tech, idx) => (
                          <React.Fragment key={tech}>
                            <span className="text-slate-700 dark:text-slate-300 font-mono">{tech}</span>
                            {idx < exp.technologies.length - 1 && (
                              <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
                            )}
                          </React.Fragment>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
