import { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [gitHubAccount, setGitHubAccount] = useState('');

  const userData = {
    first_name: first_name,
    last_name: last_name,
    gitHubAccount: gitHubAccount,
    email: email,
    password: password,
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(userData);
  };

  return (
    <StyledRegister>
      <form>
        <h1>Register</h1>
        <label htmlFor="first_name">First name</label>
        <input
          value={first_name}
          id="first_name"
          placeholder="First name"
          onChange={(event) => setFirstName(event.target.value)}
        />
        <label htmlFor="last_name">Last name</label>
        <input
          value={last_name}
          id="last_name"
          placeholder="Last name"
          onChange={(event) => setLastName(event.target.value)}
        />
        <label htmlFor="gitHubAccount">GitHub Account</label>
        <input
          value={gitHubAccount}
          id="gitHubAccount"
          placeholder="GitHub Account"
          onChange={(event) => setGitHubAccount(event.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          value={email}
          type="email"
          placeholder="yourEmail@example.com"
          onChange={(event) => setEmail(event.target.value)}
          id="email"
        />
        <label htmlFor="password">Password</label>
        <input
          value={password}
          type="password"
          placeholder="*********"
          onChange={(event) => setPassword(event.target.value)}
          id="password"
        />
        <button onClick={handleSubmit}>Log In</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login here.</Link>
      </p>
    </StyledRegister>
  );
};

export default Register;

const StyledRegister = styled.div`
  form {
    text-align: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    align-items: center;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    color: #161616;
  }

  label {
    text-align: left;
    padding: 0.25rem 0;
    background-color: red;
  }
`;
