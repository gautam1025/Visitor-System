import { useState } from 'react';
import { useRequests } from '../context/RequestContext';
import Navbar from '../components/Navbar';
import RequestCard from '../components/RequestCard';

const FILTERS = ['All', 'Pending', 'Approved', 'Rejected', 'Completed'];

export default function AdminDashboard() {
    const { requests } = useRequests();
    const [activeFilter, setActiveFilter] = useState('All');

    const filtered = activeFilter === 'All'
        ? requests
        : requests.filter((r) => r.status === activeFilter);

    const counts = {
        All: requests.length,
        Pending: requests.filter((r) => r.status === 'Pending').length,
        Approved: requests.filter((r) => r.status === 'Approved').length,
        Rejected: requests.filter((r) => r.status === 'Rejected').length,
        Completed: requests.filter((r) => r.status === 'Completed').length,
    };

    const filterColors = {
        All: 'bg-slate-800 text-white border-slate-800',
        Pending: 'bg-yellow-500 text-white border-yellow-500',
        Approved: 'bg-green-500 text-white border-green-500',
        Rejected: 'bg-red-500 text-white border-red-500',
        Completed: 'bg-gray-500 text-white border-gray-500',
    };

    const defaultColor = 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50';

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
            <Navbar />
            <div className="max-w-5xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>
                    <p className="text-slate-500 mt-1 text-sm">View-only overview of all visitor requests</p>
                </div>

                {/* Summary Stats */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                    {['Pending', 'Approved', 'Rejected', 'Completed'].map((s) => {
                        const colors = {
                            Pending: 'bg-yellow-50 text-yellow-700 border-yellow-200',
                            Approved: 'bg-green-50 text-green-700 border-green-200',
                            Rejected: 'bg-red-50 text-red-700 border-red-200',
                            Completed: 'bg-gray-50 text-gray-700 border-gray-200',
                        };
                        return (
                            <div key={s} className={`rounded-2xl border p-4 text-center ${colors[s]}`}>
                                <div className="text-2xl font-bold">{counts[s]}</div>
                                <div className="text-xs font-medium mt-0.5">{s}</div>
                            </div>
                        );
                    })}
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap gap-2 mb-6">
                    {FILTERS.map((f) => (
                        <button
                            key={f}
                            onClick={() => setActiveFilter(f)}
                            className={`px-4 py-1.5 rounded-full text-sm font-semibold border transition-all duration-200 ${activeFilter === f ? filterColors[f] : defaultColor
                                }`}
                        >
                            {f}
                            <span className="ml-1.5 text-xs opacity-75">({counts[f]})</span>
                        </button>
                    ))}
                </div>

                {/* Request List */}
                {filtered.length === 0 ? (
                    <div className="text-center py-16 text-slate-400">
                        <span className="text-5xl block mb-3">📭</span>
                        No requests found for &quot;{activeFilter}&quot;
                    </div>
                ) : (
                    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                        {filtered.map((r) => (
                            <RequestCard key={r.id} request={r} showActions={false} />
                        ))}
                    </div>
                )}

                <p className="text-center text-xs text-slate-400 mt-10">
                    Total Records: {requests.length} — Admin View Only
                </p>
            </div>
        </div>
    );
}
