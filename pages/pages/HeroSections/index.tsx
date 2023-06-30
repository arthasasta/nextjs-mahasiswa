import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import heroImage from 'assets/images/Home.webp';

const HeroSections = () => {
  return (
    <section className="bg-white max-w-screen-xl flex flex-col items-center lg:flex-row mx-auto p-4 py-8 lg:py-0">
      <div className="w-full lg:w-1/2 flex items-center">
        <div className="mr-auto place-self-center lg:col-span-6">
          <h1 className="max-w-2xl mb-4 text-5xl text-black font-bold tracking-tight leading-none md:text-6xl xl:text-7xl">
            <span className="text-black-400">Step into</span> Style, <br /> Step into <br /> Confidence
          </h1>
          <p className="max-w-xl mb-6 text-base font-medium text-zinc-500 lg:mb-8">
            Kami akan mengarahkan Anda dalam perjalanan yang menarik ini untuk menemukan pasangan sepatu yang sempurna, 
            meningkatkan gaya Anda, dan merasakan kebahagiaan dalam menggunakan alas kaki fashion.
          </p>
          <div className="mb-4">
            <Link href="/beli">
              <button
                type="button"
                className="text-white bg-black hover:bg-zinc-600 focus:outline-none font-medium rounded-lg px-10 py-3 mr-4"
              >
                Beli Sekarang
              </button>
            </Link>
            <Link href="/jual">
              <button
                type="button"
                className="text-white bg-black hover:bg-zinc-600 focus:outline-none font-medium rounded-lg px-10 py-3"
              >
                Jual Sekarang
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/2 flex justify-end">
        <div className="max-w-lg p-6">
          <Image
            className="object-contain h-full w-full"
            src={heroImage}
            alt="Hero Image"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSections;
