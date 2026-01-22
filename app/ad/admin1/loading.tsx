export default function Loading() {
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="flex flex-col items-center gap-3">
                <div className="h-10 w-10 animate-spin rounded-full border-4 border-slate-300 border-t-slate-900" />
                <p className="text-sm text-slate-600">Loading admin dashboard...</p>
            </div>
        </div>
    );
}