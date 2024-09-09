import { useState } from "react";
import "../styles/SignUp.css";
import { doRegisterUser } from "../database/useFirebaseAuth";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const buttonInfo = !loading ? <div>Registrar</div> : <div className="loader"></div>

  function handleRegister() {
    try {
      setLoading(true);
      doRegisterUser(name, lastName, email, password);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="signin-form-box">
        <span className="box-title">Ingresar</span>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-input"
          placeholder="Name"
          type="text"
        ></input>
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          className="form-input"
          placeholder="Password"
          type="text"
        ></input>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="form-input"
          placeholder="Email"
          type="email"
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="form-input"
          placeholder="Password"
          type="password"
        ></input>
        <a href="/" className="form-route">
          Ir a iniciar sesion
        </a>
        <button className="login-button" onClick={handleRegister}>
          {
            buttonInfo
          }
        </button>
      </div>
    </>
  );
}
