import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';
import sepatu from 'assets/icons/logosepatu.png';

const Navbar = styled.nav`
  font-family: 'EncodeSans-Thin', sans-serif;
`;

const NavbarComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar>
      <nav className="bg-black border-gray-200 sticky top-0 z-20">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-1">
          <Link href="/">
            <div className="flex items-center">
              <Image src={sepatu} width={45} height={45} alt="logo" />
              <span className="self-center text-lg text-white font-bold whitespace-nowrap ml-5">
                SNEAKAA
              </span>
            </div>
          </Link>
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center ml-3 text-sm text-zinc-700 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div
            className={`w-full md:block md:w-auto ${
              isMenuOpen ? 'block' : 'hidden'
            }`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-black">
              <li>
                <Link href="/">
                  <div className="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#4f6c37] hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-[#e9810a] md:p-0 ">
                    Beranda
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/beli">
                  <div className="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#4f6c37] hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-[#e9810a] md:p-0 ">
                    Beli
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/jual">
                  <div className="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#363636] hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-[#e9810a] md:p-0 ">
                    Jual
                  </div>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <div className="block py-2 pl-3 pr-4 text-white rounded hover:bg-[#4f6c37] hover:text-white md:hover:bg-transparent md:border-0 md:hover:text-[#e9810a] md:p-0 ">
                    Tentang Toko
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </Navbar>
  );
};

export default NavbarComponent;
