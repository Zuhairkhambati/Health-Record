// LoginPage.tsx

import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.scss';

function LoginPage({ onLogin }: { onLogin: (user: any) => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [phoneNumberError, setPhoneNumberError] = useState('Please enter a value');
  const history = useHistory();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Simulate login
    const user = { email, password, name, phoneNumber };
    onLogin(user);
    history.push('/dashboard');
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*$/.test(inputValue)) {
      setPhoneNumber(inputValue);
      setPhoneNumberError('');
    }
  };

  useEffect(() => {
    if (phoneNumber.length > 0 && phoneNumber.length !== 10) {
      setPhoneNumberError('Phone number must be 10 digits');
    } else if (phoneNumber.length === 0) {
      setPhoneNumberError('Please enter a value');
    } else {
      setPhoneNumberError('');
    }
  }, [phoneNumber]);

  return (
    <div className="LoginPage">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Phone Number:
          <input type="tel" value={phoneNumber} onChange={handlePhoneNumberChange} />
          {phoneNumberError && <p>{phoneNumberError}</p>}
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          
        </label>
        <label>
          Password:
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;