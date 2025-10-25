import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Find Us</h2>
      <div className="join join-vertical w-full space-y-2">
        <button className="btn join-item">
          <FaFacebook></FaFacebook> Facebook
        </button>
        <button className="btn join-item">
          <FaTwitter></FaTwitter> Twitter
        </button>
        <button className="btn join-item">
          <FaLinkedin></FaLinkedin> LinkedIn
        </button>
      </div>
    </div>
  );
};

export default FindUs;
