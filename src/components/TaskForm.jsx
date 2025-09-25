import { FaPlus } from "react-icons/fa";

function TaskForm({ input, setInput, addTask }) {
  return (
    <form onSubmit={addTask} className="flex gap-3 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Tambah tugas..."
        className="flex-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
      />
      <button
        type="submit"
        className="flex items-center gap-1 px-4 py-2 bg-black cursor-pointer text-white rounded-lg hover:bg-gray-800 transition"
        title="Tambah"
      >
        <FaPlus />
      </button>
    </form>
  );
}

export default TaskForm;
