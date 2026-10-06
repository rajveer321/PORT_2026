import React, { useState } from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import {
  Check,
  Copy,
  Mail,
  Phone,
  ArrowRight,
  FileText,
  ShieldCheck,
  Layers,
  Database,
  ExternalLink,
} from 'lucide-react';

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [imgError, setImgError] = useState(false);

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2200);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2200);
    }
  };

  return (
    <section id="overview" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Subtle ambient gradient mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-blue-600/10 via-indigo-600/5 to-transparent blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Bold Typographic Pitch & Direct Proof */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Editorial kicker */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
              <span>Enterprise Software</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>System Integration</span>
              <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
              <span>Systems Delivery</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-5 text-balance leading-[1.12]">
              Suraj Arvind <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-slate-900 dark:from-blue-400 dark:via-indigo-200 dark:to-white">
                Jaiswar
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-800 dark:text-slate-300 font-medium mb-3">
              Senior Implementation Engineer & Systems Delivery Lead
            </p>

            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-8 max-w-2xl">
              Specialist with 4+ years directing end-to-end software implementations across Asset
              Management, PO, and IT/Admin Ticketing platforms. Expert in mission-critical database
              operations (PostgreSQL & SQL Server), REST API integrations, and leading UAT to secure
              seamless user adoption and dependable on-time cutovers.
            </p>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg shadow-lg shadow-blue-600/25 transition-all hover:translate-y-[-1px]"
              >
                <span>View Systems Delivery</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-semibold text-slate-800 dark:text-slate-200 bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 rounded-lg transition-colors"
              >
                <FileText className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                <span>Examine Full Resume</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-sm font-medium text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <span>Initiate Contact</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Quick Contact & Verified Channels */}
            <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200 dark:border-slate-800/80 text-xs">
              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.email, 'email')}
                className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 shadow-sm transition-colors cursor-pointer group"
                title="Click to copy email address"
              >
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="font-mono text-slate-900 dark:text-slate-200">{PORTFOLIO_DATA.personal.email}</span>
                {copiedEmail ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                )}
              </button>

              <button
                onClick={() => copyToClipboard(PORTFOLIO_DATA.personal.phone, 'phone')}
                className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-900/90 hover:bg-slate-50 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-lg text-slate-700 dark:text-slate-300 shadow-sm transition-colors cursor-pointer group"
                title="Click to copy phone number"
              >
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="font-mono text-slate-900 dark:text-slate-200">{PORTFOLIO_DATA.personal.phoneFormatted}</span>
                {copiedPhone ? (
                  <Check className="w-3.5 h-3.5 text-emerald-500 dark:text-emerald-400" />
                ) : (
                  <Copy className="w-3 h-3 text-slate-400 group-hover:text-slate-600 dark:text-slate-500 dark:group-hover:text-slate-300" />
                )}
              </button>

              <a
                href={PORTFOLIO_DATA.personal.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                <span>LinkedIn</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Verified Credentials */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm sm:max-w-md">
              {/* Card Container */}
              <div className="relative rounded-2xl bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:to-slate-950 p-4 sm:p-5 border border-slate-200/90 dark:border-slate-800 shadow-xl shadow-slate-200/50 dark:shadow-black/60">
                {/* Photo frame */}
                <div className="relative aspect-square w-full rounded-xl overflow-hidden bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 mb-4">
                  {!imgError ? (
                    <img
                      src="/src/assets/images/suraj_engineer_portrait_1791304057001.jpg"
                      alt="Suraj Arvind Jaiswar - Senior Implementation Engineer"
                      className="w-full h-full object-cover object-top"
                      referrerPolicy="no-referrer"
                      onError={() => setImgError(true)}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-100 via-slate-200 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-950 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-blue-600/10 dark:bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-3">
                        <span className="text-2xl font-bold text-blue-600 dark:text-blue-400">SJ</span>
                      </div>
                      <h4 className="font-semibold text-slate-900 dark:text-white">Suraj Arvind Jaiswar</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">Senior Implementation Engineer</p>
                    </div>
                  )}

                  {/* Verified Role Ribbon */}
                  <div className="absolute bottom-3 left-3 right-3 p-2.5 rounded-lg bg-white/95 dark:bg-slate-950/85 backdrop-blur-md border border-slate-200 dark:border-slate-800/90 flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      <div className="flex flex-col">
                        <span className="text-xs font-semibold text-slate-900 dark:text-white leading-tight">
                          FASTFACTS Powered by Newgen
                        </span>
                        <span className="text-[11px] text-slate-600 dark:text-slate-400 leading-tight">
                          Senior Implementation Lead
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono font-medium text-emerald-700 dark:text-emerald-400 uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/50">
                      Active
                    </span>
                  </div>
                </div>

                {/* Micro Key Competencies Row */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs pt-1">
                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/60">
                    <Database className="w-4 h-4 text-blue-600 dark:text-blue-400 mx-auto mb-1" />
                    <span className="block font-medium text-slate-800 dark:text-slate-200 text-[11px]">PostgreSQL & SQL</span>
                    <span className="block text-[10px] text-slate-600 dark:text-slate-400">Database Ops</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/60">
                    <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400 mx-auto mb-1" />
                    <span className="block font-medium text-slate-800 dark:text-slate-200 text-[11px]">Asset & PO / Ticketing</span>
                    <span className="block text-[10px] text-slate-600 dark:text-slate-400">Enterprise Modules</span>
                  </div>

                  <div className="p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/60 border border-slate-200 dark:border-slate-800/60">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mx-auto mb-1" />
                    <span className="block font-medium text-slate-800 dark:text-slate-200 text-[11px]">98% Go-Live</span>
                    <span className="block text-[10px] text-slate-600 dark:text-slate-400">UAT & Delivery</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Claim-to-Proof Adjacency: Metric strip */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-slate-800/80">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {PORTFOLIO_DATA.metrics.map((metric) => (
              <div key={metric.label} className="flex flex-col">
                <span className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight font-mono tabular-nums">
                  {metric.value}
                </span>
                <span className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-1">{metric.label}</span>
                <span className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">{metric.subtext}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
