import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { GET_CHARACTER_INFO } from "../../graphql/Queries";
import Loader from "../../components/common/Loader";
import OverviewCard from "../../components/CharacterDetail/OverviewCard";
import ProfileInfoCard from "../../components/CharacterDetail/ProfileInfoCard";

const CharacterDetail = () => {
  const urlParams = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
    variables: { id: urlParams?.id },
  });

  if (loading) return <Loader />;
  if (error) return <React.Fragment>Error :(</React.Fragment>;

  return (
    <div className="md:flex no-wrap md:-mx-2 p-4">
      <OverviewCard data={data} />

      <div className="w-full md:w-9/12 text-left">
        <ProfileInfoCard data={data} />

        <div className="my-4"></div>

        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="grid grid-cols-2">
            <div>
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <span className="tracking-wide">Starship</span>
              </div>
              <ul className="list-inside space-y-2">
                {data?.person?.starshipConnection?.starships.map(
                  (starship: { id: string; name: string }) => {
                    return (
                      <li key={starship?.id}>
                        <div className="text-teal-600">{starship?.name}</div>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
            <div>
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                <span className="tracking-wide">Vehicle</span>
              </div>
              <ul className="list-inside space-y-2">
                {data?.person?.vehicleConnection?.vehicles.map(
                  (vehicle: { id: string; name: string }) => {
                    return (
                      <li key={vehicle?.id}>
                        <div className="text-teal-600">{vehicle?.name}</div>
                      </li>
                    );
                  }
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;
