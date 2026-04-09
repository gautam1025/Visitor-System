import { useRequests } from '../App';
import RequestCard from '../components/RequestCard';
import Navbar from '../components/Navbar';

export default function Dashboard() {
  const { requests, updateRequestStatus } = useRequests();

  const handleApprove = (id) => {
    updateRequestStatus(id, 'Approved');
  };

  const handleComplete = (id) => {
    updateRequestStatus(id, 'Completed');
  };

  const pending = requests.filter((r) => r.status === 'Pending');
  const approved = requests.filter((r) => r.status === 'Approved');
  const completed = requests.filter((r) => r.status === 'Completed');

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto p-4 sm:p-6 lg:p-8 animate-fade-in">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-slate-900 font-outfit tracking-tight">Dashboard Overview</h1>
            <p className="text-slate-500 mt-1">Manage and track visitor requests effectively.</p>
          </div>
          <div className="flex gap-4">
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
              <span className="text-2xl font-bold text-amber-500 font-outfit">{pending.length}</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Pending</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-xl shadow-sm border border-slate-100 flex flex-col items-center">
              <span className="text-2xl font-bold text-emerald-500 font-outfit">{approved.length}</span>
              <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">Approved</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-amber-500 animate-pulse-soft"></div>
              <h2 className="text-xl font-semibold text-slate-800 font-outfit">Pending Reqs</h2>
            </div>
            <div className="space-y-4">
              {pending.length ? (
                pending.map((r) => (
                  <RequestCard
                    key={r.id}
                    request={r}
                    onApprove={handleApprove}
                  />
                ))
              ) : (
                <div className="card text-center py-8 bg-slate-50/50 border-dashed border-2">
                  <p className="text-slate-500 font-medium">All caught up!</p>
                </div>
              )}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
              <h2 className="text-xl font-semibold text-slate-800 font-outfit">Approved</h2>
            </div>
            <div className="space-y-4">
              {approved.length ? (
                approved.map((r) => (
                  <RequestCard
                    key={r.id}
                    request={r}
                    onComplete={handleComplete}
                  />
                ))
              ) : (
                <div className="card text-center py-8 bg-slate-50/50 border-dashed border-2">
                  <p className="text-slate-500 font-medium">No active meetings.</p>
                </div>
              )}
            </div>
          </section>

          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 rounded-full bg-slate-400"></div>
              <h2 className="text-xl font-semibold text-slate-800 font-outfit">History</h2>
            </div>
            <div className="space-y-4">
              {completed.length ? (
                completed.map((r) => (
                  <RequestCard key={r.id} request={r} />
                ))
              ) : (
                <div className="card text-center py-8 bg-slate-50/50 border-dashed border-2">
                  <p className="text-slate-500 font-medium">No history yet.</p>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}