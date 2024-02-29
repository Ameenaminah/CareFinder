import { FaSearch } from "react-icons/fa";

export const SearchForm = () => {
  return (
    <section>
      <form action="" className="searchForm flex">
        <div className="hospitalFilterContainer">
          <select name="hospitalFilter" id="" className="hospitalFilter">
            <option value="2">Name</option>
            <option value="1">Specialization</option>
            <option value="3">3</option>
          </select>
        </div>
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
        <button className="button searchButton">Search</button>
      </form>
    </section>
  );
};
