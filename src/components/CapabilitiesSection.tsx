import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Wrench,
  Database,
  Network,
  Layers,
  CheckCircle2,
} from 'lucide-react';

export const CapabilitiesSection: React.FC = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const categoryIcons = [Wrench, Database, Network, Layers];

  return (
    <section id="capabilities" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-slate-100/50 dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
            Technical Expertise
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Capabilities & Systems Toolbox
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
            A battle-tested blend of enterprise implementation governance, relational database
            tuning, and systems integration protocols.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-white dark:bg-slate-900/90 rounded-xl border border-slate-200 dark:border-slate-800 mb-8 shadow-xs">
          {PORTFOLIO_DATA.capabilities.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Wrench;
            const isActive = selectedCategoryIndex === idx;

            return (
              <button
                key={cat.category}
                onClick={() => setSelectedCategoryIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cat.category}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Category Skill Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PORTFOLIO_DATA.capabilities[selectedCategoryIndex].skills.map((skill) => (
            <div
              key={skill.name}
              className="p-5 rounded-xl bg-white dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-colors flex items-start gap-4"
            >
              <div className="p-2 rounded-lg bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900/50 text-blue-600 dark:text-blue-400 shrink-0 mt-0.5">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {skill.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Comprehensive Grid of all tools */}
        <div className="mt-12 p-6 rounded-2xl bg-white dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800 shadow-xs">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-600 dark:text-slate-400 mb-4">
            Direct Tech Stack & Software Proficiencies
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3 text-center text-xs">
            {[
              { name: 'PostgreSQL', group: 'Database' },
              { name: 'MS SQL Server', group: 'Database' },
              { name: 'MySQL', group: 'Database' },
              { name: 'DBeaver', group: 'Tool' },
              { name: 'REST APIs', group: 'Integration' },
              { name: 'Swagger UI', group: 'API Docs' },
              { name: 'IIS Server', group: 'Web Server' },
              { name: 'Linux OS', group: 'Environment' },
              { name: 'Power BI', group: 'Analytics' },
              { name: 'UAT Frameworks', group: 'Delivery' },
              { name: 'Python Scripts', group: 'Automation' },
              { name: 'HTML & CSS', group: 'Web' },
            ].map((item) => (
              <div
                key={item.name}
                className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800/80 hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
              >
                <span className="block font-semibold text-slate-800 dark:text-slate-200 font-mono text-xs">
                  {item.name}
                </span>
                <span className="block text-[10px] text-slate-500 dark:text-slate-400 mt-0.5">{item.group}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
