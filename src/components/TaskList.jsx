import { FaEdit, FaSave, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import React, { useState } from "react";

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
  const [expandedTasks, setExpandedTasks] = useState({});

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

  const toggleExpand = (id) => {
    setExpandedTasks((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const CHARACTER_LIMIT = 125;

  const calculateRows = (text) => {
    const minRows = 2;
    const maxRows = 10;
    const neededRows = Math.ceil(text.length / 50); 
    return Math.min(maxRows, Math.max(minRows, neededRows));
  };

  return (
    <ul className="space-y-3 pt-1 px-4 sm:px-0">
      {tasks.length === 0 ? (
        <p className="text-gray-400 text-center py-4">Belum ada tugas</p>
      ) : (
        tasks.map((task) => {
          const isExpanded = expandedTasks[task.id];
          const isLongText = task.text.length > CHARACTER_LIMIT;

          let displayedText = task.text;
          let needsReadMore = isLongText && !isExpanded;
          let needsHideButton = isLongText && isExpanded; 

          if (needsReadMore) {
            displayedText = task.text.substring(0, CHARACTER_LIMIT) + "...";
          }

          return (
            <li
              key={task.id}
              className="flex items-start justify-between bg-gray-50 p-3 rounded-lg shadow-sm flex-wrap sm:flex-nowrap"
            >
              <div className="flex items-start gap-3 flex-1 min-w-0 pr-2">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  className="w-5 h-5 accent-black cursor-pointer flex-shrink-0 mt-1"
                />

                {editingId === task.id ? (
                  <textarea
                    value={editText}
                    onChange={(e) => setEditText(e.target.value)}
                    className="flex-1 p-2 border rounded min-w-0 resize-y"
                    rows={calculateRows(editText)}
                    style={{ minHeight: '40px' }}
                  />
                ) : (
                  <span
                    className={`flex-1 min-w-0 text-base sm:text-lg whitespace-pre-wrap text-justify ${
                      task.completed ? "line-through text-gray-400" : ""
                    }`}
                    title={task.text}
                  >
                    {displayedText}

                    {needsReadMore && (
                      <button
                        onClick={() => toggleExpand(task.id)}
                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer ml-1 inline font-semibold"
                      >
                        Lengkapnya
                      </button>
                    )}

                    {needsHideButton && (
                      <button
                        onClick={() => toggleExpand(task.id)}
                        className="text-sm text-blue-600 hover:text-blue-800 cursor-pointer mt-1 inline ml-auto w-fit font-semibold"
                      >
                        &nbsp;Sembunyikan
                      </button>
                    )}
                  </span>
                )}
              </div>

              <div className="flex gap-2 ml-2 flex-shrink-0">
                {editingId === task.id ? (
                  <button
                    onClick={() => handleSave(task.id)}
                    className="p-2 bg-black cursor-pointer text-white rounded hover:bg-gray-800 transition flex-shrink-0 self-start"
                    title="Save"
                  >
                    <FaSave />
                  </button>
                ) : (
                  <button
                    onClick={() => startEdit(task)}
                    className="p-2 bg-black cursor-pointer text-white rounded hover:bg-gray-800 transition flex-shrink-0 self-start"
                    title="Edit"
                  >
                    <FaEdit />
                  </button>
                )}
                <button
                  onClick={() => handleDeleteClick(task.id)}
                  className="p-2 bg-black cursor-pointer text-white rounded hover:bg-red-600 transition flex-shrink-0 self-start"
                  title="Hapus"
                >
                  <FaTrash />
                </button>
              </div>
            </li>
          );
        })
      )}
    </ul>
  );
}

export default TaskList;