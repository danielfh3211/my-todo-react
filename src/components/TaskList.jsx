import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

function TaskList({
  tasks,
  editingId,
  editText,
  setEditText,
  startEdit,
  saveEdit,
  toggleTask,
  handleDeleteClick,
}) {
  const handleSave = (id) => {
    if (!editText.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Teks tugas tidak boleh kosong!",
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
      });
      return;
    }
    saveEdit(id);
  };

  return (
    <ul className="space-y-3 pt-1">
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center py-4">Belum ada tugas</p>
      ) : (
        tasks.map((task) => (
          <li
            key={task.id}
            className="flex items-center justify-between bg-gray-50 p-3 rounded-lg shadow-sm"
          >
            <div className="flex items-center gap-3 flex-1">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleTask(task.id)}
                className="w-5 h-5 accent-black cursor-pointer"
              />

              {editingId === task.id ? (
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="flex-1 p-2 border border-gray-300 rounded"
                />
              ) : (
                <span
                  className={`flex-1 text-lg ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  {task.text}
                </span>
              )}
            </div>

            <div className="flex gap-2 ml-2">
              {editingId === task.id ? (
                <button
                  onClick={() => handleSave(task.id)}
                  className="p-2 bg-black cursor-pointer text-white rounded hover:bg-gray-800 transition"
                  title="Save"
                >
                  <FaSave />
                </button>
              ) : (
                <button
                  onClick={() => startEdit(task)}
                  className="p-2 bg-black cursor-pointer text-white rounded hover:bg-gray-800 transition"
                  title="Edit"
                >
                  <FaEdit />
                </button>
              )}
              <button
                onClick={() => handleDeleteClick(task.id)}
                className="p-2 bg-black cursor-pointer text-white rounded hover:bg-red-600 transition"
                title="Hapus"
              >
                <FaTrash />
              </button>
            </div>
          </li>
        ))
      )}
    </ul>
  );
}

export default TaskList;
