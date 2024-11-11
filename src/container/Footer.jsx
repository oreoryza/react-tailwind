import React from 'react';

export default function Footer() {
  return (
    <footer className='bg-footer flex md:flex-row md:justify-between flex-col-reverse justify-center items-center gap-5 px-24 py-7 text-sm'>
        <p className='opacity-75'>&copy; 2009-2024, PT Tokopedia</p>
        <ul className='flex flex-wrap justify-center md:justify-start gap-3 opacity-75'>
            <li><a href="">Tentang Kami</a></li>
            <li><a href="">Pusat Penjual</a></li>
            <li><a href="">Mobile Apps</a></li>
            <li><a href="">Mitra</a></li>
            <li><a href="">Karir</a></li>
            <li><a href="">Tokopedia Care</a></li>
            <li><a href="">B@B Digital</a></li>
        </ul>
    </footer>
  )
}