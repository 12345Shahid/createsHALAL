import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import { useAuth } from '../hooks/useAuth';
import { supabase } from '../config/database';
import { APP_NAME } from '../config/settings';

const Profile = () => {
  const { user } = useAuth();
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    location: '',
    website: '',
  });

  useEffect(() => {
    if (user) {
      fetchProfile();
    }
  }, [user]);

  const fetchProfile = async () => {
    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (error) {
      console.error('Error fetching profile:', error);
    } else if (data) {
      setProfile(data);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase
      .from('profiles')
      .upsert({ id: user.id, ...profile });

    if (error) {
      console.error('Error updating profile:', error);
    } else {
      alert('Profile updated successfully!');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Your Profile - {APP_NAME}</title>
        <meta name="description" content="View and edit your profile information." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}