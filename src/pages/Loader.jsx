import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white/80 z-50">
      <span className="loading loading-dots loading-lg text-green-600"></span>
    </div>
  );
};

export default Loader;
