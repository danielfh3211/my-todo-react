import { FaList, FaCheck, FaRegCircle } from "react-icons/fa";

function FilterBar({ filter, setFilter }) {
  return (
    <div className="flex justify-center gap-3 mb-6">
      <button
        onClick={() => setFilter("all")}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition ${
          filter === "all"
            ? "bg-black text-white"
            : "bg-gray-200 text-black cursor-pointer hover:bg-black hover:text-white"
        }`}
      >
        <FaList /> All
      </button>
      <button
        onClick={() => setFilter("active")}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition ${
          filter === "active"
            ? "bg-black text-white"
            : "bg-gray-200 text-black cursor-pointer hover:bg-black hover:text-white"
        }`}
      >
        <FaRegCircle /> Active
      </button>
      <button
        onClick={() => setFilter("completed")}
        className={`flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition ${
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
