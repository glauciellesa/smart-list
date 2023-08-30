import { useState } from 'react';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';
import imageTest from '../../img/imageTest.png';

/* 
https://github.com/glauciellesa.png
https://github.com/CamilaFAssuncao.png
https://github.com/leilaZ1111.png
<img
alt="Perfil image "
src={`https://github.com/${props.imgProfile}.png`}
/> */
const Login = () => {
  const [email, enterEmail] = useState('');
  const [password, enterPassword] = useState('');

  const loginData = {
    email: email,
    password: password,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <StyleLogin>
      <div className="image">
        <img src={imageTest} alt="Image test" />
      </div>
      <form>
        <h1>WELCOME BACK!</h1>
        {/* <label htmlFor="email">email</label> */}
        <input
          value={email}
          type="email"
          placeholder="Email Address"
          id="email"
          onChange={(event) => enterEmail(event.target.value)}
        />
        {/* <label htmlFor="password">password</label> */}
        <input
          value={password}
          type="password"
          placeholder="Password"
          id="password"
          onChange={(event) => enterPassword(event.target.value)}
        />
        <p>Forgot Password?</p>
        <button onClick={handleSubmit}>LOGIN</button>
        <p className="registerHere">
          Don't yet have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </StyleLogin>
  );
};

export default Login;

const StyleLogin = styled.div`
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
  }

  p {
    font-size: 0.8rem;
    margin: 0.5rem 0;
  }
  .registerHere {
    font-size: 1rem;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;

    .image img {
      display: block;
      width: 33rem;
    }
  }
`;
