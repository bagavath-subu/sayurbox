import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useNavigate, useParams } from "react-router-dom";
import { GET_FILM_INFO } from "../../graphql/Queries";
import ContentBlock from "../../components/ContentBlock";
import Loader from "../../components/Loader";
import { Description } from "../../types";

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
          <div className="text-center mt-12">
            <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
              {data?.film?.title}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              Star Wars: Episode {data?.film?.episodeID}
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              Release Date: {data?.film?.releaseDate}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                  Storyline
                </h3>
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  {data?.film?.openingCrawl}
                </p>
              </div>
            </div>
          </div>
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
