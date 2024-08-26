"use client"

import BreadcrumbHeader from '@/components/BreadcrumbHeader';
import { InputCard } from '@/components/InputCard';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

export default function Home() {
  const [items, setItems] = useState<string[]>([]);

  const onAddToList = (item: string) => {
    setDisplayPicked(false)
    setItems([...items, item]);
  }

  const onUpdateList = (targetIndex: Number) => {
    const newItems = items.filter((item, index) => index !== targetIndex);
    setDisplayPicked(false)
    setItems(newItems);
  }

  const onClearList = () => {
    setDisplayPicked(false)
    setItems([]);
  }
  
  const [selectedValue, setSelectedValue] = useState("");
  const [displayPicked, setDisplayPicked] = useState(false)

  const startPicking = () => {
    console.log("startPicking");
    const random = Math.floor(Math.random() * items.length)
    setSelectedValue(items[random])
    onUpdateList(random)
    setDisplayPicked(true)
  }

  useEffect(() => {
    // const randomizeArray = [...nesClass].sort(() => 0.5 - Math.random());
    // setRandomArray(randomizeArray);
  }, []);

  return (
    <main className="bg-white text-xs flex mx-auto max-w-screen-xl min-h-screen flex-col items-center lg:justify-start p-5 md:p-8 lg:px-24">
      <div className="flex flex-col w-full mb-10 nes-container">
        <BreadcrumbHeader subtitle="Pick for me!" className="nes-text is-success"></BreadcrumbHeader>
      </div>
      {/* <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 mb-10 w-full"></div> */}
      <div className='flex flex-col md:flex-row w-full'>
        <div className="flex flex-col flex-1 w-full item-center">
          <div className='mb-5'>
            <div className="text-4xl nes-text is-success font-bold mb-1">
              Pick for me!
            </div>
            <p className='mt-5 text-xxxs text-slate-400'>You need at least 2 item to start picking.</p>
          </div>
          <div className="flex items-center flex-wrap">
            {
              items.length > 0 &&
              items.map((item, index) => (
                <div key={index} className={`nes-text mr-10 mb-4 ${index % 3 == 0 ? "is-primary" : index % 3 == 1 ? "is-error" : index % 3 == 2 ? "is-warning" : "is-dark"}`}>
                  {item}
                </div>
              ))
            }
          </div>
          {
            items.length > 1 &&
            (
              <div className='mt-5'>
                <Button 
                  onClick={() => {
                    startPicking()
                  }}
                  className='nes-btn is-success'>
                  Pick now!
                </Button>
              </div>
            )
          }
          {
            displayPicked ?
            (
              <>
                <div className={`nes-container with-title is-centered mt-10 w-full text-center px-5 py-5 rounded-md mr-3`}>
                  <p className='title'>The Chosen One Is</p>
                  <div>
                    <i className="nes-icon trophy is-large"></i>
                  </div>
                  <div className='text-lg nes-text is-success'>
                    {selectedValue}
                  </div>
                </div>
              </>
            )
            :
            (<></>)
          }
        </div>
        <div className="flex flex-col flex-1 item-center w-full md:pl-5 mt-16 md:mt-1">
          <InputCard items={items} onAddToList={onAddToList} onUpdateList={onUpdateList} onClearList= {onClearList} />
        </div>
        <Toaster />
      </div>
    </main>
  );
}
