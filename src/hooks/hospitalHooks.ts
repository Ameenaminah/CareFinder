import { useCallback } from "react";
import { useDispatch } from "react-redux";

import { HospitalResponse } from "../models";
import {
  addHospital,
  updateHospital,
} from "../state/features/hospital/hospitalSlice";

interface HospitalHooksFunctions {
  addHospital: (newFarmData: HospitalResponse) => void;
  updateHospital: (newFarmSpaceData: HospitalResponse) => void;
}

export const useHospitalHooks = (): HospitalHooksFunctions => {
  const dispatch = useDispatch();

  const addHospitalAction = useCallback(
    (newHospital: HospitalResponse) => {
      dispatch(addHospital(newHospital));
    },
    [dispatch]
  );

  const updateHospitalAction = useCallback(
    (updateDataHospital: HospitalResponse) => {
      dispatch(updateHospital(updateDataHospital));
    },
    [dispatch]
  );

  return {
    addHospital: addHospitalAction,
    updateHospital: updateHospitalAction,
  };
};
