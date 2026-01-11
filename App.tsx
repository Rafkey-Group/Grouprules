import React from 'react';
import { Star, Gavel, FileWarning, ShieldAlert, BadgeAlert } from 'lucide-react';
import Header from './components/Header';
import RuleCard from './components/RuleCard';
import { punishmentSystem, moderatorHierarchy, ruleSections, modRules, complaintRules } from './data';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 pb-20">
      <Header />

      <main className="max-w-4xl mx-auto px-4 pt-8 space-y-12">
        
        {/* Intro Grid */}
        <div className="grid md:grid-cols-2 gap-6 print-break-avoid">
          
          {/* Punishments */}
          <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Gavel className="w-5 h-5 text-indigo-500" />
              Система Наказаний
            </h2>
            <ul className="space-y-3">
              {punishmentSystem.map((item, index) => (
                <li key={index} className="flex gap-3 text-sm text-slate-300">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-slate-800 text-indigo-400 font-bold text-xs shrink-0 border border-slate-700">
                    {index + 1}
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </section>

          {/* Hierarchy */}
          <section className="bg-slate-900/50 rounded-2xl border border-slate-800 p-6">
            <h2 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <Star className="w-5 h-5 text-yellow-500" />
              Иерархия Модераторов
            </h2>
            <div className="space-y-3">
              {moderatorHierarchy.map((role, index) => (
                <div key={index} className="flex items-center gap-3 text-sm border-b border-slate-800/50 last:border-0 pb-2 last:pb-0">
                  <div className="flex gap-0.5 shrink-0 w-24">
                    {[...Array(role.stars)].map((_, i) => (
                      <Star key={i} className={`w-3 h-3 ${role.stars === 5 ? 'text-red-500 fill-red-500' : 'text-yellow-500 fill-yellow-500'}`} />
                    ))}
                  </div>
                  <div className="flex-1">
                    <span className={`font-bold block ${role.stars === 5 ? 'text-red-400' : 'text-slate-200'}`}>
                      {role.title}
                    </span>
                    <span className="text-xs text-slate-500">{role.powers}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Section 1 & 2 */}
        {ruleSections.map((section) => (
          <section key={section.id} id={`section-${section.id}`} className="scroll-mt-24">
            <div className="flex items-center gap-4 mb-6 print-break-avoid">
               <div className="h-px bg-slate-800 flex-1"></div>
               <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400 uppercase tracking-widest text-center">
                 {section.title}
               </h2>
               <div className="h-px bg-slate-800 flex-1"></div>
            </div>
            
            <div className="space-y-4">
              {section.rules.map((rule) => (
                <RuleCard key={rule.id} rule={rule} />
              ))}
            </div>
          </section>
        ))}

        {/* Section 3: Mod Rules */}
        <section className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-8 print-break-avoid">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-800">
                <ShieldAlert className="w-8 h-8 text-sky-500" />
                <h2 className="text-xl font-bold text-white">Раздел 3: Правила для Модераторов</h2>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
                {modRules.map((rule) => (
                    <div key={rule.id} className="bg-slate-950 p-4 rounded-lg border border-slate-800 hover:border-sky-900/50 transition-colors print-break-avoid">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="text-sky-500 font-mono font-bold text-sm">{rule.id}</span>
                            <h4 className="font-bold text-slate-200 text-sm uppercase">{rule.title}</h4>
                        </div>
                        <p className="text-sm text-slate-400 leading-relaxed">{rule.desc}</p>
                    </div>
                ))}
            </div>
        </section>

        {/* Section 4: Complaints */}
        <section className="bg-indigo-950/20 border border-indigo-900/30 rounded-2xl p-6 md:p-8 print-break-avoid">
            <div className="flex items-center gap-3 mb-6">
                <FileWarning className="w-8 h-8 text-indigo-400" />
                <h2 className="text-xl font-bold text-indigo-100">Раздел 4: Порядок жалоб</h2>
            </div>

            <div className="space-y-4">
                {complaintRules.map((text, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                        <span className="bg-indigo-500/20 text-indigo-300 font-mono text-xs px-2 py-1 rounded mt-0.5">
                            4.{idx + 1}
                        </span>
                        <p className="text-slate-300 text-sm">{text}</p>
                    </div>
                ))}
            </div>

            <div className="mt-8 p-4 bg-slate-950/50 rounded-lg border border-slate-800/50 flex gap-3 print-break-avoid">
                <BadgeAlert className="w-5 h-5 text-slate-400 shrink-0" />
                <p className="text-sm text-slate-400">
                    <span className="font-semibold text-slate-200">Пометка:</span> Правила не охватывают всё. Админ может решать по ситуации.
                </p>
            </div>
        </section>

        {/* Footer */}
        <footer className="text-center py-12 border-t border-slate-800">
            <p className="text-slate-500 text-sm mb-2">Anime Vanguards/Guardians/Last Stand [RU]</p>
            <p className="text-red-500 font-bold uppercase tracking-widest text-xs">
                Все решения @Rafkey окончательны и гифки которые он признал разрешены всем без мута
            </p>
        </footer>

      </main>
    </div>
  );
};

export default App;