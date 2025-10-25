import React from "react";
import { Link } from "react-router-dom";

const NewsDetailsCard = ({ news }) => {
  console.log(news);
  return (
    <div className="space-y-5">
      <img
        src={news.image_url}
        className="w-full h-[350px] object-cover"
        alt=""
      />
      <h2 className="text-2xl">{news.title}</h2>
      <p>{news.details}</p>
      <Link to={`/category/${news.category_id}`} className="btn btn-secondary">
        All News in this Category
      </Link>
    </div>
  );
};

export default NewsDetailsCard;
