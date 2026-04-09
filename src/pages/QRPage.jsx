import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';

export default function QRPage() {
    const navigate = useNavigate();

    // Use window.location.origin to point to the correct deployed/local host URL
    const formUrl = `${window.location.origin}/visitor-form`;

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-indigo-50">
            <div className="bg-white rounded-3xl shadow-xl p-8 max-w-xs w-full text-center border border-slate-100">
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-800">Visitor Check-In</h1>
                    <p className="text-slate-500 text-sm mt-1">Scan the QR code below to fill the visitor form</p>
                </div>

                {/* Real QR Code that scans to /visitor-form */}
                <div className="relative mx-auto w-56 h-56 rounded-2xl bg-white border-4 border-slate-800 flex items-center justify-center mb-6 p-2">
                    <QRCode
                        value={formUrl}
                        size={200}
                        style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                        viewBox={`0 0 200 200`}
                    />
                </div>

                <p className="text-slate-600 text-sm font-medium mb-1">Scan to Fill Visitor Form</p>
                <p className="text-slate-400 text-xs mb-6 truncate px-2" title={formUrl}>{formUrl}</p>

                <button
                    onClick={() => navigate('/visitor-form')}
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-md hover:shadow-lg hover:from-blue-600 hover:to-indigo-700 active:scale-[0.97] transition-all duration-200"
                >
                    📝 Open Visitor Form
                </button>

                <button
                    onClick={() => navigate('/')}
                    className="mt-3 w-full py-2.5 rounded-xl text-slate-500 hover:text-slate-700 text-sm font-medium transition-colors hover:bg-slate-50"
                >
                    ← Back to Home
                </button>
            </div>
        </div>
    );
}
