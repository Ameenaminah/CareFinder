import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SearchForm = () => {
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
            <option value="" disabled hidden >
              Filter By
            </option>
            <option value="name">Name</option>
            <option value="specialization">Specialization</option>
            <option value="state">State</option>
          </select>
        </div>
      </form>
      {/* <button className="button searchButton">Add new Hospital</button> */}
      <Link to="create" className="button">
        Add new Hospital
      </Link>
    </section>
  );
};
