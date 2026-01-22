import { Package, ShoppingBag, Users, DollarSign } from "lucide-react";

function StatCard({
    title,
    value,
    icon,
}: {
    title: string;
    value: string;
    icon: React.ReactNode;
}) {
    return (
        <div className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4 ">
            <div className="p-3 rounded-xl bg-slate-100 text-slate-700">
                {icon}
            </div>
            <div>
                <p className="text-sm text-slate-500">{title}</p>
                <h3 className="text-xl font-semibold text-slate-800">{value}</h3>
            </div>
        </div>
    );
}

export default function AdminDashboardPage() {
    // 🔌 Later: fetch data from backend / API
    const stats = {
        products: 120,
        orders: 86,
        users: 540,
        revenue: "Rs 245,000",
    };

    return (
        <div className="space-y-8">
            {/* Page Header */}
            <div>
                <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
                <p className="text-sm text-slate-500">
                    Welcome back! Here is your store overview.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <StatCard
                    title="Total Products"
                    value={stats.products.toString()}
                    icon={<Package size={22} />}
                />
                <StatCard
                    title="Total Orders"
                    value={stats.orders.toString()}
                    icon={<ShoppingBag size={22} />}
                />
                <StatCard
                    title="Total Users"
                    value={stats.users.toString()}
                    icon={<Users size={22} />}
                />
                <StatCard
                    title="Revenue"
                    value={stats.revenue}
                    icon={<DollarSign size={22} />}
                />
            </div>

            {/* Placeholder sections */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="font-semibold text-slate-700 mb-4">Recent Orders</h2>
                    <p className="text-sm text-slate-500">Orders list yahan ayegi</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-sm">
                    <h2 className="font-semibold text-slate-700 mb-4">Top Products</h2>
                    <p className="text-sm text-slate-500">Top selling shoes/sandals</p>
                </div>
            </div>
        </div>
    );
}
