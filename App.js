import { useEffect } from 'react';
import './App.css';
import './polyfills.js';
// import jwt from 'jsonwebtoken';
// import jwt from 'react-jwt';

function App() {
  // Genera un token con un tiempo de expiración de 1 hora
//     const token = jwt.sign({ username: 'usuario123' }, 'mi_clave_secreta', { expiresIn: '1h' });
//   // Muestra el token en la consola del navegador
// console.log(token);

useEffect(() => {
  fetch('https://backend-login-puce.vercel.app/')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));
}, [])

const handleLogin = (event) => {
  event.preventDefault();
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: 'johndoe', password: 'secretpassword' })
  };

  fetch('https://backend-login-puce.vercel.app/', requestOptions)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
  }

  return (
    <div className="login-page">
    <div className="form">
      <form className="login-form" onSubmit={handleLogin}>
        <input type="text" placeholder="username" />
        <input type="password" placeholder="password" />
        <button>login</button>
        <p className="message">Not registered? <a href="#">Create an account</a></p>
      </form>
    </div>
  </div>
  );
}

export default App;
