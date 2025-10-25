import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext); // ✅ correct usage
  const [error, setError] = useState("");

  const location = useLocation();
  const navigate = useNavigate();
  console.log("Login page location:", location);
  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(location.state || "/", { replace: true });
        console.log("Logged in user:", user);
        alert("Login successful"); // ✅ should now show
      })
      .catch((error) => {
        console.error(error);
        // alert(`${error.code}: ${error.message}`); // ✅ combine both in one string
        setError(error.message);
      });
  };

  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />

            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />

            {error && <p className="text-pink-600">{error}</p>}
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>

            <button type="submit" className="btn btn-neutral mt-4">
              Login
            </button>

            <p className="text-center text-xl p-1">
              Don't have an account?
              <Link to="/auth/register" className="text-secondary m-2">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
