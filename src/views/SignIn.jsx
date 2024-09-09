import "../styles/SignIn.css";
import { useState } from "react";
import { doLoggedIn } from "../database/useFirebaseAuth";
import { useNavigate } from "react-router-dom";

export default function SignIn() {

  const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await doLoggedIn(email, password);
    navigate("/chats");
  };

  return (
    <>
      <div className="signin-form-box">
        <span className="box-title">Ingresar</span>
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
        <a href="/sign-up" className="form-route">
          Aun no haces parte del equipo ?
        </a>
        <button className="login-button" onClick={handleLogin}>
          Iniciar Sesion
        </button>
      </div>
    </>
  );
}
