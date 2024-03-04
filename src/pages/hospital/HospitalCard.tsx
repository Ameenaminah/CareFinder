import { FC } from "react";
import { HospitalResponse } from "../../models";
import { IoLocation } from "react-icons/io5";
import { Link } from "react-router-dom";

interface HospitalCardProps {
  hospital: HospitalResponse;
}

export const HospitalCard: FC<HospitalCardProps> = ({ hospital }) => {
  const { id, name, addresses, ownership } = hospital;
 
  return (
    <Link to={`${id}`}>
      <div className="hospitalCard">
        <h3 className="hospitalName">{name}</h3>
        <div>
          <div className="flex">
            <IoLocation color="var(--small-text)" />
            {/* {addresses ? (
              <p className="hospitalLocation">{addresses[0].addressLine}</p>
            ) : (
              ""
            )} */}
          </div>
          <p className="hospitalOwnership">{ownership}</p>
        </div>
      </div>
    </Link>
  );
};
