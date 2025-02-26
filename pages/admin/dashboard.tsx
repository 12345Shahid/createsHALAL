//pages/admin/dashboard.tsx

import { useState, useEffect } from "react";
import { supabase } from "../../config/database";
import { useRouter } from "next/router";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [stats, setStats] = useState({});
  const router = useRouter();

  useEffect(() => {
    checkAdminStatus();
    fetchUsers();
    fetchStats();
  }, []);

  const checkAdminStatus = async () => {
    const { data: user, error } = await supabase.auth.getUser();
    if (!user || error) {
      router.push("/login");
      return;
    }

    const { data, error: roleError } = await supabase
      .from("users")
      .select("role")
      .eq("id", user.user.id)
      .single();

    if (roleError || !data || !data.role.includes("admin")) {
      router.push("/");
    }
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase.from("users").select("*");
    if (error) console.error("Error fetching users:", error);
    else setUsers(data);
  };

  const fetchStats = async () => {
    const { data, error } = await supabase
      .from("statistics")
      .select("*")
      .single();
    if (error) console.error("Error fetching stats:", error);
    else setStats(data);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center text-green-700 mb-6">
        Admin Dashboard
      </h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        <StatCard title="Total Users" value={stats?.totalUsers || 0} />
        <StatCard title="Active Users (Daily)" value={stats?.activeUsers || 0} />
        <StatCard title="Blocked Users" value={stats?.blockedUsers || 0} />
        <StatCard title="Total Credits Assigned" value={stats?.totalCredits || 0} />
      </div>

      <h2 className="text-2xl font-semibold mb-4">User Management</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2">ID</th>
            <th className="border border-gray-300 p-2">Email</th>
            <th className="border border-gray-300 p-2">Role</th>
            <th className="border border-gray-300 p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border border-gray-300 p-2">{user.id}</td>
              <td className="border border-gray-300 p-2">{user.email}</td>
              <td className="border border-gray-300 p-2">{user.role}</td>
              <td className="border border-gray-300 p-2">
                <button
                  onClick={() => console.log("Block User", user.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Block
                </button>
                <button
                  onClick={() => console.log("Add Credits", user.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Add Credits
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const StatCard = ({ title, value }) => (
  <div className="bg-white p-4 rounded-lg shadow">
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-3xl font-bold">{value}</p>
  </div>
);

export default AdminDashboard;