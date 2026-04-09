import { useState } from 'react';
import { useRequests } from '../context/RequestContext';
import Navbar from '../components/Navbar';
import RequestCard from '../components/RequestCard';

function Section({ title, count, children, indicatorColor }) {
    const indicators = {
        yellow: 'bg-[#FFDE00]',
        green: 'bg-green-400',
        red: 'bg-red-400',
    };
    return (
        <section className="mb-14">
            <div className={`flex items-center gap-3 mb-6 pb-2 border-b border-slate-200`}>
                <div className={`w-2 h-6 rounded-sm ${indicators[indicatorColor] || 'bg-slate-300'}`} />
                <h2 className="text-xl font-bold text-slate-900">{title}</h2>
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">{count}</span>
            </div>
            {children}
        </section>
    );
}

export default function EmployeeDashboard() {
    const { requests, updateRequestStatus } = useRequests();
    const [activeTab, setActiveTab] = useState('pending');

    const pending = requests.filter((r) => r.status === 'Pending');
    const approved = requests.filter((r) => r.status === 'Approved');
    const rejected = requests.filter((r) => r.status === 'Rejected');

    const approve = (id) => updateRequestStatus(id, 'Approved');
    const reject = (id) => updateRequestStatus(id, 'Rejected');

    return (
        <div className="min-h-screen bg-[#F4F5F7] pb-20">
            <Navbar />

            {/* Crisp Page Header */}
            <div className="bg-white border-b border-slate-200">
                <div className="max-w-[1400px] mx-auto px-6 py-8 sm:flex sm:items-center sm:justify-between">
                    <div>
                        <nav className="flex text-xs font-bold uppercase tracking-widest text-slate-400 mb-2" aria-label="Breadcrumb">
                            <span className="hover:text-slate-800 cursor-pointer transition-colors">Portals</span>
                            <span className="mx-2 text-slate-300">/</span>
                            <span className="text-slate-800">Employee</span>
                        </nav>
                        <h1 className="text-3xl font-extrabold text-[#1e2330] tracking-tight">Overview</h1>
                    </div>
                </div>
            </div>

            <div className="max-w-[1400px] mx-auto px-6 py-10">
                <div className="flex flex-col lg:flex-row gap-10">

                    {/* Left Sidebar Navigation */}
                    <aside className="w-full lg:w-64 shrink-0">
                        <div className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm sticky top-24">
                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest pl-3 mb-4">Views</h3>
                            <nav className="space-y-1.5">
                                <button
                                    onClick={() => setActiveTab('pending')}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'pending'
                                            ? 'bg-slate-900 text-white'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span>⏳</span>
                                        <span>Pending</span>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'pending' ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-600'}`}>
                                        {pending.length}
                                    </span>
                                </button>

                                <button
                                    onClick={() => setActiveTab('approved')}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'approved'
                                            ? 'bg-slate-900 text-white'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span>✅</span>
                                        <span>Approved</span>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'approved' ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-600'}`}>
                                        {approved.length}
                                    </span>
                                </button>

                                <button
                                    onClick={() => setActiveTab('rejected')}
                                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${activeTab === 'rejected'
                                            ? 'bg-slate-900 text-white'
                                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <span>❌</span>
                                        <span>Rejected</span>
                                    </div>
                                    <span className={`px-2 py-0.5 rounded-full text-xs ${activeTab === 'rejected' ? 'bg-slate-700 text-white' : 'bg-slate-200 text-slate-600'}`}>
                                        {rejected.length}
                                    </span>
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0">
                        {activeTab === 'pending' && (
                            <Section title="Action Required" count={pending.length} indicatorColor="yellow">
                                {pending.length === 0 ? (
                                    <div className="bg-white border border-slate-200 rounded-xl p-12 text-center text-slate-400 font-medium shadow-sm">
                                        <span className="text-4xl block mb-3 opacity-30">✨</span>
                                        No pending requests in your queue.
                                    </div>
                                ) : (
                                    <div className="grid gap-6 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
                                        {pending.map((r) => (
                                            <RequestCard
                                                key={r.id}
                                                request={r}
                                                showActions
                                                onApprove={approve}
                                                onReject={reject}
                                            />
                                        ))}
                                    </div>
                                )}
                            </Section>
                        )}

                        {activeTab === 'approved' && (
                            <Section title="Approved Requests" count={approved.length} indicatorColor="green">
                                {approved.length === 0 ? (
                                    <div className="bg-white border border-slate-200 rounded-xl py-20 text-center text-slate-400 font-medium">
                                        No approved requests found.
                                    </div>
                                ) : (
                                    <div className="grid gap-6 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
                                        {approved.map((r) => <RequestCard key={r.id} request={r} showActions={false} />)}
                                    </div>
                                )}
                            </Section>
                        )}

                        {activeTab === 'rejected' && (
                            <Section title="Rejected Requests" count={rejected.length} indicatorColor="red">
                                {rejected.length === 0 ? (
                                    <div className="bg-white border border-slate-200 rounded-xl py-20 text-center text-slate-400 font-medium">
                                        No rejected requests found.
                                    </div>
                                ) : (
                                    <div className="grid gap-6 grid-cols-1 xl:grid-cols-2 lg:grid-cols-2">
                                        {rejected.map((r) => <RequestCard key={r.id} request={r} showActions={false} />)}
                                    </div>
                                )}
                            </Section>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
}
