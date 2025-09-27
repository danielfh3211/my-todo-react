import { useState, useEffect } from "react";
import Swal from "sweetalert2";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import DeleteModal from "../components/DeleteModal";
import FilterBar from "../components/FilterBar";
import { FaList } from "react-icons/fa";

function TodoPage() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState("all");
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [deleteConfirmId, setDeleteConfirmId] = useState(null);

  useEffect(() => {
    const loadTasks = () => {
      try {
        const saved = localStorage.getItem("tasks");
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed)) {
            setTasks(parsed);
            console.log("Tasks loaded successfully:", parsed);
          } else {
            console.warn("Invalid tasks format, resetting to empty array");
            setTasks([]);
          }
        }
      } catch (error) {
        console.error("Error loading tasks:", error);
        setTasks([]);
      }
    };

    loadTasks();
  }, []);

  useEffect(() => {
    if (tasks.length > 0) {
      try {
        localStorage.setItem("tasks", JSON.stringify(tasks));
        console.log("Tasks saved to localStorage");
      } catch (error) {
        console.error("Error saving tasks:", error);
      }
    }
  }, [tasks]);

  const addTask = (e) => {
    e.preventDefault();
    if (!input.trim()) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Tugas tidak boleh kosong!",
        timer: 1500,
        showConfirmButton: false,
        position: "top-end",
        toast: true,
      });
      return;
    }
    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setInput("");
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Tugas berhasil ditambahkan!",
      timer: 1200,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
    });
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
    setDeleteConfirmId(null);
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Tugas berhasil dihapus!",
      timer: 1200,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
    });
  };

  const startEdit = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
  };

  const saveEdit = (id) => {
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
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: editText } : task))
    );
    setEditingId(null);
    setEditText("");
    Swal.fire({
      icon: "success",
      title: "Berhasil!",
      text: "Tugas berhasil diedit!",
      timer: 1200,
      showConfirmButton: false,
      position: "top-end",
      toast: true,
    });
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
      <div className="min-h-screen bg-gray-100 flex items-start sm:items-center justify-center py-6 sm:p-4 relative">
      <div
          className={`w-full max-w-sm sm:max-w-md lg:max-w-lg bg-white shadow-xl rounded-2xl p-6 sm:p-8 transition-all duration-200 ${
          deleteConfirmId ? "blur-sm pointer-events-none select-none" : ""
        }`}
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 flex items-center justify-center gap-2">
          <FaList className="text-black" /> Todo App
        </h1>
        <TaskForm input={input} setInput={setInput} addTask={addTask} />
        <FilterBar filter={filter} setFilter={setFilter} />
        <TaskList
          tasks={filteredTasks}
          editingId={editingId}
          editText={editText}
          setEditText={setEditText}
          startEdit={startEdit}
          saveEdit={saveEdit}
          toggleTask={toggleTask}
          handleDeleteClick={setDeleteConfirmId}
        />
      </div>
      {deleteConfirmId && (
        <DeleteModal
          onDelete={() => deleteTask(deleteConfirmId)}
          onCancel={() => setDeleteConfirmId(null)}
        />
      )}
    </div>
  );
}

export default TodoPage;
