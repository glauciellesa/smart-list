import { useState } from 'react';

/* 
https://github.com/glauciellesa.png
https://github.com/CamilaFAssuncao.png
https://github.com/leilaZ1111.png
<img
alt="Perfil image "
src={`https://github.com/${props.imgProfile}.png`}
/> */
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <div className="authentification-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>
        <input
          value={email}
          type="email"
          placeholder="yourEmail@example.com"
          id="email"
          name="email"
        />
        <label htmlFor="password">password</label>
        <input
          value={password}
          type="password"
          placeholder="*********"
          id="password"
          name="password"
        />
        <button>Log In</button>
      </form>
      <button>Don't yet have an account? Register here.</button>
    </div>
  );
};

export default Login;
