import { useState, useEffect } from 'react';
import { supabase } from '../../config/database';
import { useRouter } from 'next/router';

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
    const user = supabase.auth.user();
    if (!user) {
      router.push('/login');
      return;
    }
    const { data, error } = await supabase
      .from('admins')
      .select('*')
      .eq('user_id', user.id)
      .single();
    if (error || !data) {
      router.push('/');
    }
  };

  const fetchUsers = async () => {
    const { data, error } = await supabase.from('users').select('*');
    if (error) console.error('Error fetching users:', error);
    else setUsers(data);
  };

  const fetchStats = async () => {
    // Implement fetching statistics
    // This is a placeholder for the actual implementation
    setStats({
      totalUsers: users.length,
      activeUsers: {
        daily: 0,
        weekly: 0,
        monthly: 0,
      },
      totalGeneratedContent: 0,
      mostUsedModels: [],
      averageResponseTimes: {},
      totalBlockedUsers: 0,
      totalCreditsAssigned: 0,
    });
  };

  const blockUser = async (userId) => {
    // Implement user blocking logic
  };

  const deleteHistory = async (userId, historyId) => {
    // Implement history deletion logic
  };

  const sendNotification = async (userId, message) => {
    // Implement notification sending logic
  };

  const addCredits = async (userId, credits) => {
    // Implement credit addition logic
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard title="Total Users" value={stats.totalUsers} />
        <StatCard title="Active Users (Daily)" value={stats.activeUsers?.daily} />
        <StatCard title="Total Generated Content" value={stats.totalGeneratedContent} />
        <StatCard title="Total Blocked Users" value={stats.totalBlockedUsers} />
        <StatCard title="Total Credits Assigned" value={stats.totalCreditsAssigned} />
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">User Management</h2>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2">ID</th>
              <th className="border border-gray-300 p-2">Email</th>
              <th className="border border-gray-300 p-2">Credits</th>
              <th className="border border-gray-300 p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-300 p-2">{user.id}</td>
                <td className="border border-gray-300 p-2">{user.email}</td>
                <td className="border border-gray-300 p-2">{user.credits}</td>
                <td className="border border-gray-300 p-2">
                  <button onClick={() => blockUser(user.id)} className="bg-red-500 text-white px-2 py-1 rounded mr-2">Block</button>
                  <button onClick={() => addCredits(user.id, 10)} className="bg-green-500 text-white px-2 py-1 rounded">Add Credits</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Add more sections for other admin features */}
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