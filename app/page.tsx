"use client"

import { InputCard } from '@/components/InputCard';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import { siteConfig } from '@/config/site';
import gsap from 'gsap';
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

export default function Home() {
  const menus = siteConfig.pages;

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
    <main className="text-xs">
      <div className='flex mx-auto max-w-screen-xl flex-col items-center justify-between p-5 md:p-8 lg:p-24'>
        <div className='flex flex-col w-full p-8'>
          <div className='text-center'>
            <div className='floatElement'><i className="snes-jp-logo"></i></div>
            <div className='text-xl md:text-3xl leading-loose mt-3'>Welcome to my playground!</div>
          </div>
          <div className='my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            {
              menus.map((menu, i) => {
                return (
                  menu.available === true && 
                    <Link href={menu.path} key={i} className='nes-container with-title is-centered mb-5 text-center no-underline hover:no-underline'>
                      <p className='title nes-text is-success no-underline hover:no-underline'>{menu.title}</p>
                      <div className="text-slate-400 text-xxxs hover:text-red-400 no-underline hover:no-underline">
                        {menu.description}
                      </div>
                    </Link>
                )
              })
            }
          </div>
          <Toaster />
        </div>
      </div>
    </main>
  );
}
