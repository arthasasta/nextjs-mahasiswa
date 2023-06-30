import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import koneksiDepsFood from '../pages/api/api';
import fireIcon from 'assets/icons/fire.png';
import Footer from './Footer';
import TextTruncate from './TextTruncate';

const Menu = () => {
  const [menuData, setMenuData] = useState(null);

  useEffect(() => {
    async function getMenuData() {
      try {
        const response = await koneksiDepsFood.get('/');
        setMenuData(response.data.data);
      } catch (error) {
        alert('error from mahasiswa in api mahasiswa: ' + error);
      }
    }
    getMenuData();
  }, []);

  if (menuData === null) {
    return <>Please wait</>;
  }

  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl mx-auto py-8">
        <div className="flex px-4">
        <div className="text-4xl font-bold text-zinc-700 text-center">Sneakers</div>
        </div>
        <div className="flex flex-wrap py-6">
          {menuData.map((menuItem) => (
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
      </div>
      <Footer />
    </>
  );
};

export default Menu;
