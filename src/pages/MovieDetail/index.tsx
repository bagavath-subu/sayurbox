import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useNavigate, useParams } from "react-router-dom";
import { GET_FILM_INFO } from "../../graphql/Queries";
import ContentBlock from "../../components/common/ContentBlock";
import Loader from "../../components/common/Loader";
import { Description } from "../../types";
import OverviewCard from "../../components/MovieDetail/OverviewCard";

const MovieDetail: React.FC = () => {
  const urlParams = useParams();
  const navigate = useNavigate();

  const { loading, error, data } = useQuery(GET_FILM_INFO, {
    variables: { id: urlParams?.id },
  });

  const goToCharacterDetail = (data: Description) => {
    navigate(`/character-detail/${data?.id}`);
  };

  if (loading) return <Loader />;
  if (error) return <React.Fragment>Error :(</React.Fragment>;

  return (
    <div className="movie-detail">
      <div className="min-h-screen bg-gray-50 py-6 flex flex-col relative overflow-hidden sm:py-12 m-4">
        <div className="px-6">
          <OverviewCard data={data} />
          <ContentBlock title="Director" description={data?.film?.director} />
          <ContentBlock title="Producers" description={data?.film?.producers} />
          <ContentBlock
            title="Characters"
            description={data?.film?.characterConnection.characters}
            clickHandler={goToCharacterDetail}
          />
          {/* <ContentBlock
            title="Planets"
            description={data?.film?.planetConnection.planets}
          />
          <ContentBlock
            title="Species"
            description={data?.film?.speciesConnection.species}
          />
          <ContentBlock
            title="Starships"
            description={data?.film?.starshipConnection.starships}
          />
          <ContentBlock
            title="Vehicles"
            description={data?.film?.vehicleConnection.vehicles}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
