import React, { useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const authAPIUrl = process.env.REACT_APP_AUTH_API_URL;

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const query = new URLSearchParams(useLocation().search);
  const token = query.get('token');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      setError('Passwords do not match');
      return; 
    } 

    try {
      await axios.post(`${authAPIUrl}/reset-password`, { token, newPassword });
      setSuccess('Password reset successfully');
    } catch (err) {
      setError('Failed to reset password');
    }
  };

  return (
    <div>
      <h2>Reset Password</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>New Password:</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Reset Password</button>
      </form>
      {error && <p>{error}</p>}
      {success && <p>{success}</p>}
    </div>
  );
};

export default ResetPassword;
