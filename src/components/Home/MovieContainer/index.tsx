import React from "react";
import { useSearchParams } from "react-router-dom";
import { Film } from "../../../types";
import MovieCard from "../MovieCard";

interface Props {
  data: any;
}

const MovieContainer: React.FC<Props> = (props) => {
  const { data } = props;
  const [search] = useSearchParams();

  const searchHandler = (data: Film) => {
    return data.title
      .toLowerCase()
      .includes((search.get("q") ?? "").toLowerCase());
  };

  return (
    <div className="grid grid-cols-3 portrait:grid-cols-1 gap-4 m-5">
      {data?.allFilms?.films.filter(searchHandler).map((data: Film) => (
        <MovieCard key={data.id} data={data} />
      ))}
    </div>
  );
};

export default MovieContainer;
