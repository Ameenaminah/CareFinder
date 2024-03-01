import { FC } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import { Drawer, Space } from "antd";
import { MdLocationOn, MdEmail, MdOutlineSmartphone } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import { useInjectedService } from "../../hooks";
import { Spinner } from "../../components";

interface Props {}
export const HospitalDetails: FC<Props> = () => {
  const { id } = useParams();
  const { hospitalService } = useInjectedService();

  const { data: hospital, isFetching } = useQuery({
    queryKey: ["hospital"],
    queryFn: async () => {
      return await hospitalService.getHospital(id);
    },
  });

  return (
    <Drawer
      placement="right"
      width={500}
      closable={false}
      open
      title={
        <Space className="detailsHeader">
          <Link className="closeContainer" to="..">
            <MdArrowBackIosNew size={20} />
            <p>Back</p>
          </Link>
          <Link to={"edit"}>
            <button className="button editButton">Edit Hospital</button>
          </Link>
        </Space>
      }
      className="hospital-details-container"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      {!isFetching && hospital ? (
        <div className="hospitalContent flex">
          <div className="hospitalImage">
            <img src={hospital.image} alt="" width={50} />
          </div>
          <div>
            <h2>{hospital?.name}</h2>
            <div className="flex hospitalContent">
              <h4>{hospital?.specialization}</h4>
              <h4>|</h4>
              <h4>{hospital.ownership}</h4>
            </div>
            <div className=" hospitalContactDetails">
              <div className="flex ">
                <MdLocationOn size={20} />
                <p>{hospital.addresses[0]?.addressLine}</p>
              </div>
              <div className="flex">
                <MdOutlineSmartphone size={20} />
                <p>{hospital.phoneNumber}</p>
              </div>
              <div className="flex">
                <MdEmail size={20} />
                <p>{hospital.email}</p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Spinner />
      )}
    </Drawer>
  );
};
