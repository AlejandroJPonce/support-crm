import { useState } from "react";
import "../styles/SignIn.css";
import "../styles/SignUp.css";
import { doRegisterUser } from "../database/useFirebaseAuth";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [loading, setLoading] = useState(false);

  const buttonClasses = !loading ? (
    <div>Registrar</div>
  ) : (
    <div className="loader"></div>
  );

  async function handleRegister() {
    try {
      setLoading(true);
      const response = await doRegisterUser(name, lastName, email, password);
      if (response) {
        navigate("/");
      }
    } catch (error) {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <div className="signin-form-box">
        <span className="box-title">Registrarme</span>
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
          {buttonClasses}
        </button>
      </div>
    </>
  );
}
