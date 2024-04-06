import "./LoginForm.css";
import "./RegisterForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { postCreateUserMethod } from "../api/AxiosService";

function RegisterForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const response = await postCreateUserMethod({
        username: username,
        password: password,
        first_name: firstname,
        last_name: lastname,
        address: address,
        phone_no: phone,
      });
      if (response.data.success) {
        alert(response.data.message);
        navigate("/login");
      } else {
        console.log(response.data.data);
        alert(response.data.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h1>Sign Up</h1>
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
          <div className="input-box">
            <input
              type="text"
              name="firstname"
              placeholder="firstname"
              required
              value={firstname}
              onChange={(event) => setFirstname(event.target.value)}
            ></input>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="lastname"
              placeholder="lastname"
              required
              value={lastname}
              onChange={(event) => setLastname(event.target.value)}
            ></input>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="address"
              placeholder="address"
              required
              value={address}
              onChange={(event) => setAddress(event.target.value)}
            ></input>
          </div>
          <div className="input-box">
            <input
              type="text"
              name="phone"
              placeholder="phone"
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
            ></input>
          </div>
          <button type="Submit" disabled={loading}>
            {loading ? "Loading..." : "Sign Up"}
          </button>
          <div className="register-wrap">
            <p>
              Don't have account? <Link to={"/login"}>Login Now</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
