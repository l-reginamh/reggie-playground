"use client"

import { InputCard } from '@/components/InputCard';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

export default function Home() {

  return (
    <main className="bg-pixel bg-cover bg-center text-xs">
      <div className='flex mx-auto max-w-screen-xl min-h-screen flex-col items-center justify-between p-5 md:p-8 lg:p-24'>
        <div className='bg-white flex flex-col w-full p-8'>
          <div className='text-center'>
            <div><i className="snes-jp-logo"></i></div>
            <div className='text-xl md:text-3xl leading-loose'>Welcome to my playground!</div>
          </div>
          <div className='my-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
            <div className='nes-container with-title is-centered mb-5 text-center'>
              <p className='title'>I hate decision making</p>
              <p>
              <Link href="/pick-for-me" className="flex items-center justify-center text-lg">
                  <span className="font-bold">Pick for me!</span>
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
