import "../styles/SignIn.css";
import "../styles/SignUp.css";
import { useState } from "react";
import { doLoggedIn } from "../database/useFirebaseAuth";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const buttonClasses = !loading ? (
    <div>Iniciar Sesión</div>
  ) : (
    <div className="loader"></div>
  );

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await doLoggedIn(email, password);
      if (response) {
        navigate("/chats");
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  function logKey (event) {
    console.log(event);
  }

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
          {buttonClasses}
        </button>
      </div>
    </>
  );
}
