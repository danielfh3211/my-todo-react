import { FaTrash } from "react-icons/fa";

function DeleteModal({ onDelete, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col items-center gap-4 min-w-[300px]">
        <FaTrash className="text-4xl text-red-600 mb-2" />
        <div className="text-lg font-semibold text-gray-800 text-center">
          Yakin ingin menghapus tugas ini?
        </div>
        <div className="flex gap-4 mt-2">
          <button
            onClick={onDelete}
            className="px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-800 transition font-semibold"
          >
            Hapus
          </button>
          <button
            onClick={onCancel}
            className="px-5 py-2 bg-gray-200 text-black rounded-lg hover:bg-gray-300 transition font-semibold"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
