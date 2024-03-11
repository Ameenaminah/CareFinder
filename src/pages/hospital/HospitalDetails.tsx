import { FC, useCallback, useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Avatar, Drawer, Space, message } from "antd";
import { MdLocationOn, MdEmail, MdOutlineSmartphone } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import {
  useAppSelector,
  useInjectedService,
  useHospitalHooks,
} from "../../hooks";
import {
  ConfirmDeleteHospital,
  HospitalError,
  Spinner,
} from "../../components";
import { getInitials } from "../../helpers";
import { MdEdit } from "react-icons/md";
import { RiDeleteBin6Fill } from "react-icons/ri";

interface Props {}
export const HospitalDetails: FC<Props> = () => {
  const { id } = useParams();
  const { hospitalService } = useInjectedService();
  const { isAuthenticated } = useAppSelector((s) => s.user);
  const { deleteHospital } = useHospitalHooks();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const toggleModal = () => {
    setOpen(!open);
  };

  const { data: hospital, isFetching } = useQuery({
    queryKey: ["hospital"],
    queryFn: async () => {
      return await hospitalService.getHospital(Number(id));
    },
  });
  const hospitalDoesNotExist = !isFetching && !hospital;

  const deleteHospitalButton = useCallback(async () => {
    await hospitalService.deleteHospital(Number(id));
    message.success("Hospital Deleted");
    deleteHospital({ id: Number(id) });
    navigate("/hospitals");
  }, [hospitalService, deleteHospital, navigate, id]);

  return (
    <Drawer
      placement="right"
      width={500}
      closable={false}
      open
      title={
        hospitalDoesNotExist ? (
          false
        ) : (
          <Space className="detailsHeader">
            <Link className="closeContainer" to=".." title=" Edit Hospital">
              <MdArrowBackIosNew size={20} />
              <p>Back</p>
            </Link>
            {isAuthenticated && (
              <div className="flex">
                <Link to={"edit"} className="button hospital-icon-button">
                  <MdEdit size={20} />
                </Link>
                <button
                  className="button hospital-icon-button"
                  style={{ backgroundColor: "#EB5757" }}
                  title="Delete Hospital"
                  onClick={toggleModal}
                >
                  <RiDeleteBin6Fill size={20} />
                </button>
                {open && (
                  <ConfirmDeleteHospital
                    open={open}
                    onConfirm={deleteHospitalButton}
                    hideModal={toggleModal}
                  />
                )}
              </div>
            )}
          </Space>
        )
      }
      className="hospital-details-container"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      {!isFetching && hospital ? (
        <>
          <div className="hospitalContent ">
            <div className="hospitalContent flex">
              <div className="hospitalImage">
                <Avatar className="avatar">
                  {getInitials(hospital?.name)}
                </Avatar>
              </div>
              <div>
                <h2 className="hospital-name">{hospital?.name}</h2>
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
                    <p>
                      <a href={`tel:+${hospital.phoneNumber}`}>
                        {hospital.phoneNumber}
                      </a>
                    </p>
                  </div>
                  <div className="flex">
                    <MdEmail size={20} />
                    <p>
                      <a href={`mailto:${hospital.email}`}>{hospital.email}</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="about">{hospital.about}</p>
          </div>
        </>
      ) : hospitalDoesNotExist ? (
        <HospitalError />
      ) : (
        <Spinner />
      )}
    </Drawer>
  );
};
