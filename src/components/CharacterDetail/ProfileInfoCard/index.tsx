import React from "react";
import { Person } from "../../../types";

interface Props {
  data: { person: Person };
}

interface Config {
  title: string;
  id: string;
}

const ProfileInfoCard: React.FC<Props> = (props) => {
  const { data } = props;

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

  return (
    <>
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
            {CONFIG.map((config: Config) => {
              return (
                <div key={config?.id} className="grid grid-cols-2">
                  <div className="px-4 py-2 font-semibold">{config.title}</div>
                  {/* @ts-ignore */}
                  <div className="px-4 py-2">{data?.person[config.id]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileInfoCard;
