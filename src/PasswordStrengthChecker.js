import React, { useState } from 'react';

const PasswordStrengthChecker = () => {
  const [password, setPassword] = useState('');
  const [strength, setStrength] = useState('');

  const checkPasswordStrength = (password) => {
    const lengthCriteria = password.length >= 8;
    const numberCriteria = /\d/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const lowercaseCriteria = /[a-z]/.test(password);
    const specialCharacterCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    const criteriaMet = [
      lengthCriteria,
      numberCriteria,
      uppercaseCriteria,
      lowercaseCriteria,
      specialCharacterCriteria,
    ].filter(Boolean).length;

    switch (criteriaMet) {
      case 0:
      case 1:
        setStrength('Very Weak');
        break;
      case 2:
        setStrength('Weak');
        break;
      case 3:
        setStrength('Medium');
        break;
      case 4:
        setStrength('Strong');
        break;
      case 5:
        setStrength('Very Strong');
        break;
      default:
        setStrength('');
    }
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    checkPasswordStrength(value);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center' }}>
      <h2>Password Strength Checker</h2>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter your password"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <div>
        <strong>Password Strength:</strong> {strength}
      </div>
    </div>
  );
};

export default PasswordStrengthChecker;
