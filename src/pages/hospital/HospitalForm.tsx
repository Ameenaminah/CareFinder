import { FC, useCallback } from "react";
import { Drawer } from "antd";
import { Input, Spinner } from "../../components";
import { useInjectedService } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { HospitalValues, hospitalSchema } from "./validation";
import { CreateHospitalRequest } from "../../models";
import { LabelContainer } from "../../components/input/LabelContainer";
import { Link, useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import "./hospital.css";

interface HospitalFormProps {
  isEditMode?: boolean;
}

export const HospitalForm: FC<HospitalFormProps> = ({ isEditMode }) => {
  const { hospitalService } = useInjectedService();
  const navigate = useNavigate();
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
    formState: { errors, isSubmitting },
  } = useForm<HospitalValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(hospitalSchema),
    mode: "onBlur",
  });

  const handleAddHospital = useCallback(
    async (formData: HospitalValues) => {
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

      const newHospitalData = await hospitalService.createHospital(
        hospitalInput
      );

      if (!newHospitalData) {
        return;
      }
      navigate(`../${newHospitalData}/addresses/create`, {
        state: { newHospitalData },
        relative: "path",
      });
    },
    [hospitalService, navigate]
  );

  return (
    <Drawer
      closable={false}
      width={500}
      open
      title={
        <div className="detailsHeader">
          <div className="closeContainer">
            <Link className="close-form" to="..">
              <FaTimes size={20} />
            </Link>
            <p>{isEditMode ? "Edit a Hospital" : "Create a Hospital"}</p>
          </div>
        </div>
      }
      className="hospital-details-container"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      {!isSubmitting ? (
        <form onSubmit={handleSubmit(handleAddHospital)}>
          <Input
            name="name"
            label="Hospital Name"
            register={register}
            error={errors.name?.message}
            type="text"
          />
          <Input
            name="phoneNumber"
            label="Phone Number"
            register={register}
            error={errors.phoneNumber?.message}
            type="text"
          />
          <Input
            name="website"
            label="Website"
            register={register}
            error={errors.website?.message}
            type="url"
          />
          <Input
            name="email"
            label="Email Address"
            register={register}
            error={errors.email?.message}
            type="text"
          />
          <Input
            name="specialization"
            label="Specialization"
            register={register}
            error={errors.specialization?.message}
            type="text"
          />
          <Input
            name="image"
            label="Image"
            register={register}
            error={errors.image?.message}
            type="text"
          />
          <LabelContainer
            name="ownership"
            label="Ownership"
            error={errors.image?.message}
          >
            <div className="hospitalFilterContainer ownershipContainer ">
              <select {...register("ownership")} className="hospitalFilter">
                <option value="" disabled hidden>
                  Select a type
                </option>
                <option value="private">Private</option>
                <option value="public">Public</option>
              </select>
            </div>
          </LabelContainer>
          <LabelContainer
            name="about"
            label="About"
            error={errors.about?.message}
          >
            <textarea
              id="about"
              placeholder="Type your Markdown content here..."
              {...register("about")}
              rows={5}
            />
          </LabelContainer>
          <div className="button-container">
            <button
              className="button create-button"
              type="submit"
              onClick={handleSubmit(handleAddHospital)}
            >
              {isEditMode ? "Edit " : "Create"}
            </button>
          </div>
        </form>
      ) : (
        <Spinner />
      )}
    </Drawer>
  );
};
