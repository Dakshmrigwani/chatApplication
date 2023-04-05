import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsEye, BsEyeSlash } from "react-icons/bs";
import InputGroup from "react-bootstrap/InputGroup";

export default function Register() {
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const togglePasswordVisibility1 = () => {
    setShowPassword1((prevShowPassword1) => !prevShowPassword1);
  };
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };
  const Navigate = useNavigate();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  let name, value;
  const handleChange = (event) => {
    name = event.target.name;
    value = event.target.value;

    setUser({ ...user, [name]: value });
  };

  const sendData = async (e) => {
    e.preventDefault();

    const { name, email, password, confirmPassword } = user;

    if (name && email && password === confirmPassword) {
      const res = await fetch(
        "https://chat-application-8e945-default-rtdb.firebaseio.com/Hellopaji.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application.json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
            confirmPassword,
          }),
        }
      );
      if (res) {
        setUser({
          name,
          email,
          password,
          confirmPassword,
        });
        alert("successful");
        Navigate("/Home");
      }
    } else if (password !== confirmPassword) {
      alert("password incorrect");
    } else {
      alert("please fill the given details");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-10 col-xl-9 mx-auto">
            <div className="card flex-row my-5 border-0 shadow rounded-3 overflow-hidden">
              <div className="card-img-left d-none d-md-flex"></div>
              <div className="card-body p-4 p-sm-5">
                <h5 className="card-title text-center mb-5 fw-bold fs-5">
                  Register
                </h5>
                <div className="d-flex align-items-center"></div>
                <div className="form-floating mb-3">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    value={user.name}
                    onChange={handleChange}
                    id="floatingInputUsername"
                    placeholder="myusername"
                    required
                    autofocus
                  />
                  <label for="floatingInputUsername">Username</label>
                </div>

                <div className="form-floating mb-3">
                  <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    className="form-control"
                    id="floatingInputEmail"
                    placeholder="name@example.com"
                  />
                  <label for="floatingInputEmail">Email address</label>
                </div>

                <div className="form-floating mb-3">
                  <InputGroup size="lg">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      className="form-control"
                      id="floatingPassword"
                      placeholder="Password"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? <BsEyeSlash /> : <BsEye />}
                    </button>
                  </InputGroup>
                </div>

                <div className="form-floating mb-3">
                  <InputGroup size="lg">
                    <input
                      type={showPassword1 ? "text" : "password"}
                      name="confirmPassword"
                      className="form-control"
                      value={user.confirmPassword}
                      onChange={handleChange}
                      id="floatingPasswordConfirm"
                      placeholder="Confirm Password"
                    />
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={togglePasswordVisibility1}
                    >
                      {showPassword1 ? <BsEyeSlash /> : <BsEye />}
                    </button>
                  </InputGroup>
                </div>

                <div className="d-grid mb-2">
                  <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={sendData}
                  >
                    Register
                  </button>
                </div>

                <Link className="d-block text-center mt-2 small" to="/Login">
                  Have an account? Sign In
                </Link>

                <hr className="my-4" />

                <div className="d-grid mb-2">
                  <button
                    onClick={handleGoogleSignIn}
                    className="btn btn-lg btn-google btn-login fw-bold text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-google me-2"></i> Sign up with Google
                  </button>
                </div>

                <div className="d-grid">
                  <button
                    className="btn btn-lg btn-facebook btn-login fw-bold text-uppercase"
                    type="submit"
                  >
                    <i className="fab fa-facebook-f me-2"></i> Sign up with
                    Facebook
                  </button>
                </div>
                <hr className="mt-3" />
                <b className="text-secondary d-flex justify-content-center fs-5">
                  @CHATTER
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
