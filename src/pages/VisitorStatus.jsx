import { useParams, useNavigate } from 'react-router-dom';
import { useRequests } from '../context/RequestContext';
import StatusBadge from '../components/StatusBadge';

const STATUS_MESSAGES = {
  Pending: {
    icon: '⏳',
    message: 'Your request is waiting for approval.',
    color: 'bg-yellow-50 border-yellow-200 text-yellow-700',
  },
  Approved: {
    icon: '✅',
    message: 'Your meeting has been approved. Please wait for guard confirmation.',
    color: 'bg-green-50 border-green-200 text-green-700',
  },
  Rejected: {
    icon: '❌',
    message: 'Your request was rejected.',
    color: 'bg-red-50 border-red-200 text-red-700',
  },
  Completed: {
    icon: '🎉',
    message: 'Meeting completed. Thank you for visiting.',
    color: 'bg-gray-50 border-gray-200 text-gray-700',
  },
};

export default function VisitorStatus() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { requests } = useRequests();

  const request = requests.find((r) => r.id === id);

  if (!request) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="bg-white rounded-3xl shadow-xl p-8 max-w-sm w-full text-center border border-slate-100">
          <span className="text-5xl">🔍</span>
          <h2 className="mt-4 text-xl font-bold text-slate-800">Request Not Found</h2>
          <p className="mt-2 text-slate-500 text-sm">No visitor request found with this ID.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 btn-primary"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const statusInfo = STATUS_MESSAGES[request.status] || STATUS_MESSAGES.Pending;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="w-full max-w-sm">
        {/* Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
          {/* Top strip */}
          <div className="h-2 bg-gradient-to-r from-blue-500 to-indigo-600" />

          <div className="p-7">
            <div className="text-center mb-6">
              <span className="text-5xl">{statusInfo.icon}</span>
              <div className="mt-3">
                <StatusBadge status={request.status} />
              </div>
            </div>

            {/* Details */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-slate-400 text-sm">Visitor</span>
                <span className="text-slate-800 font-semibold text-sm">{request.visitorName}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-slate-400 text-sm">Employee</span>
                <span className="text-slate-800 font-semibold text-sm">{request.employee}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-slate-50">
                <span className="text-slate-400 text-sm">Reason</span>
                <span className="text-slate-800 font-semibold text-sm text-right max-w-[55%]">{request.reason}</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-slate-400 text-sm">Date</span>
                <span className="text-slate-800 font-semibold text-sm">{request.date}</span>
              </div>
            </div>

            {/* Status message */}
            <div className={`rounded-xl border px-4 py-3 text-sm font-medium mb-6 ${statusInfo.color}`}>
              {statusInfo.message}
            </div>

            <button
              onClick={() => navigate('/')}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg active:scale-[0.97] transition-all duration-200"
            >
              ← Back to Home
            </button>
          </div>
        </div>

        <p className="text-center text-xs text-slate-400 mt-4">Request ID: {request.id}</p>
      </div>
    </div>
  );
}