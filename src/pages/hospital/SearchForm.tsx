import { FaSearch } from "react-icons/fa";
import { SelectInput } from "../../components";

export const SearchForm = () => {
  return (
    <section>
      <form action="" className="searchForm flex">
        <SelectInput
          placeholder="Filter By"
          options={[
            { value: "name", label: "Name" },
            { value: "specialization", label: "Specialization" },
            { value: "state", label: "State" },
          ]}
        />
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
