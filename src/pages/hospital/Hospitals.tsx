import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";

import "./hospital.css";
import { useInjectedService, useSidebar } from "../../hooks";
import { SearchForm } from ".";
import { Spinner } from "../../components";
import { columns } from "../../data/columns";
import { useDispatch } from "react-redux";
import { setHospitals } from "../../state/features/hospital/hospitalSlice";

export const Hospitals = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSidebar();
  const { hospitalService } = useInjectedService();

  const {
    isLoading,
    error,
    data: hospitals,
  } = useQuery({
    queryKey: ["hospitals"],
    queryFn: async () => {
      return await hospitalService.getHospitals();
    },
  });
  useEffect(() => {
    if (hospitals) {
      dispatch(setHospitals(hospitals.items));
      console.log("here");
    }
  }, [dispatch, hospitals]);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = useCallback((newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  }, []);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };
  const hasSelected = selectedRowKeys.length > 0;

  return (
    <>
      <main className={isSidebarOpen ? "space-toggle " : ""}>
        <div className="hospitalContainer">
          <SearchForm />
          <hr className="divider" />
          {error && <p>{error.message}</p>}
          {!isLoading && hospitals?.items ? (
            <div className="hospitalCardsContainer">
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
              </span>
              <Table
                rowSelection={rowSelection}
                columns={columns}
                dataSource={hospitals?.items.map((hospital) => ({
                  ...hospital,
                  key: hospital.id,
                }))}
              />
            </div>
          ) : (
            <div className="spinner-container">
              <Spinner />
            </div>
          )}
        </div>
      </main>
      <Outlet />
    </>
  );
};
