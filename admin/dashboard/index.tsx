import React, { useEffect, useState } from 'react';
import { useAuth } from '../../middleware/authMiddleware';
import { supabase } from '../../config/database';

const Dashboard = () => {
  const { user } = useAuth();
  const [credits, setCredits] = useState(0);
  const [referralCredits, setReferralCredits] = useState(0);
  const [adCredits, setAdCredits] = useState(0);
  const [recentActivity, setRecentActivity] = useState([]);

  useEffect(() => {
    if (user) {
      fetchUserData();
      fetchRecentActivity();
    }
  }, [user]);

  const fetchUserData = async () => {
    const { data, error } = await supabase
      .from('users')
      .select('credits, referral_credits, ad_credits')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Error fetching user data:', error);
    } else {
      setCredits(data.credits);
      setReferralCredits(data.referral_credits);
      setAdCredits(data.ad_credits);
    }
  };

  const fetchRecentActivity = async () => {
    const twoMonthsAgo = new Date();
    twoMonthsAgo.setMonth(twoMonthsAgo.getMonth() - 2);

    const { data, error } = await supabase
      .from('activity_log')
      .select('*')
      .eq('user_id', user.id)
      .gte('created_at', twoMonthsAgo.toISOString())
      .order('created_at', { ascending: false })
      .limit(10);

    if (error) {
      console.error('Error fetching recent activity:', error);
    } else {
      setRecentActivity(data);
    }
  };

  return (
    <div className="dashboard">
      <h1>Welcome, {user?.email}</h1>
      <div className="credit-sections">
        <div className="credit-box">
          <h2>Total Credits</h2>
          <p>{credits}</p>
        </div>
        <div className="credit-box">
          <h2>Referral Credits</h2>
          <p>{referralCredits}</p>
        </div>
        <div className="credit-box">
          <h2>Ad Credits</h2>
          <p>Coming Soon</p>
        </div>
      </div>
      <div className="recent-activity">
        <h2>Recent Activity</h2>
        <ul>
          {recentActivity.map((activity, index) => (
            <li key={index}>{activity.description}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;