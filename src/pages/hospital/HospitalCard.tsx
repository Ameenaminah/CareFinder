import { FC } from "react";
import { HospitalResponse } from "../../models";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

interface HospitalCardProps {
  hospital: HospitalResponse;
}

export const HospitalCard: FC<HospitalCardProps> = ({ hospital }) => {
  return (
    <Link to={hospital.id}>
      <div className="hospitalCard">
        <h3 className="hospitalName">{hospital.name}</h3>
        <div>
          <div className="flex">
            <IoLocation color="var(--small-text)" />
            <p className="hospitalLocation">
              {hospital.addresses[0].addressLine}
            </p>
          </div>
          <p className="hospitalOwnership">{hospital.ownership}</p>
        </div>
      </div>
    </Link>
  );
};
