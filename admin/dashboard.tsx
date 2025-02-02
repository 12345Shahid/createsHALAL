import React from 'react';
import { useAuth } from '../middleware/authMiddleware';

const AdminDashboard = () => {
  const { user } = useAuth();

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>Admin Dashboard</h1>
      {/* ...existing code... */}
    </div>
  );
};

export default AdminDashboard;
