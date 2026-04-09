import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = {
  '/employee-dashboard': { label: 'Employee Portal', role: 'Employee' },
  '/guard-dashboard': { label: 'Security Portal', role: 'Guard' },
  '/admin-dashboard': { label: 'Admin Portal', role: 'Administrator' },
};

export default function Navbar() {
  const location = useLocation();
  const navInfo = NAV_LINKS[location.pathname];

  return (
    <nav className="sticky top-0 z-50 bg-[#1e2330] border-b border-[#2d3342] shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left Logo Area */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 rounded-lg bg-[#FFDE00] flex items-center justify-center shadow-[0_0_15px_rgba(255,222,0,0.15)] group-hover:scale-105 transition-transform">
            <span className="text-[#2D2A1C] text-sm font-black tracking-tighter">N.</span>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white text-sm tracking-wide">
              NANO <span className="text-slate-400 font-medium">VISITOR HQ</span>
            </span>
          </div>
        </Link>

        {/* Right Action Area */}
        <div className="flex items-center gap-6">
          <Link
            to="/"
            className="text-xs text-slate-400 hover:text-[#FFDE00] font-bold uppercase tracking-widest transition-colors flex items-center gap-2"
          >
            <span>Switch Role</span>
            <span className="text-lg leading-none mb-0.5">→</span>
          </Link>

          <div className="h-6 w-px bg-[#2d3342]"></div>

          <div className="flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-sm font-bold text-white">{navInfo ? navInfo.role : 'Guest'}</div>
              <div className="text-xs text-slate-400 font-medium">System Access</div>
            </div>
            <div className="w-9 h-9 rounded-full bg-slate-700 border-2 border-[#2d3342] flex items-center justify-center text-sm">
              👤
            </div>
          </div>
        </div>

      </div>
    </nav>
  );
}