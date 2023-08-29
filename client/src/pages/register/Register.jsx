import { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
// import imageTest from '../img/imageTest.png';

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
        <h1>REGISTER</h1>
        {/* <div className="image">
          <img src={imageTest} alt="Image test" />
        </div> */}
        <div className="image">
          <img src="../img/imageTest.png" alt="Image test" />
        </div>
        {/* <label htmlFor="first_name">First name</label> */}
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
  form {
    margin-top: 5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
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
    box-shadow: 5px 5px 5px #5e503f;
  }

  button {
    background-color: #ed6d5a;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    box-shadow: 5px 5px 5px #5e503f;
    margin: 1.5rem 0;
    cursor: pointer;
    width: 200px;
    border-radius: 5px;
  }

  h1 {
    font-size: 1.5rem;
    margin: 1rem 0;
    font-weight: 300;
  }

  .image {
    display: none;

  @media (min-width: 600px) {
    .image {
      display: block;
    }
    
  }
`;
