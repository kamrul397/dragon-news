import React, { use } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser, setUser, updateUser } = use(AuthContext);
  const navigate = useNavigate();
  const handleRegister = (event) => {
    event.preventDefault();
    console.log(event.target);

    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);
    // handle registration logic here
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // setUser(user);
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photoURL });
            alert("Registration successful");
            navigate("/");
          })
          .catch((error) => {
            alert(error.message);
          });
      })
      .catch((error) => {
        console.log(error);
        const errorMessage = error.message;
        const errorCode = error.code;
        alert(errorMessage, errorCode);
      });
  };
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleRegister} className="card-body">
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Name"
              name="name"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL(Optional)</label>
            <input
              type="text"
              className="input"
              placeholder="Photo URL"
              name="photoURL"
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Email"
              name="email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Password"
              name="password"
              required
            />

            <button className="btn btn-neutral mt-4" type="submit">
              Register
            </button>

            <p className="text-center text-xl p-1">
              Already have an account?
              <Link to="/auth/login" className="text-secondary m-2">
                Login
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;
