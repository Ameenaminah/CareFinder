import { FC } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useParams } from "react-router-dom";

import { MdLocationOn, MdEmail, MdOutlineSmartphone } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { useInjectedService } from "../../hooks";

interface Props {}
export const HospitalDetails: FC<Props> = () => {
  const { id } = useParams();
  const { hospitalService } = useInjectedService();

  const { data: hospital, isLoading } = useQuery({
    queryKey: ["hospital"],
    queryFn: async () => {
      return await hospitalService.getHospital(id);
    },
  });

  return (
    <>
      {!isLoading ? (
        <div className="hospitalDetailsOverlay">
          <div className="detailsHeader">
            <Link className="closeContainer" to="..">
              <MdArrowBackIosNew size={20} />
              <p>Back</p>
            </Link>
            <button className="button editButton">Edit Hospital</button>
          </div>
          <div className="hospitalContent flex">
            <div className="hospitalImage">
              <img src={hospital?.image} alt="" width={50} />
            </div>
            <div>
              <h2>{hospital?.name}</h2>
              <div className="flex hospitalContent">
                <h4>{hospital?.specialization}</h4>
                <h4>|</h4>
                <h4>{hospital?.ownership}</h4>
              </div>
              <div className=" hospitalContactDetails">
                {/* <div className="flex ">
                  <MdLocationOn size={20} />
                  <h3>{hospital?.addresses[0]?.addressLine}</h3>
                </div> */}
                <div className="flex">
                  <MdOutlineSmartphone size={20} />
                  <h5>{hospital?.phoneNumber}</h5>
                </div>
                <div className="flex">
                  <MdEmail size={20} />
                  <h5>{hospital?.email}</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </>
  );
};
