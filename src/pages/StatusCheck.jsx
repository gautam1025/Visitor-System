import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function StatusCheck() {
  const [id, setId] = useState('');
  const navigate = useNavigate();

  const go = () => {
    if (id.trim()) navigate(`/status/${id.trim()}`);
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 relative overflow-hidden">
      {/* Ambient background */}
      <div className="absolute top-1/4 max-w-lg w-full h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse-soft"></div>

      <div className="w-full max-w-sm card relative z-10 animate-slide-up">
        <Link
          to="/"
          className="absolute top-4 left-5 text-sm font-medium text-slate-400 hover:text-indigo-600 transition-colors"
        >
          &larr; Home
        </Link>
        <div className="text-center mb-6 pt-6">
          <h2 className="text-2xl font-bold font-outfit text-slate-800">
            Check Request Status
          </h2>
          <p className="text-sm text-slate-500 mt-1">Enter your Visitor Request ID below.</p>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            placeholder="e.g. 5493"
            className="input text-center text-xl tracking-widest font-outfit"
            onKeyDown={(e) => e.key === 'Enter' && go()}
          />
          <button onClick={go} className="btn-primary py-3 w-full">
            Track Status
          </button>
        </div>
      </div>
    </div>
  );
}