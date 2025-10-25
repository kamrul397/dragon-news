import React from "react";
import { FaEye, FaStar, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
  const { title, author, thumbnail_url, rating, total_view, details, id } =
    news;

  return (
    <div className=" shadow-sm hover:shadow-md transition bg-white p-4">
      {/* Top: Author info + share icon */}
      <div className="flex justify-between items-center bg-base-300 p-2 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <p className="font-semibold text-sm">{author.name}</p>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toLocaleDateString()}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FaRegBookmark className="text-gray-500 hover:text-gray-700 cursor-pointer" />
          <FaShareAlt className="text-gray-500 hover:text-gray-700 cursor-pointer" />
        </div>
      </div>

      {/* Title */}
      <h2 className="text-lg font-semibold mt-3 leading-snug">{title}</h2>

      {/* Thumbnail */}
      <img
        src={thumbnail_url}
        alt={title}
        className="w-full h-48 object-cover rounded-xl mt-3"
      />

      {/* Details */}
      <p className="text-sm text-gray-600 mt-3 line-clamp-3">{details}</p>
      <Link
        to={`/news-details/${id}`}
        className="text-sm text-blue-500 font-medium cursor-pointer mt-1"
      >
        Read More
      </Link>

      {/* Footer: stars + views */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-700">
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <FaStar
              key={i}
              className={`${
                i < Math.round(rating.number)
                  ? "text-yellow-500"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="ml-2 font-medium">{rating.number}</span>
        </div>

        <div className="flex items-center gap-1">
          <FaEye />
          <span>{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
