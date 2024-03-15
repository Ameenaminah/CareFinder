import { Drawer, Space, message } from "antd";
import { MdArrowBackIosNew } from "react-icons/md";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { AuthorizedRoute, Input, Spinner } from "../../components";
import { useHospitalHooks, useInjectedService } from "../../hooks";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { AddressValues, addressSchema } from "./validation";
import { CreateAddressRequest } from "../../models";

import { useCallback } from "react";

export const CreateAddress = () => {
	const { addHospital } = useHospitalHooks();
	const { addressService } = useInjectedService();
	const navigate = useNavigate();
	const location = useLocation();
	const hospital = location.state;
	const { id } = useParams();

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
				hospitalId: Number(id),
			};

			const newAddressData = await addressService.createAddress(addressInput);

			if (!newAddressData) {
				message.error("Unable to create hospital");
				return;
			}
			message.success("Hospital created");
			addHospital({
				...hospital,
				addresses: [{ ...newAddressData }],
			});
			navigate("..");
		},
		[id, addressService, navigate, addHospital, hospital],
	);

	return (
		<AuthorizedRoute>
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
						<div className="button-container">
							<button className="button" type="submit">
								Create Address
							</button>
						</div>
					</form>
				) : (
					<Spinner />
				)}
			</Drawer>
		</AuthorizedRoute>
	);
};
