"use client";
import { useEffect, useState } from "react";
import { getUsers } from "@/services/auth.api";
import { User } from "@/types/auth";

export default function UsersPage() {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const data = await getUsers();
                setUsers(data);
            } catch (err) {
                console.error("Failed to fetch users", err);
            } finally {
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return (
        <div className="flex">
            <main className="p-6 flex-1">
                <h1 className="text-3xl font-bold mb-4">Users List</h1>

                {loading ? (
                    <p>Loading users...</p>
                ) : users.length === 0 ? (
                    <p>No users found.</p>
                ) : (
                    <table className="w-full table-auto border-collapse">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="border px-4 py-2">ID</th>
                                <th className="border px-4 py-2">Username</th>
                                <th className="border px-4 py-2">Email</th>
                                <th className="border px-4 py-2">Role</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map(user => (
                                <tr key={user._id} className="odd:bg-gray-100">
                                    <td className="border px-4 py-2">{user._id || "N/A"}</td>
                                    <td className="border px-4 py-2">{user.username || "N/A"}</td>
                                    <td className="border px-4 py-2">
                                        {user.email || user.email || "N/A"}
                                    </td>
                                    <td className="border px-4 py-2">
                                        {user.role || user.roleId || "User"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </main>
        </div>
    );
}
