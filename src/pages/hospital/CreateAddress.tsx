import { Drawer, Space } from "antd";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Input, Spinner } from "../../components";
import {
  useAppSelector,
  useHospitalHooks,
  useInjectedService,
} from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddressValues, addressSchema } from "./validation";
import { CreateAddressRequest, HospitalResponse } from "../../models";

import { useCallback, useEffect, useState } from "react";

export const CreateAddress = () => {
  const [selectedHospital, setSelectedHospital] = useState<HospitalResponse>();
  const { addHospital } = useHospitalHooks();
  const { addressService } = useInjectedService();
  const { id } = useParams();
  const {
    value: { hospitals },
  } = useAppSelector((s) => s.hospital);

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

  useEffect(() => {
    const selectedHospital = hospitals.find(
      (hospital) => hospital.id === Number(id)
    );
    setSelectedHospital(selectedHospital);
  }, [hospitals, id]);

  const handleCreateAddressButton = useCallback(
    async (formData: AddressValues) => {
      const addressInput: CreateAddressRequest = {
        addressLine: formData.addressLine,
        state: formData.state,
        postalCode: formData.postalCode,
        hospitalId: Number(id),
      };

      const newAddressData = await addressService.createAddress(addressInput);

      if (!newAddressData) {
        return;
      }

      const updatedHospital = {
        id: newAddressData.hospitalId,
        ...selectedHospital,
        addresses: [{ ...newAddressData }],
        
      };
    
      addHospital(updatedHospital);
      navigate("..");
    },
    [id, addressService, navigate, addHospital, selectedHospital]
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
