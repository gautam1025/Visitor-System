import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRequests } from '../context/RequestContext';

const EMPLOYEES = ['HR', 'Manager', 'Director'];

function generateId() {
  return 'vms-' + Date.now() + '-' + Math.random().toString(36).slice(2, 7);
}

export default function VisitorForm() {
  const navigate = useNavigate();
  const { addRequest } = useRequests();
  const today = new Date().toISOString().split('T')[0];

  const [form, setForm] = useState({
    visitorName: '',
    phone: '',
    employee: '',
    reason: '',
    date: today,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.visitorName.trim()) e.visitorName = 'Name is required';
    if (!/^\d{10}$/.test(form.phone)) e.phone = 'Enter a valid 10-digit phone';
    if (!form.employee) e.employee = 'Select an employee';
    if (!form.reason.trim()) e.reason = 'Reason is required';
    return e;
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setSubmitting(true);
    const newRequest = { ...form, id: generateId(), status: 'Pending' };
    addRequest(newRequest);

    setTimeout(() => {
      navigate(`/visitor-status/${newRequest.id}`);
    }, 600);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex flex-col items-center justify-center px-4 py-10">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg mb-4">
            <span className="text-2xl">📋</span>
          </div>
          <h1 className="text-2xl font-bold text-slate-800">Visitor Registration</h1>
          <p className="text-slate-500 text-sm mt-1">Fill in your details to request a visit</p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 p-7 space-y-5"
        >
          {/* Visitor Name */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Visitor Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              value={form.visitorName}
              onChange={handleChange('visitorName')}
              className={`input ${errors.visitorName ? 'border-red-400 focus:ring-red-400/50' : ''}`}
            />
            {errors.visitorName && <p className="text-red-500 text-xs mt-1">{errors.visitorName}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Phone Number</label>
            <input
              type="tel"
              placeholder="10-digit mobile number"
              value={form.phone}
              onChange={handleChange('phone')}
              maxLength={10}
              className={`input ${errors.phone ? 'border-red-400 focus:ring-red-400/50' : ''}`}
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Employee */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Select Employee to Meet</label>
            <select
              value={form.employee}
              onChange={handleChange('employee')}
              className={`input ${errors.employee ? 'border-red-400 focus:ring-red-400/50' : ''}`}
            >
              <option value="">-- Select --</option>
              {EMPLOYEES.map((emp) => (
                <option key={emp} value={emp}>{emp}</option>
              ))}
            </select>
            {errors.employee && <p className="text-red-500 text-xs mt-1">{errors.employee}</p>}
          </div>

          {/* Reason */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Reason to Meet</label>
            <textarea
              rows={3}
              placeholder="Briefly describe your purpose of visit"
              value={form.reason}
              onChange={handleChange('reason')}
              className={`input resize-none ${errors.reason ? 'border-red-400 focus:ring-red-400/50' : ''}`}
            />
            {errors.reason && <p className="text-red-500 text-xs mt-1">{errors.reason}</p>}
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1.5">Visit Date</label>
            <input
              type="date"
              value={form.date}
              onChange={handleChange('date')}
              className="input"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className={`btn-primary ${submitting ? 'opacity-70 cursor-not-allowed' : ''}`}
          >
            {submitting ? '⏳ Submitting...' : '✅ Submit Request'}
          </button>
        </form>

        <button
          onClick={() => navigate('/')}
          className="mt-4 w-full text-center text-sm text-slate-400 hover:text-slate-600 transition-colors"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );
}