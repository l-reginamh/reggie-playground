"use client"

import { InputCard } from '@/components/InputCard';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    gsap.to(".floatElement", {
      duration: 1.5,
      y: 6, // Adjust this value for the desired float height
      ease: "power1.inOut",
      repeat: -1, // Repeat indefinitely
      yoyo: true, // Reverse the animation
    });
  }, []);

  return (
    <main className="bg-pixel bg-cover bg-center text-xs">
      <div className='flex mx-auto max-w-screen-xl min-h-screen flex-col items-center justify-between p-5 md:p-8 lg:p-24'>
        <div className='bg-white flex flex-col w-full p-8'>
          <div className='text-center'>
            <div className='floatElement'><i className="snes-jp-logo"></i></div>
            <div className='text-xl md:text-3xl leading-loose mt-3'>Welcome to my playground!</div>
          </div>
          <div className='my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='nes-container with-title is-centered mb-5 text-center'>
              <p className='title'>I hate decision making</p>
              <p>
              <Link href="/pick-for-me" className="flex items-center justify-center text-lg">
                  <span className="font-bold nes-text is-success">Pick for me!</span>
              </Link>
              </p>
            </div>
          </div>
          <Toaster />
        </div>
      </div>
    </main>
  );
}
