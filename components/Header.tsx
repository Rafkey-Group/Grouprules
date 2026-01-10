import React from 'react';
import { Shield, Printer, Download } from 'lucide-react';

const Header = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <header className="bg-slate-950/80 backdrop-blur-md border-b border-slate-800 sticky top-0 z-50 print:bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg shadow-lg shadow-indigo-500/20 shrink-0">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="font-bold text-white leading-tight text-xs sm:text-base">
              Anime Vanguards/Guardians/Last Stand
            </h1>
            <p className="text-[10px] sm:text-xs text-indigo-400 font-medium tracking-wide">
              OFFICIAL RULES [RU]
            </p>
          </div>
        </div>

        <button 
          onClick={handlePrint}
          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-slate-200 px-4 py-2 rounded-lg text-sm font-medium transition-all active:scale-95 border border-slate-700 hover:border-slate-600 no-print"
          title="Сохранить как PDF / Распечатать"
        >
          <Printer className="w-4 h-4" />
          <span className="hidden sm:inline">PDF</span>
        </button>
      </div>
    </header>
  );
};

export default Header;