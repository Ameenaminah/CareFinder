import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { HospitalCreatedResponse, HospitalResponse } from "../models";
import {
	addHospital,
	updateHospital,
	deleteHospital,
} from "../state/features/hospital/hospitalSlice";

interface HospitalHooksFunctions {
	addHospital: (newFarmData: HospitalResponse) => void;
	updateHospital: (newFarmSpaceData: HospitalResponse) => void;
	deleteHospital: (newFarmSpaceData: HospitalCreatedResponse) => void;
}

export const useHospitalHooks = (): HospitalHooksFunctions => {
	const dispatch = useDispatch();

	const addHospitalAction = useCallback(
		(newHospital: HospitalResponse) => {
			dispatch(addHospital(newHospital));
		},
		[dispatch],
	);

	const updateHospitalAction = useCallback(
		(updateDataHospital: HospitalResponse) => {
			dispatch(updateHospital(updateDataHospital));
		},
		[dispatch],
	);

	const deleteHospitalAction = useCallback(
		(deleteDataHospital: HospitalCreatedResponse) => {
			dispatch(deleteHospital(deleteDataHospital));
		},
		[dispatch],
	);

	return {
		addHospital: addHospitalAction,
		updateHospital: updateHospitalAction,
		deleteHospital: deleteHospitalAction,
	};
};
