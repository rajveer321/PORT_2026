import React from 'react';
import { PORTFOLIO_DATA } from '../data/portfolioData';
import { X, Printer, Download, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl max-h-[94vh] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-slate-900 dark:text-slate-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top bar controls */}
        <div className="flex items-center justify-between px-6 py-4 bg-slate-50 dark:bg-slate-950 border-b border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-300">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-900 dark:text-white text-sm">Curriculum Vitae</span>
            <span className="text-slate-400 dark:text-slate-600">/</span>
            <span className="text-slate-600 dark:text-slate-400">Suraj Arvind Jaiswar</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white font-semibold transition-colors"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors"
              aria-label="Close resume"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Printable & Scrollable Resume Body */}
        <div
          id="printable-resume"
          className="overflow-y-auto p-6 sm:p-10 bg-white dark:bg-slate-900 text-slate-800 dark:text-slate-200 text-xs sm:text-sm space-y-8"
        >
          {/* Header */}
          <div className="border-b border-slate-200 dark:border-slate-800 pb-6 flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                {PORTFOLIO_DATA.personal.name}
              </h1>
              <h2 className="text-sm sm:text-base font-semibold text-blue-600 dark:text-blue-400 mt-1">
                {PORTFOLIO_DATA.personal.role}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-xl">
                Asset Management, Purchase Order (PO) & IT/Admin Ticketing Enterprise Delivery
              </p>
            </div>

            <div className="space-y-1 text-xs text-slate-700 dark:text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="font-mono">{PORTFOLIO_DATA.personal.phoneFormatted}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span className="font-mono">{PORTFOLIO_DATA.personal.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
                <span>{PORTFOLIO_DATA.personal.location}</span>
              </div>
              <div className="flex items-center gap-2 text-blue-600 dark:text-blue-400">
                <ExternalLink className="w-3.5 h-3.5" />
                <a
                  href={PORTFOLIO_DATA.personal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:underline font-medium"
                >
                  linkedin.com/in/suraj-jaiswar
                </a>
              </div>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
              Professional Summary
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              Senior Implementation Specialist with over 4 years of experience in enterprise software
              implementation, system integration, and client delivery across Asset Management, PO,
              and IT/Admin Ticketing platforms. Demonstrated expertise in leading large-scale
              implementations, database management (PostgreSQL & SQL Server), API integrations, and UAT
              execution. Proven ability to reduce implementation timelines by 25%, improve system
              adoption by 30%, and serve as primary technical escalation lead for enterprise clients.
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-4">
              Work Experience
            </h3>
            <div className="space-y-6">
              {PORTFOLIO_DATA.experiences.map((exp) => (
                <div key={exp.id} className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-slate-900 dark:text-white text-sm sm:text-base">
                      {exp.title} — <span className="text-blue-600 dark:text-blue-400">{exp.company}</span>
                    </span>
                    <span className="text-xs font-mono text-slate-500 dark:text-slate-400">{exp.period}</span>
                  </div>

                  <ul className="space-y-1.5 pl-4 list-disc text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    {exp.achievements.map((ach, i) => (
                      <li key={i} className="leading-relaxed">
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills & Capabilities */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-3">
              Technical & Functional Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Databases & Infrastructure</span>
                <span className="text-slate-700 dark:text-slate-300">
                  PostgreSQL, Microsoft SQL Server, MySQL, IIS Server, Linux, DBeaver, Performance Tuning, Data Correction
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">APIs & Integrations</span>
                <span className="text-slate-700 dark:text-slate-300">
                  REST APIs, Swagger, Postman, Webhooks, API Contract Testing, ERP Synchronization
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Enterprise Domain Modules</span>
                <span className="text-slate-700 dark:text-slate-300">
                  Enterprise Asset Management, Purchase Order (PO) Module, IT/Admin Ticketing, SLA Automation
                </span>
              </div>
              <div className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">Delivery & Governance</span>
                <span className="text-slate-700 dark:text-slate-300">
                  User Acceptance Testing (UAT), Cutover Planning, Framework Standardization, Client Training, Mentorship
                </span>
              </div>
            </div>
          </div>

          {/* Education & Certifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                Education
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">MCA (Master of Computer Applications)</span>
                  <span className="text-slate-600 dark:text-slate-400">SRM Institute of Science and Technology · 2023 - 2025</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">B.Sc. in Computer Science (SGPA: 9.1)</span>
                  <span className="text-slate-600 dark:text-slate-400">Shree Shankar Narayan College · 2018 - 2021</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Higher Secondary (Science - IT)</span>
                  <span className="text-slate-600 dark:text-slate-400">Vidya Varidhi Jr. College · 2016 - 2018</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 mb-2">
                Certifications
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Project Management Professional (PMP)</span>
                  <span className="text-slate-600 dark:text-slate-400">PMI Aligned Framework · Certified</span>
                </div>
                <div>
                  <span className="font-bold text-slate-900 dark:text-white block">Power BI Developer</span>
                  <span className="text-slate-600 dark:text-slate-400">Microsoft Certified Course · Data Visualization</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
