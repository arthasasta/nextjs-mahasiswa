import React, { useState, useEffect } from 'react';
import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import koneksiDepsFood from './api/api';
import Navbar from './Navbar';
import Footer from './Footer';
// import Produk from 'assets/icons/Produk.png';
import dots from '/assets/icons/actions.png';
import Modal from './Modal';
import AddPopUp from './AddPopUp';
import DeletePopUp from './DeletePopUp';
import EditPopUp from './EditPopUp';
import TextTruncate from './TextTruncate';

const Produk = () => {
  const [ProdukData, setProdukData] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteNim, setDeleteNim] = useState(null);
  const [editData, setEditData] = useState({
    nim: '',
    nama: '',
    alamat: '',
    tanggal_lahir: '',
  });

  function formatDate(date) {
    var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
  }

  const handleSubmitEdit = (event) => {
    event.preventDefault();
    const address = '/' + event.target.nim.value;
    const formData = {
      nim: event.target.nim.value,
      nama: event.target.nama.value,
      alamat: event.target.alamat.value,
      tanggal_lahir: event.target.tanggal_lahir.value,
    };
    koneksiDepsFood
      .put(address, formData)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (nim) => {
    const ProdukEdit = ProdukData.filter((Produk) => {
      return Produk.nim === nim;
    });

    if (ProdukEdit.length > 0) {
      const editedData = {
        nim: ProdukEdit[0].nim,
        nama: ProdukEdit[0].nama,
        alamat: ProdukEdit[0].alamat,
        tanggal_lahir: formatDate(ProdukEdit[0].tanggal_lahir),
      };
      setEditData(editedData);
      setShowEditModal(true);
    }
  };

  useEffect(() => {
    async function getProdukData() {
      try {
        const response = await koneksiDepsFood.get('/');
        setProdukData(response.data.data);
      } catch (error) {
        alert('error from mahasiswa in api mahasiswa: ' + error);
      }
    }
    getProdukData();
  }, []);

  const handleSubmitAdd = (formData) => {
    koneksiDepsFood
      .post('/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => {
        console.log(res);
        setShowAddModal(false);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = () => {
    if (deleteNim) {
      koneksiDepsFood
        .delete(`/${deleteNim}`)
        .then((response) => {
          console.log('Data berhasil dihapus:', response.data);
          setProdukData(
            ProdukData.filter((Produk) => Produk.nim !== deleteNim),
          );
          setShowDeleteModal(false);
          setDeleteNim(null);
        })
        .catch((error) => {
          console.error('Gagal menghapus data:', error);
        });
    }
  };

  if (ProdukData === null) {
    return <>Please wait</>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl flex flex-wrap mx-auto py-8">
        <div className="flex justify-between w-full items-center px-4">
          <div className="flex">
            <div className="text-4xl font-bold text-zinc-700">Jual Sneakers</div>
          </div>
          <button
            type="button"
            className="text-white bg-black hover:bg-zinc-600 focus:ring-2 focus:ring-black-500 font-medium rounded-lg px-6 py-2 focus:outline-none"
            onClick={() => setShowAddModal(true)}
          >
            Tambah Produk
          </button>
        </div>
        <div className="flex flex-wrap py-6">
          {ProdukData.map((ProdukItem) => (
            <div
              key={ProdukItem.nim}
              className="w-full lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
            >
              <div className="bg-white border border-gray-200 rounded-lg shadow">
                <img className="rounded-t-lg" src={ProdukItem.foto} alt="" />
                <div className="p-2.5">
                  <div className="flex justify-between mb-2">
                    <div className="text-base font-bold tracking-tight text-zinc-700">
                      {ProdukItem.nama}
                    </div>
                    <Menu as="div" className="relative inline-block text-left">
                      <div>
                        <Menu.Button>
                          <Image
                            className="object-contain"
                            width={16}
                            height={16}
                            src={dots}
                            alt="Dots"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <div className="px-1 py-1">
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => handleEdit(ProdukItem.nim)}
                                  className={`${
                                    active
                                      ? 'bg-gray-100 text-zinc-700'
                                      : 'text-zinc-500'
                                  } flex justify-between px-4 py-1 text-xs`}
                                >
                                  Edit
                                </button>
                              )}
                            </Menu.Item>
                            <Menu.Item>
                              {({ active }) => (
                                <button
                                  onClick={() => {
                                    setDeleteNim(ProdukItem.nim);
                                    setShowDeleteModal(true);
                                  }}
                                  value={ProdukItem.nim}
                                  className={`${
                                    active
                                      ? 'bg-gray-100 text-zinc-700'
                                      : 'text-zinc-500'
                                  } flex justify-between px-4 py-1 text-xs`}
                                >
                                  Delete
                                </button>
                              )}
                            </Menu.Item>
                          </div>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <p className="mb-3 text-justify text-sm text-zinc-500">
                    <TextTruncate
                      text={ProdukItem.alamat}
                      maxLength={20}
                      className="truncate overflow-ellipsis"
                    />
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
      {/* ADD */}
      <Modal
        title="New Produk"
        open={showAddModal}
        onClose={() => setShowAddModal(false)}
      >
        <AddPopUp
          handleSubmitAdd={handleSubmitAdd}
          onClose={() => setShowAddModal(false)}
        />
      </Modal>
      {/* EDIT */}
      <Modal
        title="Edit Produk"
        open={showEditModal}
        onClose={() => setShowEditModal(false)}
      >
        <EditPopUp
          editData={editData}
          handleSubmitEdit={handleSubmitEdit}
          onClose={() => setShowEditModal(false)}
        />
      </Modal>
      {/* DELETE */}
      <Modal
        title="Hapus Produk"
        open={showDeleteModal}
        onClose={() => {
          setShowDeleteModal(false);
          setDeleteNim(null);
        }}
      >
        <DeletePopUp
          handleDelete={handleDelete}
          onClose={() => {
            setShowDeleteModal(false);
            setDeleteNim(null);
          }}
        />
      </Modal>
    </>
  );
};

export default Produk;
