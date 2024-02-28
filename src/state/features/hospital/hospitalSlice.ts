import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { HospitalResponse } from "../../../models";

interface HospitalState {
  value: {
    items: HospitalResponse[];
  };
}

const initialState: HospitalState = {
  value: {
    items: [],
  },
};

const hospitalSlice = createSlice({
  name: "hospital",
  initialState,
  reducers: {
    setHospitalItems: (state, action: PayloadAction<HospitalResponse[]>) => {
      state.value.items = action.payload;
    },
    addHospital: (state, action: PayloadAction<HospitalResponse>) => {
      state.value.items = [action.payload, ...state.value.items];
    },
    updateHospital: (state, action: PayloadAction<HospitalResponse>) => {
      const filteredSpaces = state.value.items.filter(
        (s) => s.id !== action.payload.id
      );
      state.value.items = [action.payload, ...filteredSpaces];
    },
  },
});

export const { setHospitalItems, addHospital, updateHospital } =
  hospitalSlice.actions;
export default hospitalSlice.reducer;
