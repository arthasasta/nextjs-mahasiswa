import React from 'react';

interface AddPopUpProps {
  handleSubmitAdd: (formData: FormData) => void;
  onClose: () => void;
}

const AddPopUp: React.FC<AddPopUpProps> = ({ handleSubmitAdd, onClose }) => {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    handleSubmitAdd(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex flex-wrap justify-between p-4">
        <div className="w-1/2 flex flex-col mb-2 px-2">
          <label
            htmlFor="code"
            className="text-sm font-medium text-zinc-700 mb-1"
          >
            Kode :
          </label>
          <input
            type="text"
            id="nim"
            name="nim"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Masukan Kode Penjualan"
          />
        </div>
        <div className="w-1/2 flex flex-col mb-2 px-2">
          <label
            htmlFor="date"
            className="text-sm font-medium text-zinc-700 mb-1"
          >
            Tanggal :
          </label>
          <input
            type="date"
            name="tanggal_lahir"
            min="1970-01-01"
            max="2025-12-31"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Insert Date"
          />
        </div>
        <div className="w-1/2 flex flex-col mb-2 px-2">
          <label
            htmlFor="name"
            className="text-sm font-medium text-zinc-700 mb-1"
          >
            Nama :
          </label>
          <input
            type="text"
            id="nama"
            name="nama"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Masukan Nama Barang"
          />
        </div>
        <div className="w-1/2 flex flex-col mb-2 px-2">
          <label
            htmlFor="image"
            className="text-sm font-medium text-zinc-700 mb-1"
          >
            Gambar :
          </label>
          <input
            type="file"
            name="image"
            className="border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-1 focus:ring-black"
          />
        </div>
        <div className="w-full flex flex-col mb-2 px-2">
          <label
            htmlFor="description"
            className="text-sm font-medium text-zinc-700 mb-1"
          >
            Deskripsi :
          </label>
          <textarea
            id="address"
            name="alamat"
            className="border border-gray-300 rounded-md py-2 px-3 h-32 resize-none focus:outline-none focus:ring-1 focus:ring-black"
            placeholder="Masukan Deskripsi Penjualan"
          ></textarea>
        </div>
      </div>
      <div className="flex items-center justify-between px-6 mb-6 border-solid border-slate-200 rounded-b">
      <button
          type="button"
          className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-zinc shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={onClose}
        >
          Batal
        </button>
        <button
          type="submit"
          className="inline-flex justify-center rounded-md bg-black px-5 py-2 text-sm font-semibold text-white shadow-sm hover:bg-zinc-600 focus:ring-2 focus:ring-black focus:outline-none sm:ml-3 sm:w-auto"
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

export default AddPopUp;
