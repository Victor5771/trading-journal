import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Profile({ user }) {
  const [profileData, setProfileData] = useState({
    username: user.username,
    email: user.email,
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState('');

  useEffect(() => {
    // Fetch profile data if needed on component mount
    const fetchProfileData = async () => {
      try {
        const response = await axios.get('/api/profile');
        setProfileData(response.data);
      } catch (error) {
        setErrors({ general: 'Failed to fetch profile data' });
      }
    };
    fetchProfileData();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfileData({ ...profileData, [name]: value });
  };

  const validateForm = () => {
    const errors = {};
    if (!profileData.username) errors.username = 'Username is required';
    if (!profileData.email) errors.email = 'Email is required';
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    setErrors({});

    try {
      await axios.put('/api/profile', profileData);
      setSuccessMessage('Profile updated successfully');
    } catch (error) {
      setErrors({ general: error.response?.data?.message || 'An error occurred' });
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4">Profile</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Username</label>
          <input
            type="text"
            name="username"
            value={profileData.username}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.username && <p className="text-red-500 text-sm">{errors.username}</p>}
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 rounded"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
        </div>
        {errors.general && <p className="text-red-500 text-sm">{errors.general}</p>}
        {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Update Profile
        </button>
      </form>
    </div>
  );
}

export default Profile;
