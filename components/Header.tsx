import React from 'react';
import { Shield } from 'lucide-react';

const Header = () => {
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
      </div>
    </header>
  );
};

export default Header;