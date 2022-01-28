import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_FILMS } from "../../graphql/Queries";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FilmType } from "../../types";
import SearchBar from "../../components/SearchBar";
import Loader from "../../components/Loader";

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_FILMS);
  const [search] = useSearchParams();
  const navigate = useNavigate();

  const searchHandler = (data: FilmType) => {
    return data.title
      .toLowerCase()
      .includes((search.get("q") ?? "").toLowerCase());
  };

  if (loading) return <Loader />;
  if (error) return <React.Fragment>Error :(</React.Fragment>;

  return (
    <div className="home">
      <SearchBar />
      <div className="grid grid-cols-3 portrait:grid-cols-1 gap-4 m-5">
        {data?.allFilms?.films
          .filter(searchHandler)
          .map(
            ({ id, title, director, releaseDate, openingCrawl }: FilmType) => (
              <div
                key={id}
                onClick={() => navigate(`/movie-detail/${id}`)}
                className="max-w-sm w-full lg:max-w-full lg:flex transition duration-500 hover:scale-105 hover:cursor-pointer"
              >
                <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-md p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-8">
                    <div className="text-gray-900 font-bold text-xl mb-2">
                      {title}
                    </div>
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
            )
          )}
      </div>
    </div>
  );
};

export default Home;
