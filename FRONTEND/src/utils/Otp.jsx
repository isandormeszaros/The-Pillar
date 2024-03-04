// OTPVerification.jsx
import React, { useState } from 'react';

function OTPVerification() {
  const [otp, setOTP] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Itt kellene implementálni az OTP ellenőrzést
    // A backend hívástól függően lehet aszinkron
  };

  return (
    <div>
      <h2>OTP Verification</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter OTP"
          value={otp}
          onChange={(e) => setOTP(e.target.value)}
          pattern="[0-9]{6}"
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
    </div>
  );
}

export default OTPVerification;
