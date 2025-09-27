import { FaList, FaCheck, FaRegCircle } from "react-icons/fa";

function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-6 px-2">
      <button
        onClick={() => setFilter("all")}
        className={`flex items-center gap-1 
          px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base 
          rounded-lg font-medium transition whitespace-nowrap
          ${
            filter === "all"
              ? "bg-black text-white"
              : "bg-gray-200 text-black cursor-pointer hover:bg-black hover:text-white"
          }`}
      >
        <FaList /> All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`flex items-center gap-1 
          px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base 
          rounded-lg font-medium transition whitespace-nowrap
          ${
            filter === "active"
              ? "bg-black text-white"
              : "bg-gray-200 text-black cursor-pointer hover:bg-black hover:text-white"
          }`}
      >
        <FaRegCircle /> Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`flex items-center gap-1 
          px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base 
          rounded-lg font-medium transition whitespace-nowrap
          ${
            filter === "completed"
              ? "bg-black text-white"
              : "bg-gray-200 text-black cursor-pointer hover:bg-black hover:text-white"
          }`}
      >
        <FaCheck /> Completed
      </button>
    </div>
  );
}

export default FilterBar;
