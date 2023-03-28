import React, { useState } from "react";
import { GoogleButton } from "react-google-button";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { email, password } = user;

    if (email && password) {
      const res = await fetch(
        "https://chat-application-8e945-default-rtdb.firebaseio.com/HellopajiLogin.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application.json"
          },
          body: JSON.stringify({
            email,
            password
          })
        }
      );
      if (res) {
        setUser({
          email,
          password
        });
        alert("successfully");
        Navigate("/Home");
      }
    } else alert("fill the given fields");
  };

  return (
    <>
      <div className="container-fluid mt-5 d-md-flex">
        <div className="w-50 d-flex justify-content-center mx-auto">
          <form className="border shadow p-3">
            <div className="mb-3">
              <label for="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                name="email"
                onChange={handleChange}
                aria-describedby="emailHelp"
              />
              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleInputPassword1" className="form-label">
                Password
              </label>
              <div className="input-group">
                <input
                  type={showPassword ? "text" : "password"}
                  className="form-control"
                  name="password"
                  onChange={handleChange}
                  id="exampleInputPassword1"
                />
                <button
                  type="button"
                  className="btn btn-outline-primary"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? <BsEyeSlash /> : <BsEye />}
                </button>
              </div>
            </div>
            <div className="d-flex justify-content-center" onClick={sendData}>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <p>OR</p>
            </div>
            <div className="d-flex justify-content-center">
              <GoogleButton />
            </div>
            <div className="mt-3 d-flex justify-content-center">
              <p>
                If you are new please <Link to="/Register">Register</Link>
              </p>
            </div>
            <hr className="mt-1" />
            <b className="text-secondary d-flex justify-content-center">
              @CHATTER
            </b>
          </form>
        </div>
      </div>
    </>
  );
}
