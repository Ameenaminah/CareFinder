import { FC, useCallback } from "react";
import { Col, Drawer, Row, Space } from "antd";
import { Input } from "../../components";
import { useInjectedService } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HospitalValues, hospitalSchema } from "./validation";
import { CreateHospitalRequest } from "../../models";
import { LabelContainer } from "../../components/input/LabelContainer";
import { Link } from "react-router-dom";
import { MdArrowBackIosNew } from "react-icons/md";
import { FaTimes } from "react-icons/fa";
import "./hospital.css";

interface HospitalFormProps {
  isEditMode?: boolean;
}

export const HospitalForm: FC<HospitalFormProps> = ({ isEditMode }) => {
  const { hospitalService } = useInjectedService();
  const defaultValue = {
    name: "",
    specialization: "",
    ownership: "",
    email: "",
    phoneNumber: "",
    website: "",
    about: "",
    image: "",
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<HospitalValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(hospitalSchema),
    mode: "onBlur",
  });

  const handleAddHospital = useCallback(async (formData) => {
    console.log(formData, "here");

    const hospitalInput: CreateHospitalRequest = {
      name: formData.name,
      specialization: formData.specialization,
      ownership: formData.ownership,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      website: formData.website,
      about: formData.about,
      image: formData.image,
    };
    console.log(hospitalInput, "here");

    const newHospitalData = await hospitalService.createHospital(hospitalInput);

    if (!newHospitalData) {
      return;
    }
  }, []);

  return (
    <>
      <Drawer
        closable={false}
        width={720}
        open
        styles={{
          body: {
            paddingBottom: 80,
          },
        }}
        title={
          <div className="detailsHeader">
            <Link className="closeContainer" to="..">
              <div className="close-form">
                <FaTimes size={20} />
              </div>
              <p>{isEditMode ? "Edit a Hospital" : "Create a Hospital"}</p>
            </Link>

            <button
              className="button editButton"
              type="submit"
              onClick={handleSubmit(handleAddHospital)}
            >
              Submit
            </button>
          </div>
        }
        className="hospital-details-container"
        style={{ backgroundColor: "var(--bg-color)" }}
      >
        <form onSubmit={handleSubmit(handleAddHospital)}>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                name="name"
                label="Hospital Name"
                register={register}
                error={errors.name?.message}
                type="text"
              />
            </Col>
            <Col span={12}>
              <Input
                name="phoneNumber"
                label="Phone Number"
                register={register}
                error={errors.phoneNumber?.message}
                type="text"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                name="website"
                label="Website"
                register={register}
                error={errors.website?.message}
                type="url"
              />
            </Col>
            <Col span={12}>
              <Input
                name="email"
                label="Email Address"
                register={register}
                error={errors.email?.message}
                type="text"
              />
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Input
                name="specialization"
                label="Specialization"
                register={register}
                error={errors.specialization?.message}
                type="text"
              />
            </Col>
            <Col span={12}>
              <Input
                name="image"
                label="Image"
                register={register}
                error={errors.image?.message}
                type="file"
              />
            </Col>
          </Row>
          <div className="hospitalFilterContainer">
            <select {...register("ownership")} className="hospitalFilter">
              <option value="other">other</option>
              <option value="private">Private</option>
              <option value="public">Public</option>
            </select>
          </div>
          <textarea
            id="about"
            cols={30}
            rows={10}
            placeholder="Type your Markdown content here..."
            style={{ marginTop: "2em" }}
            {...register("about")}
          />
          {/* <button type="submit">Submit</button> */}
        </form>
      </Drawer>
    </>
  );
};
