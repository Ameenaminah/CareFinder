import React, { useCallback, useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Table } from "antd";

import "./hospital.css";
import { useAppSelector, useInjectedService, useSidebar } from "../../hooks";
import { SearchForm } from ".";
import { Spinner } from "../../components";
import { columns } from "../../data/columns";
import { useDispatch } from "react-redux";
import { setHospitals } from "../../state/features/hospital/hospitalSlice";
import { HospitalResponse } from "../../models";

export const Hospitals = () => {
	const dispatch = useDispatch();
	const { isSidebarOpen } = useSidebar();
	const { hospitalService } = useInjectedService();
	const {
		value: { hospitals },
	} = useAppSelector((s) => s.hospital);

	const [filteredHospitals, setFilteredHospitals] = useState<HospitalResponse[]>([]);
	const [searchValue, setSearchValue] = useState("");
	const [filterBy, setFilterBy] = useState("");

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

	const handleFilterChange = useCallback((e: React.ChangeEvent<HTMLSelectElement>) => {
		setFilterBy(e.target.value);
		setSearchValue("");
	}, []);

	const handleFilter = useCallback(
		(filterBy: string, searchValue: string) => {
			const filtered = hospitals.filter((hospital) => {
				if (filterBy === "name") {
					return hospital.name.toLowerCase().includes(searchValue.toLowerCase());
				} else if (filterBy === "specialization") {
					return hospital.specialization.toLowerCase().includes(searchValue.toLowerCase());
				} else if (filterBy === "state") {
					return hospital.addresses[0]?.state.toLowerCase().includes(searchValue.toLowerCase());
				}
				return true;
			});
			setFilteredHospitals(filtered);
		},
		[hospitals],
	);
	const handleSearch = useCallback(
		(value: string) => {
			setSearchValue(value);
			handleFilter(filterBy, value);
		},
		[filterBy, handleFilter],
	);

	useEffect(() => {
		handleFilter(filterBy, searchValue);
	}, [filterBy, searchValue, handleFilter]);

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
					<SearchForm handleSearch={handleSearch} handleFilterChange={handleFilterChange} />
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
								columns={columns}
								dataSource={filteredHospitals.map((hospital) => ({
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
