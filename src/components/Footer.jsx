import React from 'react';

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full py-1.5 border-t border-slate-200 bg-white/80 backdrop-blur-md z-[100] shadow-[0_-2px_15px_rgba(0,0,0,0.02)]">
      <div className="max-w-[1400px] mx-auto px-6 flex flex-col items-center justify-center">
        <p className="text-slate-500 text-[11px] font-medium tracking-wide flex items-center gap-1.5 leading-none">
          Designed & Developed by 
          <span className="text-lg font-bold font-['Dancing_Script'] bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 bg-clip-text text-transparent drop-shadow-sm">
            "Gautam-Gupta"
          </span>
        </p>
        <div className="flex items-center gap-3 scale-[0.85] opacity-60">
          <div className="h-[1px] w-6 bg-slate-200"></div>
          <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] font-bold">
            © 2026 Visitor Management System
          </p>
          <div className="h-[1px] w-6 bg-slate-200"></div>
        </div>
      </div>
    </footer>
  );
}
