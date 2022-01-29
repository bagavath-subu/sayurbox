import React from "react";
import { Film } from "../../../types";
import { useNavigate } from "react-router-dom";

interface Props {
  data: Film;
}

const MovieCard: React.FC<Props> = (props) => {
  const {
    data: { id, title, director, releaseDate, openingCrawl },
  } = props;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/movie-detail/${id}`)}
      className="max-w-sm w-full lg:max-w-full lg:flex transition duration-500 hover:scale-105 hover:cursor-pointer"
    >
      <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-md p-4 flex flex-col justify-between leading-normal">
        <div className="mb-8">
          <div className="text-gray-900 font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">
            {openingCrawl.slice(0, 100) + "..."}
          </p>
        </div>
        <div className="flex items-center">
          <div className="text-sm">
            <p className="text-gray-900 leading-none">{director}</p>
            <p className="text-gray-600">{releaseDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
