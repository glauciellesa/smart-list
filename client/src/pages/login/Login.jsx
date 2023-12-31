import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import imageTest from "../../img/imageTest.png";
import { useLogin } from "../../hooks/useLogin";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [form, setForm] = useState(initialState);
  const { login, error, isLoading } = useLogin();
  const navigate = useNavigate();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(form);
    //reset form
    setForm(initialState);
    navigate("/");
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
          type="email"
          id="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={form.email}
          required
        />
        {/* <label htmlFor="password">password</label> */}
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          required
        />
        <p>Forgot Password?</p>
        <button onClick={handleSubmit} disabled={isLoading}>
          LOGIN
        </button>
        {error ? <div className="error">{error}</div> : null}
        <p className="registerHere">
          Don't have an account yet? <Link to="/register">Register here</Link>
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
  width: 100%;
  padding: 10rem 0;

  form {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    color: #161616;
  }
  input {
    text-align: left;
    padding: 0.7rem;
    background-color: white;
    margin: 0.5rem 0;
    width: 300px;
    border-radius: 5px;
    border: none;
    box-shadow: 5px 2px 10px #d6cdc2;
  }
  button {
    background-color: #ed6d5a;
    color: white;
    padding: 0.7rem;
    border: none;
    box-shadow: 5px 2px 10px #d6cdc2;
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
    color: #704869;
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
    gap: 5rem;
    padding: 5rem 0;

    .image img {
      display: block;
      width: 25rem;
    }
  }
`;
