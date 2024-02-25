import { FC } from "react";
import { HospitalResponse } from "../../models";

interface HospitalCardProps {
  hospital: HospitalResponse;
}

export const HospitalCard: FC<HospitalCardProps> = ({ hospital }) => {
  return (
    <div className="hospitalCard">
      <h3 className="hospitalName">{hospital.name}</h3>
      <div>
        <p className="hospitalLocation">{hospital.location}</p>
        <p className="hospitalOwnership">{hospital.ownership}</p>
      </div>
    </div>
  );
};
