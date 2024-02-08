'use client';
import React from 'react'
import { motion } from 'framer-motion';
import { links } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return <header className='z-[999] relative'>
    <motion.div 
      className="fixed top-0 right-[-14rem] h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[31rem] sm:rounded-full"
      initial={{ y: -100, x: "-50%", opacity: 0}} 
      animate={{ y: 0, x: "-50%", opacity: 1}}> </motion.div> 

    <motion.div 
      className="fixed top-0 left-[7rem] h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[10rem] sm:rounded-full"
      initial={{ y: -100, x: "-50%", opacity: 0}} 
      animate={{ y: 0, x: "-50%", opacity: 1}}> </motion.div>

    <nav className='flex fixed top-[0.15rem] right-[-12rem] h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
      <ul className='flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
        {
          links.map(link => (
            <motion.li 
              className='h-3/4 flex items-center justify-center'
              key={link.hash}
              initial={{ y: -100, opacity: 0}}
              animate={{ y: 0, opacity: 1}}
            >
              <Link className='flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition' href={link.hash}>
                {link.name}
              </Link>
              
            </motion.li>
          ))
        }
        <motion.button 
          type='button' 
          className='bg-gradient-to-r from-[#7244f2] to-[#b884f0] py-2 px-3 rounded-full text-white'
          initial={{ y: -100, opacity: 0}}
          animate={{ y: 0, opacity: 1}}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9, x: "-5px", y: "5px" }}>
          Contact 
        </motion.button>
      </ul>
    </nav>

    <nav className='flex fixed top-[0.15rem] left-[4rem] h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0'>
      <p className='flex w-full items-center justify-center py-3 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5'>
        test
      </p>
      <Image 
        alt='Nathan Logo' 
        src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1ef0c416-3541-4321-ac25-664bae6f334e/dfsc4zg-1d0ded53-639c-420d-9188-455811d47e89.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzFlZjBjNDE2LTM1NDEtNDMyMS1hYzI1LTY2NGJhZTZmMzM0ZVwvZGZzYzR6Zy0xZDBkZWQ1My02MzljLTQyMGQtOTE4OC00NTU4MTFkNDdlODkucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.EXc5wMIxFtiXzEyKJg2AO8bEbURXR8grNasS5VNQxx8'
        width={500}
        height={500} />
    </nav>
  </header>;
}
