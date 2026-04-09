export default function RoleCard({ icon, label, description, color, onClick }) {
    const colors = {
        blue: 'from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700',
        green: 'from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700',
        orange: 'from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700',
        purple: 'from-violet-500 to-purple-600 hover:from-violet-600 hover:to-purple-700',
    };

    return (
        <button
            onClick={onClick}
            className={`group w-full flex flex-col items-center gap-3 p-6 rounded-2xl bg-gradient-to-br ${colors[color] || colors.blue} text-white shadow-lg hover:shadow-xl active:scale-[0.97] transition-all duration-200`}
        >
            <span className="text-4xl group-hover:scale-110 transition-transform duration-200">{icon}</span>
            <span className="text-lg font-bold">{label}</span>
            {description && <span className="text-xs text-white/75 text-center">{description}</span>}
        </button>
    );
}
