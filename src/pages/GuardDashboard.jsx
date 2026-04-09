import { useRequests } from '../context/RequestContext';
import Navbar from '../components/Navbar';
import RequestCard from '../components/RequestCard';

export default function GuardDashboard() {
    const { requests, updateRequestStatus } = useRequests();

    const approved = requests.filter((r) => r.status === 'Approved');
    const completed = requests.filter((r) => r.status === 'Completed');

    const markCompleted = (id) => updateRequestStatus(id, 'Completed');

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
            <Navbar />
            <div className="max-w-3xl mx-auto px-4 py-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-slate-800">Guard Dashboard</h1>
                    <p className="text-slate-500 mt-1 text-sm">Manage visitor entry and exit</p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    {[
                        { label: 'Active Entry', count: approved.length, color: 'bg-green-50 text-green-700 border-green-200', icon: '🟢' },
                        { label: 'Completed', count: completed.length, color: 'bg-gray-50 text-gray-700 border-gray-200', icon: '✅' },
                    ].map(({ label, count, color, icon }) => (
                        <div key={label} className={`rounded-2xl border p-5 text-center ${color}`}>
                            <div className="text-3xl font-bold">{count}</div>
                            <div className="text-sm font-medium mt-1">{icon} {label}</div>
                        </div>
                    ))}
                </div>

                {/* Active Entry Section */}
                <section className="mb-8">
                    <div className="flex items-center gap-3 mb-4 pl-4 border-l-4 border-l-green-400">
                        <h2 className="text-lg font-bold text-slate-700">Approved Visitors</h2>
                        <span className="text-sm font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                            {approved.length}
                        </span>
                        <span className="ml-auto text-xs text-green-600 font-medium bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                            Active Entry
                        </span>
                    </div>

                    {approved.length === 0 ? (
                        <div className="text-center py-10 text-slate-400">
                            <span className="text-4xl block mb-2">🚫</span>
                            No approved visitors at this time
                        </div>
                    ) : (
                        <div className="grid gap-3 sm:grid-cols-2">
                            {approved.map((r) => (
                                <RequestCard
                                    key={r.id}
                                    request={r}
                                    showActions
                                    onComplete={markCompleted}
                                />
                            ))}
                        </div>
                    )}
                </section>

                {/* History Section */}
                <section>
                    <div className="flex items-center gap-3 mb-4 pl-4 border-l-4 border-l-gray-300">
                        <h2 className="text-lg font-bold text-slate-700">History</h2>
                        <span className="text-sm font-semibold text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full">
                            {completed.length}
                        </span>
                        <span className="ml-auto text-xs text-gray-600 font-medium bg-gray-100 border border-gray-200 px-2 py-0.5 rounded-full">
                            Completed
                        </span>
                    </div>

                    {completed.length === 0 ? (
                        <div className="text-center py-10 text-slate-400">
                            <span className="text-4xl block mb-2">📋</span>
                            No completed visits yet
                        </div>
                    ) : (
                        <div className="grid gap-3 sm:grid-cols-2">
                            {completed.map((r) => (
                                <RequestCard key={r.id} request={r} showActions={false} />
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </div>
    );
}
