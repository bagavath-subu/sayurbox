import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";
import { GET_CHARACTER_INFO } from "../../graphql/Queries";
import Loader from "../../components/Loader";

const CharacterDetail = () => {
  const urlParams = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTER_INFO, {
    variables: { id: urlParams?.id },
  });

  const CONFIG = [
    {
      title: "Name",
      id: "name",
    },
    {
      title: "Birth Year",
      id: "birthYear",
    },
    {
      title: "Eye Color",
      id: "eyeColor",
    },
    {
      title: "Gender",
      id: "gender",
    },
    {
      title: "Hair Color",
      id: "hairColor",
    },
    {
      title: "Mass",
      id: "mass",
    },
    {
      title: "Skin Color",
      id: "skinColor",
    },
  ];

  if (loading) return <Loader />;
  if (error) return <React.Fragment>Error :(</React.Fragment>;

  return (
    <div className="md:flex no-wrap md:-mx-2 p-4">
      <div className="w-full md:w-3/12 md:mx-2">
        <div className="bg-gray-50 p-3">
          <div className="image overflow-hidden">
            <img
              className="h-auto w-full mx-auto"
              src={`https://avatars.dicebear.com/api/initials/${data?.person?.name}.svg`}
              alt=""
            />
          </div>
          <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
            {data?.person?.name}
          </h1>

          <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
            <li className="flex items-center py-3">
              <span>Species Name</span>
              <span className="ml-auto">
                <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                  {data?.person?.species?.name ?? "Unknown"}
                </span>
              </span>
            </li>
          </ul>
        </div>

        <div className="my-4"></div>
      </div>

      <div className="w-full md:w-9/12 text-left">
        <div className="bg-white p-3 shadow-sm rounded-sm">
          <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
            <span className="text-green-700">
              <svg
                className="h-5"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </span>
            <span className="tracking-wide">About</span>
          </div>
          <div className="text-gray-700">
            <div className="grid md:grid-cols-2 text-sm">
              {CONFIG.map((config) => {
                return (
                  <div key={config?.id} className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      {config.title}
                    </div>
                    <div className="px-4 py-2">{data.person[config.id]}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

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
