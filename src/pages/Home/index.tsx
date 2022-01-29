import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_FILMS } from "../../graphql/Queries";
import SearchBar from "../../components/common/SearchBar";
import Loader from "../../components/common/Loader";
import MovieContainer from "../../components/Home/MovieContainer";

const Home: React.FC = () => {
  const { loading, error, data } = useQuery(GET_FILMS);

  if (loading) return <Loader />;
  if (error) return <React.Fragment>Error :(</React.Fragment>;

  return (
    <div className="home">
      <SearchBar />
      <MovieContainer data={data} />
    </div>
  );
};

export default Home;
