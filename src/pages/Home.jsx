import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Home() {
  const navigate = useNavigate();
  const [id, setId] = useState('');

  const checkStatus = () => {
    if (id.trim()) navigate(`/status/${id.trim()}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 space-y-10 py-12">
      <div className="text-center space-y-4 animate-slide-up">
        <h1 className="text-5xl md:text-6xl font-bold font-outfit tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-600 inline-block pb-2">
          Visitor Management
        </h1>
        <p className="text-slate-500 text-lg md:text-xl max-w-lg mx-auto font-medium">
          Modern and secure check-in system for your workplace.
        </p>
      </div>

      <div className="space-y-5 w-full max-w-sm card animate-slide-up" style={{ animationDelay: '100ms' }}>
        <Link to="/visitor" className="btn-primary block text-center text-lg py-4 shadow-indigo-500/25">
          Visitor Check-In
        </Link>
        <Link to="/login" className="block text-center w-full py-4 px-4 bg-white border-2 border-slate-200 text-slate-700 rounded-xl font-medium hover:border-indigo-500 hover:text-indigo-600 active:scale-[0.98] transition-all duration-200">
          Employee Login
        </Link>
      </div>

      <div className="w-full max-w-sm card animate-slide-up bg-white/50" style={{ animationDelay: '200ms' }}>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          Track Your Request
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="input !mt-0"
            placeholder="Enter Request ID..."
          />
          <button onClick={checkStatus} className="btn-primary !w-auto px-6">
            Track
          </button>
        </div>
      </div>
    </div>
  );
}