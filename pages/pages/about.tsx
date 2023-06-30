import React from 'react';
import Navbar from './Navbar';
import Image from 'next/image';
import toko from 'assets/images/tokosepatu.webp';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto py-8 px-4">
        <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row">
          <Image
            className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-96 md:rounded-none md:rounded-l-lg"
            src={toko}
            alt="toko"
          />
          <div className="flex flex-col justify-between px-4 leading-normal max-w-2xl py-4">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-zinc-700">
              SNEAKAA
            </h5>
            <p className="mb-2 font-normal text-justify text-zinc-500 indent-10">
              Kami bangga menjadi tujuan utama Anda dalam mencari sneakers berkualitas dan
              gaya terkini. Kami adalah perusahaan yang berdedikasi untuk memberikan pengalaman
              berbelanja yang menyenangkan dan memuaskan. Dengan koleksi sneakers kami yang
              selalu diperbarui, kami menyediakan berbagai pilihan untuk pria dan wanita. Mulai dari
              sneakers atletik yang fungsional hingga sneakers kasual yang stylish, kami memiliki
              segala yang Anda butuhkan untuk meningkatkan gaya Anda. Di Sneakaa, kepuasan pelanggan
              adalah prioritas utama kami. Tim kami yang berpengetahuan luas dan ramah siap membantu
              Anda menemukan pasangan sneakers yang sempurna sesuai dengan preferensi dan kebutuhan
              Anda. Kami percaya bahwa setiap langkah yang Anda ambil harus ditemani oleh kenyamanan
              dan kepercayaan diri. Nikmati pengalaman berbelanja yang tak terlupakan di Sneakaa.
              Kunjungi toko kami atau jelajahi koleksi kami secara online untuk menemukan pasangan
              sneakers yang sempurna. Step into style, step into confidence with Sneakaa!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
