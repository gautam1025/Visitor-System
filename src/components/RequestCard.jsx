import StatusBadge from './StatusBadge';

export default function RequestCard({ request, onApprove, onReject, onComplete, showActions }) {
  const { visitorName, phone, employee, reason, date, status } = request;

  // Placeholder image URL for the visitor. In the future this will be the uploaded image.
  const avatarUrl = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(visitorName)}&backgroundColor=E8DEAF&textColor=2D2A1C`;

  return (
    <div className="card h-full">

      {/* Top Banner (Header) */}
      <div className="w-full flex justify-between items-center p-5 border-b border-slate-200 bg-slate-50/50">
        <StatusBadge status={status} />
        <span className="text-xs font-semibold text-slate-500">{date}</span>
      </div>

      {/* Main Content Area */}
      <div className="w-full p-5 grow flex flex-col gap-5">

        {/* Profile Section */}
        <div className="flex items-center gap-4 w-full">
          <div className="relative shrink-0 group cursor-pointer">
            <img
              src={avatarUrl}
              alt={visitorName}
              className="w-16 h-16 rounded-full object-cover border border-slate-200"
            />
            {/* Future Upload Overlay inside image circle */}
            <div className="absolute inset-0 bg-black/40 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <span className="text-white text-[10px] font-bold tracking-wider">EDIT</span>
            </div>
          </div>

          <div className="min-w-0">
            <h3 className="font-bold text-slate-900 text-lg truncate">{visitorName}</h3>
            <p className="text-sm text-slate-500 font-medium">{phone}</p>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 gap-4 w-full pt-1">
          <div className="w-full">
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Meeting With</span>
            <div className="font-medium text-slate-800 flex items-center gap-2">
              <span className="w-7 h-7 rounded-md bg-slate-100 flex items-center justify-center text-xs">👔</span>
              {employee}
            </div>
          </div>

          <div className="w-full">
            <span className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider mb-1.5">Purpose</span>
            <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{reason}</p>
          </div>
        </div>

      </div>

      {/* Structured Footer for Actions */}
      {showActions && (
        <div className="w-full mt-auto p-4 border-t border-slate-200 bg-slate-50/30">
          <div className="flex gap-3 w-full">
            {status === 'Pending' && onApprove && onReject && (
              <>
                <button
                  onClick={() => onApprove(request.id)}
                  className="btn-banana"
                >
                  Approve
                </button>
                <button
                  onClick={() => onReject(request.id)}
                  className="btn-banana-outline"
                >
                  Reject
                </button>
              </>
            )}
            {status === 'Approved' && onComplete && (
              <button
                onClick={() => onComplete(request.id)}
                className="btn-banana w-full"
              >
                Mark Completed
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}