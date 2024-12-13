import { useState } from "react";
import "./style/login.css";
import axios from "axios";
import pass from "../assets/password.png";
import email from "../assets/email.png";
import nest from "../assets/nest_marketing.svg";

/*************  ✨ Codeium Command ⭐  *************/
/******  2f81732b-a794-49ce-bcba-6918e59ab0d2  *******/ function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/login", {
        email: username,
        password,
      });
      console.log("Logged in:", response.data);
      // Redirect to home or some other page after successful login
      // You can store the JWT token in localStorage or cookies
      window.location.href = "/";
    } catch (err) {
      setErrorMessage("Invalid credentials");
      console.error("Login failed:", err);
    }
  };

  return (
    <div className="login">
      <div className="left">
        <img src={nest} alt="Nest Marketing Logo" />
      </div>
      <div className="right">
        <h2>Hello Again!</h2>
        <p>Welcome Back</p>
        <form onSubmit={handleSubmit}>
          <div>
            <i>
              <img src={email} alt="Email Icon" />
            </i>
            <input
              type="email"
              placeholder="Email Address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <i>
              <img src={pass} alt="Password Icon" />
            </i>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <input type="submit" value="Login" />
          {errorMessage && <p>{errorMessage}</p>}
          <a href="/forgot-password">Forgot password?</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
