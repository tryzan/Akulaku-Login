import "./LoginForm.css";
import { useState } from "react";
import { postAuthenticateMethod } from "../api/AxiosService";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messageError, setMessageError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      await postAuthenticateMethod({
        username: username,
        password: password,
      });
      navigate("/dashboard");
    } catch (error) {
      setMessageError(error.response.data.message);
    } finally {
      setLoading(false);
    }

    // setTimeout(async () => {
    //   try {
    //     await postAuthenticateMethod({
    //       username: username,
    //       password: password,
    //     });
    //     navigate("/dashboard");
    //   } catch (error) {
    //     setMessageError(error.response.data.message);
    //   } finally {
    //     setLoading(false);
    //   }
    // }, 1000);
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Login</h1>
          {messageError ? (
            <>
              <p
                style={{
                  color: "red",
                  fontWeight: "bold",
                  fontSize: "16px",
                  textAlign: "center",
                  display: "inline-block",
                  backgroundColor: "transparent",
                  borderBlock: "2px solid red",
                  borderRadius: "5px",
                  marginTop: "5px",
                }}
              >
                {messageError}
              </p>
            </>
          ) : null}
          <div className="input-box">
            <input
              type="text"
              name="username"
              placeholder="Username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            ></input>
          </div>
          <div className="input-box">
            <input
              type="password"
              name="password"
              placeholder="Password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            ></input>
          </div>
          <button type="Submit" disabled={loading}>
            {loading ? "Loading..." : "Login"}
          </button>
          <div className="register-wrap">
            <p>
              Don't have account? <Link to={"/register"}>Register Now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
