import React from "react";
import Marquee from "react-fast-marquee";

const LatestNews = () => {
  return (
    <div className="flex items-center gap-5 bg-base-200 p-3">
      <p className="bg-secondary px-3 py-2 text-base-200">Latest</p>
      <Marquee pauseOnHover="true" speed={50}>
        <p className="font-bold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          nobis? Distinctio voluptatum laboriosam, ad magni corrupti quaerat
          porro, optio quia repudiandae id alias a dolore. Saepe vero
          reprehenderit nostrum ipsum?
        </p>
      </Marquee>
    </div>
  );
};

export default LatestNews;
