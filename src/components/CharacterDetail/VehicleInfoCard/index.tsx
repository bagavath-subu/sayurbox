import React from "react";
import { Person, Starship, Vehicle } from "../../../types";

interface Props {
  data: { person: Person };
}

const VehicleInfoCard: React.FC<Props> = (props) => {
  const { data } = props;

  return (
    <>
      <div className="bg-white p-3 shadow-sm rounded-sm">
        <div className="grid grid-cols-2">
          <div>
            <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
              <span className="tracking-wide">Starship</span>
            </div>
            <ul className="list-inside space-y-2">
              {data?.person?.starshipConnection?.starships.map(
                (starship: Starship) => {
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
                (vehicle: Vehicle) => {
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
    </>
  );
};

export default VehicleInfoCard;
