import { CgExport } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { TbMailShare } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAppSelector, useInjectedService } from "../../hooks";
import { FC, useCallback } from "react";
import { message } from "antd";

interface Props {
	handleSearch: (value: string) => void;
	handleFilterChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const SearchForm: FC<Props> = ({ handleSearch, handleFilterChange }) => {
	const { hospitalService } = useInjectedService();
	const { isAuthenticated } = useAppSelector((s) => s.user);

	const handleExportFileButton = useCallback(async () => {
		const exportResponse = await hospitalService.exportHospitals();

		if (!exportResponse) {
			message.error("Unable to export Hospitals");
			return;
		}
		message.success("Hospitals list exported");
		const url = window.URL.createObjectURL(new Blob([exportResponse]));
		const link = document.createElement("a");
		link.href = url;
		link.setAttribute("download", "hospitals.csv");
		document.body.appendChild(link);
		link.click();

		document.body.removeChild(link);
	}, [hospitalService]);

	const handleShareFileButton = useCallback(async () => {
		const exportResponse = await hospitalService.shareHospitals();

		if (!exportResponse) {
			message.error("Unable to export Hospitals");
			return;
		}
		message.success("Hospitals list exported");
	}, [hospitalService]);

	return (
		<section className="search-form-container">
			<form action="" className="searchForm ">
				<div className="searchInputContainer">
					<FaSearch color="grey" size={15} />
					<input
						type="text"
						name=""
						id=""
						placeholder="enter search item"
						className="searchInput"
						onChange={(e) => {
							const { value } = e.target;
							handleSearch(value);
						}}
					/>
				</div>
				<div className="hospitalFilterContainer">
					<select className="hospitalFilter" onChange={handleFilterChange}>
						<option value="" disabled hidden>
							Filter By
						</option>
						<option value="name">Name</option>
						<option value="specialization">Specialization</option>
						<option value="state">State</option>
					</select>
				</div>
			</form>
			<div className="flex">
				<button
					title="Export Hospitals"
					onClick={handleExportFileButton}
					className="button hospital-icon-button"
				>
					<CgExport size={20} />
				</button>
				<button
					title="Share via mail"
					onClick={handleShareFileButton}
					className="button hospital-icon-button"
				>
					<TbMailShare size={20} />
				</button>
				{isAuthenticated && (
					<Link to="create" className="button">
						Add new Hospital
					</Link>
				)}
			</div>
		</section>
	);
};
