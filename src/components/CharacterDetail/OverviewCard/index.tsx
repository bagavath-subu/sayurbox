import React from "react";
import { Person } from "../../../types";

interface Props {
  data: { person: Person };
}

const OverviewCard: React.FC<Props> = (props) => {
  const { data } = props;
  return (
    <>
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
      </div>
    </>
  );
};

export default OverviewCard;
