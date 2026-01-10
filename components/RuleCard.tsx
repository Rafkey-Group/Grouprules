import React from 'react';
import { Rule } from '../types';
import { Ban, AlertTriangle, CheckCircle2, Info } from 'lucide-react';

interface RuleCardProps {
  rule: Rule;
}

const RuleCard: React.FC<RuleCardProps> = ({ rule }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 mb-4 shadow-sm hover:border-slate-700 transition-colors print-break-avoid">
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-bold text-white flex items-center gap-3">
          <span className="bg-indigo-600/20 text-indigo-400 px-2 py-1 rounded text-sm font-mono">{rule.id}</span>
          {rule.title}
        </h3>
      </div>

      <div className="space-y-4 text-slate-300">
        <div className="bg-red-950/20 border-l-4 border-red-500/50 p-3 rounded-r">
          <span className="text-red-400 font-semibold block text-sm mb-1 uppercase tracking-wider">Что нельзя:</span>
          <p>{rule.forbidden}</p>
        </div>

        {rule.extras && (
          <div className="grid gap-3 sm:grid-cols-2">
            {rule.extras.map((extra, idx) => (
              <div key={idx} className="bg-slate-950/50 p-3 rounded border border-slate-800/50">
                <span className="text-sky-400 font-semibold text-sm block mb-1">{extra.title}:</span>
                <p className="text-sm text-slate-400">{extra.content}</p>
              </div>
            ))}
          </div>
        )}

        {rule.exception && (
          <div className="flex gap-3 items-start bg-emerald-950/20 p-3 rounded border border-emerald-900/30">
            <CheckCircle2 className="w-5 h-5 text-emerald-500 mt-0.5 shrink-0" />
            <div>
              <span className="text-emerald-400 font-semibold text-sm block mb-1">Исключение (Рофл):</span>
              <p className="text-sm">{rule.exception}</p>
            </div>
          </div>
        )}

        {rule.important && (
          <div className="flex gap-3 items-start bg-orange-950/20 p-3 rounded border border-orange-900/30">
            <AlertTriangle className="w-5 h-5 text-orange-500 mt-0.5 shrink-0" />
            <div>
              <span className="text-orange-400 font-semibold text-sm block mb-1">Важно:</span>
              <p className="text-sm">{rule.important}</p>
            </div>
          </div>
        )}

        {rule.note && (
          <div className="flex gap-3 items-start p-2 text-slate-400 text-sm">
            <Info className="w-4 h-4 mt-0.5 shrink-0" />
            <p><span className="font-semibold text-slate-300">Пометка:</span> {rule.note}</p>
          </div>
        )}

        <div className="mt-4 pt-4 border-t border-slate-800 flex items-start gap-3">
            <Ban className="w-5 h-5 text-rose-500 mt-0.5 shrink-0" />
            <div className="flex-1">
                <span className="text-slate-400 text-xs uppercase tracking-wider font-bold">Наказание:</span>
                <p className="text-rose-400 font-medium">{rule.punishment}</p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RuleCard;