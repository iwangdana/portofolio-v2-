import React from 'react';
import { INSTITUTIONAL_METRICS, PORTFOLIO_CONFIG } from '../data/portfolioData.ts';
import {
  ExternalLink,
  Info,
} from 'lucide-react';

export const EvidenceMetrics: React.FC = () => {
  return (
    <section id="metrics" className="py-16 md:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
      {/* Header */}
      <div className="max-w-3xl mb-12">
        <p className="text-xs font-mono uppercase tracking-widest text-emerald-400 font-medium mb-2">
          Empirical Metrics & Verification
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
          Evidence and Metrics Registry
        </h2>
        <p className="mt-2 text-slate-400 text-sm leading-relaxed">
          In compliance with strict institutional reporting ethics, quantitative performance metrics remain explicitly designated as <span className="font-mono text-emerald-400">"Not provided"</span> until formal regression logs receive compliance release.
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-8">
        {INSTITUTIONAL_METRICS.map((item) => (
          <div
            key={item.key}
            className="p-5 rounded-2xl bg-slate-900/40 border border-slate-800/80 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3 text-[10px] font-mono text-slate-400">
                <span className="uppercase">
                  {item.category}
                </span>
                <span>
                  {item.targetOrBenchmark}
                </span>
              </div>

              <div className="my-2">
                <div className="text-2xl sm:text-3xl font-mono font-bold text-slate-200 tracking-tight">
                  {item.value}
                </div>
              </div>

              <h3 className="text-xs font-semibold text-white mt-2 mb-1">
                {item.label}
              </h3>

              <p className="text-[11px] text-slate-400 leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
              <span>Verification State:</span>
              <span className="text-slate-400">Internal Audit</span>
            </div>
          </div>
        ))}
      </div>

      {/* Evidence Link */}
      <div className="p-4 rounded-xl bg-slate-900/40 border border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-2.5 text-xs text-slate-400 font-mono">
          <Info className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>
            Real evidence references link to the HEVORA institutional project environment.
          </span>
        </div>

        <a
          href={PORTFOLIO_CONFIG.identity.projectRefUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono font-medium shrink-0 transition-colors"
        >
          <span>HEVORA (https://hevora.app/)</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
