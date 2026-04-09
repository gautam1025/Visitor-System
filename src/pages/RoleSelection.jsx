import { useNavigate } from 'react-router-dom';
import RoleCard from '../components/RoleCard';

export default function RoleSelection() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-br from-slate-50 to-blue-50">
            {/* Brand */}
            <div className="mb-10 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg mb-4">
                    <span className="text-3xl">🏢</span>
                </div>
                <h1 className="text-3xl font-bold text-slate-800">Visitor Management</h1>
                <p className="text-slate-500 mt-1 text-sm">Select your role to continue</p>
            </div>

            {/* Role Grid */}
            <div className="w-full max-w-sm space-y-3">
                <RoleCard
                    icon="👔"
                    label="Login as Employee"
                    description="Manage visitor approvals"
                    color="blue"
                    onClick={() => navigate('/employee-dashboard')}
                />
                <RoleCard
                    icon="🛡️"
                    label="Login as Guard"
                    description="Control entry & exit"
                    color="green"
                    onClick={() => navigate('/guard-dashboard')}
                />
                <RoleCard
                    icon="⚙️"
                    label="Login as Admin"
                    description="View all visitor records"
                    color="purple"
                    onClick={() => navigate('/admin-dashboard')}
                />

                <div className="pt-2 border-t border-slate-200">
                    <button
                        onClick={() => navigate('/qr')}
                        className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-2xl border-2 border-dashed border-slate-300 text-slate-600 hover:border-blue-400 hover:text-blue-600 hover:bg-blue-50 transition-all duration-200 font-medium text-sm"
                    >
                        <span className="text-xl">📱</span>
                        Show QR Code (Guard Station)
                    </button>
                </div>
            </div>

            <p className="mt-8 text-xs text-slate-400">UI Demo Only – No real authentication</p>
        </div>
    );
}
