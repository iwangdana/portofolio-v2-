import React from 'react';
import { QA_METHODOLOGY_STEPS, QA_CRITERIA_EXAMPLES } from '../data/portfolioData.ts';
import {
  CheckCircle2,
  XCircle,
  ArrowRight,
  ShieldCheck,
} from 'lucide-react';

export const QaMethodology: React.FC = () => {
  return (
    <section id="methodology" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium mb-2">
          Verification Architecture
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight" style={{ textWrap: 'balance' }}>
          Systematic Quality Assurance Methodology
        </h2>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed">
          Repeatable six-phase verification pipeline designed to enforce numerical grounding, eradicate hallucinations, and maintain auditability across market intelligence outputs.
        </p>
      </div>

      {/* 6-Phase Process Flow */}
      <div className="mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
          {QA_METHODOLOGY_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between hover:border-slate-700 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-mono font-medium text-emerald-400">
                    Step 0{step.step}
                  </span>
                  {idx < 5 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block" />
                  )}
                </div>
                <h3 className="text-xs font-semibold text-white mb-1.5 leading-snug">
                  {step.title}
                </h3>
                <p className="text-[11px] text-slate-400 leading-relaxed mb-3">
                  {step.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-800/80 text-[10px] font-mono text-slate-300">
                <span className="text-slate-500 block uppercase text-[9px]">Audit Check:</span>
                {step.keyCheck}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Example Criteria Table */}
      <div>
        <div className="flex items-center gap-2 mb-4">
          <ShieldCheck className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-200 font-mono">
            Evaluation Criteria & Pass / Fail Examples
          </h3>
        </div>

        <div className="space-y-3">
          {QA_CRITERIA_EXAMPLES.map((crit, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 space-y-3"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-xs">
                <span className="font-semibold text-white font-mono">
                  {crit.category}
                </span>
                <span className="text-slate-400">
                  Rule: {crit.rule}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-1">
                {/* Pass Example */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 text-emerald-400 font-mono text-[11px] font-medium mb-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Pass Behavior</span>
                  </div>
                  <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                    {crit.passExample}
                  </p>
                </div>

                {/* Fail Example */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 text-xs">
                  <div className="flex items-center gap-1.5 text-rose-400 font-mono text-[11px] font-medium mb-1">
                    <XCircle className="w-3.5 h-3.5" />
                    <span>Fail Behavior (Hallucination)</span>
                  </div>
                  <p className="text-slate-300 font-mono text-[11px] leading-relaxed">
                    {crit.failExample}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
