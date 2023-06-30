import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import koneksiDepsFood from '../api/api';
import fireIcon from 'assets/icons/fire.png';
import TextTruncate from '../TextTruncate';

const Menus = () => {
  const [menusData, setMenusData] = useState(null);

  useEffect(() => {
    async function getMenusData() {
      try {
        const response = await koneksiDepsFood.get('/');
        setMenusData(response.data.data);
      } catch (error) {
        alert('error from mahasiswa in api mahasiswa: ' + error);
      }
    }
    getMenusData();
  }, []);

  if (menusData === null) {
    return <>Please wait</>;
  }

  return (
    <section className="max-w-screen-xl mx-auto py-8">
      <div className="flex px-4">
        <div className="text-2xl font-bold text-zinc-700">
        Kamu Mungkin Suka Produk Ini
        </div>
      </div>
      <div className="flex flex-wrap py-6">
        {menusData.slice(0, 5).map((menuItem) => (
          <div
            key={menuItem.nim}
            className="w-full lg:w-1/5 px-4 py-3 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          >
            <div className="bg-white border border-gray-200 rounded-lg shadow">
              <img className="rounded-t-lg" src={menuItem.foto} alt="" />
              <div className="p-2.5">
                <div className="flex justify-between mb-2">
                  <div className="text-base font-bold tracking-tight text-zinc-700">
                    {menuItem.nama}
                  </div>
                </div>
                <p className="mb-3 text-justify text-sm text-zinc-500">
                  <TextTruncate
                    text={menuItem.alamat}
                    maxLength={20}
                    className="truncate overflow-ellipsis"
                  />
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-2">
        <Link href="/beli">
          <button
            type="button"
            className="text-black hover:text-white border border-black  hover:bg-black focus:ring-2 focus:ring-red-500 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            View All
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Menus;
