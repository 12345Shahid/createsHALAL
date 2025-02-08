import React from 'react';
import Head from 'next/head';
import { APP_NAME } from '../config/settings';
import { useState, useEffect } from 'react';
import { getUserProfile, updateUserProfile } from '../api/user';

const Profile = () => {
  // ... rest of the component code
};

export default Profile;
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    bio: '',
    location: '',
    website: '',
  });

  useEffect(() => {
    const fetchProfile = async () => {
      const userProfile = await getUserProfile();
      setProfile(userProfile);
    };

    fetchProfile();
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateUserProfile(profile);
    // Show success message or handle errors
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Head>
        <title>Your Profile - {APP_NAME}</title>
        <meta name="description" content="Manage your profile settings." />
      </Head>

      <h1 className="text-3xl font-bold mb-6">Your Profile</h1>

      <form onSubmit={handleSubmit} className="max-w-lg">
        <div className="mb-4">
          <label htmlFor="name" className="block mb-2">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            readOnly
          />
        </div>

        <div className="mb-4">
          <label htmlFor="bio" className="block mb-2">Bio</label>
          <textarea
            id="bio"
            name="bio"
            value={profile.bio}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            rows="4"
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="location" className="block mb-2">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={profile.location}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="website" className="block mb-2">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={profile.website}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default Profile;