import React from "react";
import { Film } from "../../../types";

interface Props {
  data: { film: Film };
}

const OverviewCard: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <>
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
    </>
  );
};

export default OverviewCard;
