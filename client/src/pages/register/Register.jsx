import { useState } from "react";
import { styled } from "styled-components";
import { Link } from "react-router-dom";
import { useRegister } from "../../hooks/useRegister";
import imageTest from "../../img/imageTest.png";

const initialState = {
  first_name: "",
  last_name: "",
  githubAccount: "",
  email: "",
  password: "",
  /* confirmPassword: "", */
};

const Register = () => {
  const [form, setForm] = useState(initialState);
  const { register, error, isLoading } = useRegister();

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await register(form);

    setForm(initialState);
  };

  return (
    <StyledRegister>
      <div className="image">
        <img src={imageTest} alt="Image test" />
      </div>
      <form>
        <h1>SIGN UP</h1>
        <input
          type="text"
          id="first_name"
          placeholder="First Name"
          onChange={handleChange}
          value={form.first_name}
          required
        />

        <input
          type="text"
          id="last_name"
          placeholder="Last Name"
          onChange={handleChange}
          value={form.last_name}
          required
        />

        <input
          type="text"
          id="githubAccount"
          placeholder="GitHub Account"
          onChange={handleChange}
          value={form.githubAccount}
        />

        <input
          type="email"
          id="email"
          placeholder="Email Address"
          onChange={handleChange}
          value={form.email}
          required
        />

        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          value={form.password}
          required
        />
        {/* <input
          type="password"
          id="confirmPassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          value={form.confirmPassword}
          required
        /> */}

        <button onClick={handleSubmit} disabled={isLoading}>
          SIGN UP
        </button>

        {error ? <div className="error">{error}</div> : null}

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
  padding: 4rem 0;

  form {
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
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

  div.error {
    padding: 10px;
    background: #ffefef;
    border: 1px solid red;
    color: red;
    border-radius: 4px;
    margin: 20px 0;
  }
  input.error {
    border: 1px solid red;
  }

  @media only screen and (min-width: 600px) {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5rem;

    .image img {
      display: block;
      width: 25rem;
    }
  }
`;
