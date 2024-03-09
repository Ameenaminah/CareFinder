import { CgExport } from "react-icons/cg";
import { FaSearch } from "react-icons/fa";
import { TbMailShare } from "react-icons/tb";
import { Link } from "react-router-dom";
import { useAppSelector, useInjectedService } from "../../hooks";
import { useCallback } from "react";

export const SearchForm = () => {
  const { hospitalService } = useInjectedService();
  const { isLoggedIn } = useAppSelector((s) => s.user);

  const handleExportFileButton = useCallback(async () => {
    const exportResponse = await hospitalService.exportHospitals();

    if (!exportResponse) {
      return;
    }

    const url = window.URL.createObjectURL(new Blob([exportResponse]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "hospitals.csv");
    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
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
          />
        </div>
        <div className="hospitalFilterContainer">
          <select className="hospitalFilter">
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
          className="button"
        >
          <CgExport size={20} />
        </button>
        <Link to="create" title="Share via mail" className="button">
          <TbMailShare size={20} />
        </Link>
        {isLoggedIn && (
          <Link to="create" className="button">
            Add new Hospital
          </Link>
        )}
      </div>
    </section>
  );
};
