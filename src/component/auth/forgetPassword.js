import React, { useState } from 'react';
import axios from 'axios';

const authAPIUrl = process.env.REACT_APP_AUTH_API_URL;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${authAPIUrl}/auth/forgot-password`, { email });
      alert('Password reset link sent to your email');
    } catch (error) {
      console.error('Error sending reset link:', error);
      alert('Error sending reset link');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Reset Password</button>
    </form>
  );
};

export default ForgotPassword;

