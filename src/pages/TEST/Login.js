import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isLoginMode, setIsLoginMode] = useState(true);
  const [signupError, setSignupError] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/login', {
        email,
        pass: password,
      });

      if (response.status === 200) {
        const data = response.data;
        const token = data.token;

        
        // Store the token in local storage
        localStorage.setItem('token', token);
        setToken(token);

        // Fetch user details and update the user state
        const userDetailsResponse = await axios.get(
          'http://localhost:5000/api/protected',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (userDetailsResponse.status === 200) {
          const userDetailsData = userDetailsResponse.data;
          if (userDetailsData.user) {
            setUser(userDetailsData.user);
          } else {
            console.error('User details not found');
          }
        }
      } else {
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleLogout = () => {
    // Remove the token from local storage
    localStorage.removeItem('token');
    setToken('');
    setUser(null);
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(
          'http://localhost:5000/api/protected',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          const data = response.data;
          setUser(data.user);
          setLoading(false);
        } else {
          console.error('Failed to fetch user details');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    const token = localStorage.getItem('token');
    if (token) {
      setToken(token);
      fetchUserDetails();
    } else {
      setLoading(false);
    }
  }, [token, user]); // Include 'user' in the dependency array

  const handleSignup = async () => {
    try {
      const response = await axios.post('http://localhost:5000/api/signup', {
        f_name: firstName,
        l_name: lastName,
        email,
        pass: password,
        phone: phoneNumber,
      });

      if (response.status === 201) {
        console.log('Signup successful');
        setIsLoginMode(true);
        setEmail('');
        setPassword('');
      } else {
        console.error('Signup failed');
      }
    } catch (error) {
      console.error('Error:', error);
      setSignupError('Failed to signup. Please try again.');
    }
  };

  const handleToggleMode = () => {
    setIsLoginMode(!isLoginMode);
    setEmail('');
    setPassword('');
    setSignupError('');
  };

  return (
    <div style={{ margin: '20px' }}>
      {loading ? (
        <p>Loading user details...</p>
      ) : !token ? (
        <div style={{ maxWidth: '400px', margin: 'auto' }}>
          {isLoginMode ? (
            <>
              <h2>Login</h2>
              <div style={{ marginBottom: '10px' }}>
                <label>Email:</label>
                <input
                  type="email"
                  style={{ width: '100%', padding: '5px' }}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Password:</label>
                <input
                  type="password"
                  style={{ width: '100%', padding: '5px' }}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                }}
                onClick={handleLogin}
              >
                Login
              </button>
              <p>
                Don't have an account?{' '}
                <button onClick={handleToggleMode}>Signup</button>
              </p>
            </>
          ) : (
            <>
              <h2>Signup</h2>
              <div style={{ marginBottom: '10px' }}>
                <label>First Name:</label>
                <input
                  type="text"
                  style={{ width: '100%', padding: '5px' }}
                  placeholder="First Name"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Last Name:</label>
                <input
                  type="text"
                  style={{ width: '100%', padding: '5px' }}
                  placeholder="Last Name"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Email:</label>
                <input
                  type="email"
                  style={{ width: '100%', padding: '5px' }}
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Password:</label>
                <input
                  type="password"
                  style={{ width: '100%', padding: '5px' }}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label>Phone Number:</label>
                <input
                  type="text"
                  style={{ width: '100%', padding: '5px' }}
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
              {signupError && <p>{signupError}</p>}
              <button
                style={{
                  width: '100%',
                  padding: '10px',
                  backgroundColor: '#007bff',
                  color: '#fff',
                  border: 'none',
                }}
                onClick={handleSignup}
              >
                Signup
              </button>
              <p>
                Already have an account?{' '}
                <button onClick={handleToggleMode}>Login</button>
              </p>
            </>
          )}
        </div>
      ) : (
        <div className="card p-3 mx-auto" style={{ maxWidth: '400px' }}>
          <div>
            <h2>Welcome, {user.f_name}!</h2>
            <p>First Name: {user.f_name}</p>
            <p>Last Name: {user.l_name}</p>
            <p>Email: {user.email}</p>
            <p>Phone Number: {user.phone}</p>
            <button
              style={{
                width: '100%',
                padding: '10px',
                backgroundColor: '#dc3545',
                color: '#fff',
                border: 'none',
              }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
