import React from 'react';

const DeletePopUp = ({ handleDelete, onClose }) => {
  return (
    <div className="flex flex-col px-6">
      <div className="py-4">
        Apa Kamu yakin ingin menghapus produk tersebut ?
      </div>
      <div className="flex items-center justify-between mb-6 border-solid border-slate-200 rounded-b">
        <button
          type="button"
          className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={onClose}
        >
          Tidak
        </button>
        <button
          type="button"
          className="inline-flex justify-center rounded-md bg-red-500 px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:outline-none sm:ml-3 sm:w-auto"
          onClick={() => handleDelete(true)}
        >
          Iya
        </button>
      </div>
    </div>
  );
};

export default DeletePopUp;
