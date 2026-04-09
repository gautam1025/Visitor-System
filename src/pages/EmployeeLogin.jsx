import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

export default function EmployeeLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === '1234') {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 relative overflow-hidden">
      {/* Ambient backgrounds */}
      <div className="absolute top-1/4 -right-10 w-72 h-72 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse-soft"></div>

      <div className="w-full max-w-sm card relative z-10 animate-slide-up">
        <Link
          to="/"
          className="absolute top-4 left-5 text-sm font-medium text-slate-400 hover:text-indigo-600 transition-colors"
        >
          &larr; Home
        </Link>
        <div className="text-center mb-8 pt-6">
          <div className="h-16 w-16 bg-gradient-to-br from-violet-100 to-indigo-50 rounded-2xl mx-auto flex items-center justify-center shadow-inner border border-white">
            <svg className="w-8 h-8 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold font-outfit mt-4 text-slate-800">
            Employee Login
          </h2>
          <p className="text-sm text-slate-500 mt-1">Access the management dashboard</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-4">
          {error && (
            <div className="bg-red-50 text-red-600 p-3 rounded-xl border border-red-200 text-sm font-medium text-center animate-fade-in">
              {error}
            </div>
          )}
          <div>
            <label className="block text-sm font-semibold text-slate-700">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="input"
              placeholder="Enter your username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input"
              placeholder="••••••••"
            />
          </div>
          <div className="pt-4">
            <button type="submit" className="btn-primary py-3 py-3 w-full">
              Login to Dashboard
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}