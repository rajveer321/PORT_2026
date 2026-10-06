import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import {
  ArrowRight,
  Layers,
  X,
  CheckCircle,
  AlertTriangle,
  Cpu,
  Database,
  ExternalLink,
} from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Selected Systems Delivery
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Enterprise Solutions & Deployments
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            Systems engineered around cleaner workflows, bulletproof database operations, higher
            user adoption, and predictable enterprise delivery.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6">
          {PORTFOLIO_DATA.projects.map((proj, idx) => {
            // Bento sizing: first 2 are wide (6 cols on lg), remaining 2 also 6 cols
            const isWide = idx === 0 || idx === 1;

            return (
              <div
                key={proj.id}
                className={`group rounded-2xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all duration-200 overflow-hidden flex flex-col justify-between ${
                  isWide ? 'lg:col-span-6' : 'lg:col-span-6'
                }`}
              >
                <div>
                  {/* Image container with measured scrim */}
                  <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-950 border-b border-slate-200 dark:border-slate-800/80">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-300"
                      referrerPolicy="no-referrer"
                      onError={(e) => {
                        // Fallback container
                        const target = e.currentTarget;
                        target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                    {/* Unboxed Metadata in top-left */}
                    <div className="absolute top-3 left-3 text-xs text-white/95 font-medium flex items-center gap-1.5 bg-slate-950/85 backdrop-blur-sm px-2.5 py-1 rounded-md border border-slate-800/80">
                      <span>{proj.category}</span>
                      <span aria-hidden="true" className="text-slate-400">·</span>
                      <span className="font-mono text-blue-400 text-[11px]">System 0{idx + 1}</span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5">
                      {proj.description}
                    </p>

                    {/* Quantitative Proof: Metric Strip */}
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/70 mb-5 shadow-xs">
                      {proj.metrics.map((m) => (
                        <div key={m.label} className="text-center">
                          <span className="block text-base sm:text-lg font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                            {m.value}
                          </span>
                          <span className="block text-[10px] sm:text-[11px] text-slate-500 dark:text-slate-400">
                            {m.label}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Clean Unboxed Tech Stack */}
                    <div className="flex flex-wrap items-center gap-2 text-xs text-slate-600 dark:text-slate-400">
                      {proj.technologies.map((t, i) => (
                        <React.Fragment key={t}>
                          <span className="font-mono text-slate-700 dark:text-slate-300">{t}</span>
                          {i < proj.technologies.length - 1 && (
                            <span className="text-slate-300 dark:text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/60 dark:hover:bg-slate-800 text-xs font-semibold text-slate-800 dark:text-slate-200 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-700/60 transition-colors"
                  >
                    <span>Inspect Architecture & Deliverables</span>
                    <ArrowRight className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl p-6 sm:p-8 text-slate-900 dark:text-white"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2 text-xs text-blue-600 dark:text-blue-400 font-semibold uppercase tracking-wider mb-2">
                <span>{selectedProject.category}</span>
                <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
                <span>Case Study Breakdown</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-2 pr-10">
                {selectedProject.title}
              </h3>

              <p className="text-sm font-medium text-slate-600 dark:text-slate-300 mb-6">
                {selectedProject.subtitle}
              </p>

              {/* Metric bar */}
              <div className="grid grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 mb-6">
                {selectedProject.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <span className="block text-xl font-bold text-slate-900 dark:text-white font-mono tabular-nums">
                      {m.value}
                    </span>
                    <span className="block text-xs text-slate-500 dark:text-slate-400">{m.label}</span>
                  </div>
                ))}
              </div>

              {/* Comprehensive Description */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Architectural Scope & Execution
                </h4>
                <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Deliverables */}
              <div className="space-y-3 mb-6">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Core Implementation Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedProject.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2 p-2.5 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 text-xs text-slate-800 dark:text-slate-200"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Challenges Solved */}
              {selectedProject.challengesSolved && selectedProject.challengesSolved.length > 0 && (
                <div className="space-y-3 mb-6">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    High-Stakes Challenges Overcome
                  </h4>
                  <div className="space-y-2">
                    {selectedProject.challengesSolved.map((chal, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-amber-50/60 dark:bg-slate-950/80 border border-amber-200 dark:border-amber-900/40 text-xs text-slate-800 dark:text-slate-300"
                      >
                        <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
                        <span>{chal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Integrated Technologies & Protocols
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {selectedProject.technologies.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
