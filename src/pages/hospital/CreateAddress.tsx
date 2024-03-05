import { Drawer, Space } from "antd";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input, Spinner } from "../../components";
import { useInjectedService } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddressValues, addressSchema } from "./validation";
import { CreateAddressRequest } from "../../models";

import { useCallback } from "react";

export const CreateAddress = () => {
  const { addressService } = useInjectedService();
  const location = useLocation();
  const id = location.state.newHospitalData;

  const navigate = useNavigate();

  const defaultValue = {
    addressLine: "",
    state: "",
    postalCode: "",
    hospitalId: 0,
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<AddressValues>({
    defaultValues: defaultValue,
    resolver: yupResolver(addressSchema),
    mode: "onBlur",
  });

  const handleCreateAddressButton = useCallback(
    async (formData: AddressValues) => {
      const addressInput: CreateAddressRequest = {
        addressLine: formData.addressLine,
        state: formData.state,
        postalCode: formData.postalCode,
        hospitalId: id,
      };

      const newAddressData = await addressService.createAddress(addressInput);

      if (!newAddressData) {
        return;
      }
      navigate("hospitals");
    },
    [id, addressService, navigate]
  );

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
        </Space>
      }
      className="hospital-details-container"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      {!isSubmitting ? (
        <form onSubmit={handleSubmit(handleCreateAddressButton)}>
          <Input
            name="addressLine"
            label="Address Line"
            register={register}
            error={errors.addressLine?.message}
            type="text"
          />
          <Input
            name="state"
            label="state"
            register={register}
            error={errors.state?.message}
            type="text"
          />
          <Input
            name="postalCode"
            label="Postal Code"
            register={register}
            error={errors.postalCode?.message}
            type="text"
          />
          <Input
            name="state"
            label="state"
            register={register}
            error={errors.state?.message}
            type="text"
          />
          <button className="button editButton" type="submit">
            Create Address
          </button>
        </form>
      ) : (
        <Spinner />
      )}
    </Drawer>
  );
};
