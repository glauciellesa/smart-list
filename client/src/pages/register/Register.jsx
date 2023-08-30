import { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import imageTest from '../../img/imageTest.png';

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
      <div className="image">
        <img src={imageTest} alt="Image test" />
      </div>
      <form>
        <h1>REGISTER</h1>
        <input
          value={first_name}
          id="first_name"
          placeholder="First Name"
          onChange={(event) => setFirstName(event.target.value)}
        />
        {/* <label htmlFor="last_name">Last name</label> */}
        <input
          value={last_name}
          id="last_name"
          placeholder="Last Name"
          onChange={(event) => setLastName(event.target.value)}
        />
        {/* <label htmlFor="gitHubAccount">GitHub Account</label> */}
        <input
          value={gitHubAccount}
          id="gitHubAccount"
          placeholder="GitHub Account"
          onChange={(event) => setGitHubAccount(event.target.value)}
        />
        {/* <label htmlFor="email">Email</label> */}
        <input
          value={email}
          type="email"
          placeholder="Email Address"
          onChange={(event) => setEmail(event.target.value)}
          id="email"
        />
        {/* <label htmlFor="password">Password</label> */}
        <input
          value={password}
          type="password"
          placeholder="Password"
          onChange={(event) => setPassword(event.target.value)}
          id="password"
        />
        <input
          value={password}
          type="password"
          placeholder="Confirm Password"
          onChange={(event) => setPassword(event.target.value)}
          id="password"
        />
        <button onClick={handleSubmit}>SIGN UP</button>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </StyledRegister>
  );
};

export default Register;

const StyledRegister = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    font-family: 'Montserrat', sans-serif;
    color: #161616;
  }

  input {
    text-align: left;
    padding: 0.7rem 0.7rem;
    background-color: white;
    margin: 0.5rem 0;
    width: 300px;
    border-radius: 5px;
    border: none;
    box-shadow: 5px 5px 5px #d6cdc2;
  }

  button {
    background-color: #ed6d5a;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    box-shadow: 5px 5px 5px #d6cdc2;
    margin: 1.5rem 0;
    cursor: pointer;
    width: 200px;
    border-radius: 5px;
  }

  a {
    color: #704869;
  }

  a:hover {
    color: #ed6d5a;
  }

  h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 300;
  }

  .image img {
    display: none;
    width: 33rem;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    .image img {
      display: block;
    }
  }
`;
