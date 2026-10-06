import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  FileSearch,
  Database,
  Code2,
  CheckCircle,
  Rocket,
  ShieldCheck,
  ChevronRight,
  Terminal,
} from 'lucide-react';

export const ImplementationLifecycle: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const phaseIcons = [FileSearch, Database, Code2, CheckCircle, Rocket];

  const currentPhase = PORTFOLIO_DATA.lifecycleSteps[activeStep];

  return (
    <section id="lifecycle" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Delivery Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            The 5-Stage Implementation Lifecycle
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            How I orchestrate enterprise software deployments from scoping to 98% on-time go-live,
            combining rigorous database governance, API testing, and executive UAT sign-offs.
          </p>
        </div>

        {/* Phase Stepper Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 p-1.5 bg-slate-100 dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 mb-8">
          {PORTFOLIO_DATA.lifecycleSteps.map((step, idx) => {
            const Icon = phaseIcons[idx];
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                className={`flex items-center gap-2.5 p-3 rounded-lg text-left transition-all ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-200/60 dark:hover:bg-slate-800/60'
                }`}
              >
                <div
                  className={`w-7 h-7 rounded-md flex items-center justify-center shrink-0 text-xs font-mono font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  {step.number}
                </div>
                <div className="truncate">
                  <span className="block text-xs font-medium truncate">
                    {step.phase.split('&')[0]}
                  </span>
                  <span
                    className={`block text-[10px] truncate ${
                      isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                    }`}
                  >
                    Phase {idx + 1}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Interactive Detailed Stage Showcase */}
        <div className="rounded-2xl bg-slate-50/90 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg dark:shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Summary and Action Breakdown */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono text-blue-600 dark:text-blue-400 font-semibold">
                  STAGE {currentPhase.number}
                </span>
                <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">/</span>
                <span className="text-xs uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Enterprise Protocol
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                {currentPhase.phase}
              </h3>

              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentPhase.summary}
              </p>

              {/* Key Deliverables & Artifacts */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                  Primary Stage Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {currentPhase.deliverables.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 p-2.5 rounded-lg bg-white dark:bg-slate-950/60 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-800 dark:text-slate-200 shadow-xs"
                    >
                      <CheckCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Framework Tools */}
              <div className="pt-2">
                <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-2">
                  Tools & Methodologies Deployed
                </h4>
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-700 dark:text-slate-300">
                  {currentPhase.tools.map((tool, i) => (
                    <React.Fragment key={tool}>
                      <span className="font-mono text-blue-700 dark:text-blue-300 font-medium">{tool}</span>
                      {i < currentPhase.tools.length - 1 && (
                        <span className="text-slate-400 dark:text-slate-600" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Lead Insights & Governance Callout */}
            <div className="lg:col-span-5 bg-white dark:bg-slate-950/80 rounded-xl p-6 border border-slate-200 dark:border-slate-800/90 shadow-sm space-y-5">
              <div className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
                <Terminal className="w-4 h-4" />
                <span>LEAD IMPLEMENTATION CHECKPOINT</span>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                <div className="border-l-2 border-blue-500 pl-3">
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-1">Escalation & Risk Management</h5>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {activeStep === 0 &&
                      'Auditing existing Excel/legacy databases early detects schema drift, preventing post-configuration delays.'}
                    {activeStep === 1 &&
                      'Running staging data validation scripts catches constraint violations before production import.'}
                    {activeStep === 2 &&
                      'Swagger API endpoint contracts ensure seamless communication between modules and corporate ERPs.'}
                    {activeStep === 3 &&
                      'Daily UAT defect triage meetings with client leads safeguard resolution of priority-1 blockers within 24 hours.'}
                    {activeStep === 4 &&
                      'Weekend cutover window with roll-back dry run ensures standard Monday business operations run smoothly.'}
                  </p>
                </div>

                <div className="border-l-2 border-emerald-500 pl-3">
                  <h5 className="font-semibold text-slate-900 dark:text-white mb-1">Benchmark Metric Impact</h5>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {activeStep === 0 && 'Reduces downstream scope creep by 40%.'}
                    {activeStep === 1 && 'Ensures 99.8% database migration accuracy.'}
                    {activeStep === 2 && 'Standardized API contracts cut integration time by 25%.'}
                    {activeStep === 3 && 'Achieves unanimous stakeholder sign-off prior to cutover.'}
                    {activeStep === 4 && 'Maintains a 98% on-time go-live rate across 30+ rollouts.'}
                  </p>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs text-slate-600 dark:text-slate-400">
                <span>Phase Progress</span>
                <span className="font-mono text-emerald-600 dark:text-emerald-400 font-semibold">{((activeStep + 1) * 20)}% Completed</span>
              </div>
              <div className="w-full bg-slate-200 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div
                  className="bg-blue-600 dark:bg-blue-500 h-full transition-all duration-300"
                  style={{ width: `${(activeStep + 1) * 20}%` }}
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-1.5 text-xs font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ← Previous
                </button>
                <button
                  disabled={activeStep === PORTFOLIO_DATA.lifecycleSteps.length - 1}
                  onClick={() =>
                    setActiveStep((prev) =>
                      Math.min(PORTFOLIO_DATA.lifecycleSteps.length - 1, prev + 1)
                    )
                  }
                  className="px-3 py-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-1 disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  <span>Next Phase</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
