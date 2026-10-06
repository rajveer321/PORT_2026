import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { Building, ShieldCheck, Briefcase } from 'lucide-react';

export const ClientsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'bfsi' | 'hospitality_retail' | 'industrial'>('all');

  const filteredClients = PORTFOLIO_DATA.clients.filter((client) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'bfsi') return client.sector.includes('BFSI') || client.sector.includes('Financial') || client.sector.includes('Banking') || client.sector.includes('NBFC');
    if (activeFilter === 'hospitality_retail') return client.sector.includes('Hospitality') || client.sector.includes('Retail');
    if (activeFilter === 'industrial') return client.sector.includes('Industrial');
    return true;
  });

  return (
    <section id="clients" className="py-20 border-t border-slate-200 dark:border-slate-900 bg-white dark:bg-slate-950/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Enterprise Client Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Enterprise Accounts Handled
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base mt-3 leading-relaxed">
              A curated selection of marquee enterprise and multinational organizations I have worked
              with during system implementations, database migrations, and production rollouts.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 self-start md:self-auto shadow-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              All Clients ({PORTFOLIO_DATA.clients.length})
            </button>
            <button
              onClick={() => setActiveFilter('bfsi')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'bfsi'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              BFSI & Capital
            </button>
            <button
              onClick={() => setActiveFilter('hospitality_retail')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'hospitality_retail'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Hospitality & Retail
            </button>
            <button
              onClick={() => setActiveFilter('industrial')}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'industrial'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              Industrial
            </button>
          </div>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredClients.map((client) => (
            <div
              key={client.name}
              className="p-5 rounded-xl bg-slate-50/70 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm transition-all hover:translate-y-[-2px] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-slate-200/80 dark:bg-slate-800 flex items-center justify-center text-blue-700 dark:text-blue-400 font-bold text-sm group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {client.shortName.slice(0, 2).toUpperCase()}
                  </div>
                  <span className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    {client.category}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {client.name}
                </h3>

                <p className="text-xs text-blue-700 dark:text-blue-400/90 font-medium mb-3">
                  {client.sector}
                </p>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                  {client.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 flex items-center gap-1.5 text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                <span>Production Implemented</span>
              </div>
            </div>
          ))}
        </div>

        {/* Adjacency Trust Statement */}
        <div className="mt-10 p-5 rounded-xl bg-slate-100/70 dark:bg-slate-900/40 border border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-slate-400">
          <div className="flex items-center gap-3">
            <Briefcase className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
            <span>
              Directly spearheaded requirements scoping, data migration, configuration, and UAT sign-offs across these accounts.
            </span>
          </div>
          <span className="font-mono text-slate-800 dark:text-slate-300 font-semibold whitespace-nowrap">
            50+ Total Client Engagements
          </span>
        </div>
      </div>
    </section>
  );
};
