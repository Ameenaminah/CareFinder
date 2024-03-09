import React, { useCallback, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Space, Table } from "antd";

import "./hospital.css";
import { useAppSelector, useInjectedService, useSidebar } from "../../hooks";
import { SearchForm } from ".";
import { Spinner } from "../../components";
import { columns } from "../../data/columns";
import { useDispatch } from "react-redux";
import { setHospitals } from "../../state/features/hospital/hospitalSlice";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { GrNotes } from "react-icons/gr";

export const Hospitals = () => {
  const dispatch = useDispatch();
  const { isSidebarOpen } = useSidebar();
  const { hospitalService } = useInjectedService();
  const {
    value: { hospitals },
  } = useAppSelector((s) => s.hospital);
  const { isLoggedIn } = useAppSelector((s) => s.user);

  const { isLoading, error, data } = useQuery({
    queryKey: ["hospitals"],
    queryFn: async () => {
      return await hospitalService.getHospitals();
    },
  });

  useEffect(() => {
    if (data) {
      dispatch(setHospitals(data));
    }
  }, [dispatch, data]);

  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const onSelectChange = useCallback((newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  }, []);

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const hasSelected = selectedRowKeys.length > 0;

  const deleteHospitalButton = useCallback(
    async (hospitalId: number) => {
      return await hospitalService.deleteHospital(hospitalId);
    },
    [hospitalService]
  );

  return (
    <>
      <main className={isSidebarOpen ? "space-toggle " : ""}>
        <div className="hospitalContainer">
          <SearchForm />
          <hr className="divider" />
          {error && <p>{error.message}</p>}
          {!isLoading && hospitals ? (
            <div className="hospital-table-container">
              <span style={{ marginLeft: 8 }}>
                {hasSelected ? `Selected ${selectedRowKeys.length} items` : ""}
              </span>
              <Table
                pagination={{ pageSize: 8, position: ["bottomRight"] }}
                rowSelection={rowSelection}
                // columns={[columns, deleteAction]}
                columns={[
                  ...columns,
                  {
                    title: "Action",
                    dataIndex: "id",
                    key: "x",
                    render: (id) => (
                      <Space>
                        <Link
                          title="Hospital Details"
                          to={`${id}`}
                          className="button hospital-icon-button"
                        >
                          <GrNotes
                            size={20}
                            // color="#96999C"
                            // style={{ borderColor: "#EB5757" }}
                          />
                        </Link>
                        {isLoggedIn && (
                          <button
                            title="Delete Hospital"
                            className="button hospital-icon-button"
                            // style={{ borderColor: "#EB5757" }}
                            onClick={() => deleteHospitalButton(id)}
                          >
                            <RiDeleteBin6Fill size={20} />
                          </button>
                        )}
                      </Space>
                    ),
                  },
                ]}
                dataSource={hospitals.map((hospital) => ({
                  ...hospital,
                  key: hospital.id,
                }))}
                size="small"
                className="custom-table"
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
