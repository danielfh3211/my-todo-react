import { FaTrash } from "react-icons/fa";

function DeleteModal({ onDelete, onCancel }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      <div className="bg-white rounded-xl shadow-2xl p-6 xs:p-8 flex flex-col items-center gap-4 w-full max-w-sm mx-auto">
        <FaTrash className="text-4xl text-red-600 mb-2" />
        <div className="text-lg font-semibold text-gray-800 text-center">
          Yakin ingin menghapus tugas ini?
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2 w-full">
          <button
            onClick={onDelete}
            className="w-full sm:w-auto px-5 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 active:bg-red-800 transition font-semibold shadow-md"
          >
            Hapus
          </button>
          <button
            onClick={onCancel}
            className="w-full sm:w-auto px-5 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 active:bg-gray-400 transition font-semibold shadow-md"
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
