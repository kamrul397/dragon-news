import React from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <h2 className="font-semibold  mb-3">Login with</h2>
      <div className="space-y-4">
        <button className="btn btn-outline w-full">
          <FcGoogle size={22}></FcGoogle> Login with Google
        </button>
        <button className="btn btn-outline w-full">
          <FaGithub size={22}></FaGithub> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
