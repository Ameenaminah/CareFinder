import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { HospitalCreatedResponse, HospitalResponse } from "../../../models";

interface HospitalState {
	value: {
		hospitals: HospitalResponse[];
	};
}

const initialState: HospitalState = {
	value: {
		hospitals: [],
	},
};

const hospitalSlice = createSlice({
	name: "hospital",
	initialState,
	reducers: {
		setHospitals: (state, action: PayloadAction<HospitalResponse[]>) => {
			state.value.hospitals = action.payload;
		},
		addHospital: (state, action: PayloadAction<HospitalResponse>) => {
			state.value.hospitals = [action.payload, ...state.value.hospitals];
		},
		updateHospital: (state, action: PayloadAction<HospitalResponse>) => {
			const filteredSpaces = state.value.hospitals.filter((s) => s.id !== action.payload.id);
			state.value.hospitals = [action.payload, ...filteredSpaces];
		},
		deleteHospital: (state, action: PayloadAction<HospitalCreatedResponse>) => {
			const filteredSpaces = state.value.hospitals.filter((s) => s.id !== action.payload.id);
			state.value.hospitals = [...filteredSpaces];
		},
	},
});

export const { setHospitals, addHospital, updateHospital, deleteHospital } = hospitalSlice.actions;
export default hospitalSlice.reducer;
