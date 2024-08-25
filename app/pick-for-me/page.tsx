"use client"

import { InputCard } from '@/components/InputCard';
import { Button } from '@/components/ui/button';
import { Toaster } from '@/components/ui/toaster';
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';

interface Colors {
  color: string;
  bg: string;
  border: string;
}

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

  const colors = [
    { color: "text-slate-600", bg: "bg-slate-200", border: "border border-slate-600 bg-slate-600 text-slate-200" },
    { color: "text-gray-600", bg: "bg-gray-200", border: "border border-gray-600 bg-gray-600 text-gray-200" },
    { color: "text-zinc-600", bg: "bg-zinc-200", border: "border border-zinc-600 bg-zinc-600 text-zinc-200" },
    { color: "text-neutral-600", bg: "bg-neutral-200", border: "border border-neutral-600 bg-neutral-600 text-neutral-200" },
    { color: "text-stone-600", bg: "bg-stone-200", border: "border border-stone-600 bg-stone-600 text-stone-200" },
    { color: "text-red-600", bg: "bg-red-200", border: "border border-red-600 bg-red-600 text-red-200" },
    { color: "text-orange-600", bg: "bg-orange-200", border: "border border-orange-600 bg-orange-600 text-orange-200" },
    { color: "text-amber-600", bg: "bg-amber-200", border: "border border-amber-600 bg-amber-600 text-amber-200" },
    { color: "text-yellow-600", bg: "bg-yellow-200", border: "border border-yellow-600 bg-yellow-600 text-yellow-200" },
    { color: "text-lime-600", bg: "bg-lime-200", border: "border border-lime-600 bg-lime-600 text-lime-200" },
    { color: "text-green-600", bg: "bg-green-200", border: "border border-green-600 bg-green-600 text-green-200" },
    { color: "text-emerald-600", bg: "bg-emerald-200", border: "border border-emerald-600 bg-emerald-600 text-emerald-200" },
    { color: "text-teal-600", bg: "bg-teal-200", border: "border border-teal-600 bg-teal-600 text-teal-200" },
    { color: "text-cyan-600", bg: "bg-cyan-200", border: "border border-cyan-600 bg-cyan-600 text-cyan-200" },
    { color: "text-sky-600", bg: "bg-sky-200", border: "border border-sky-600 bg-sky-600 text-sky-200" },
    { color: "text-blue-600", bg: "bg-blue-200", border: "border border-blue-600 bg-blue-600 text-blue-200" },
    { color: "text-indigo-600", bg: "bg-indigo-200", border: "border border-indigo-600 bg-indigo-600 text-indigo-200" },
    { color: "text-violet-600", bg: "bg-violet-200", border: "border border-violet-600 bg-violet-600 text-violet-200" },
    { color: "text-purple-600", bg: "bg-purple-200", border: "border border-purple-600 bg-purple-600 text-purple-200" },
    { color: "text-fuchsia-600", bg: "bg-fuchsia-200", border: "border border-fuchsia-600 bg-fuchsia-600 text-fuchsia-200" },
    { color: "text-pink-600", bg: "bg-pink-200", border: "border border-pink-600 bg-pink-600 text-pink-200" },
    { color: "text-rose-600", bg: "bg-rose-200", border: "border border-rose-600 bg-rose-600 text-rose-200" },
  ]

  const nesClass = [
    { color: "is-primary", bg: "is-primary", border: "is-primary" },
    { color: "is-success", bg: "is-success", border: "is-success" },
    { color: "is-warning", bg: "is-warning", border: "is-warning" },
    { color: "is-error", bg: "is-error", border: "is-error" },
    { color: "is-disabled", bg: "is-disabled", border: "is-disabled" },
  ]

  const [randomArray, setRandomArray] = useState<Colors[]>([]);

  const [randomPick, setRandomPick] = useState(-1);
  const [selectedValue, setSelectedValue] = useState("");
  const [displayPicked, setDisplayPicked] = useState(false)

  const startPicking = () => {
    console.log("startPicking");
    const random = Math.floor(Math.random() * items.length)
    setRandomPick(random)
    setSelectedValue(items[random])
    onUpdateList(random)
    setDisplayPicked(true)
  }

  useEffect(() => {
    // const randomizeArray = [...nesClass].sort(() => 0.5 - Math.random());
    // setRandomArray(randomizeArray);
  }, []);

  return (
    <main className="text-xs flex mx-auto max-w-screen-lg min-h-screen flex-col items-center justify-between p-5 md:p-8 lg:p-24">
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
                <Button onClick={() => {
                  startPicking()
                  }} className='nes-btn is-success'>
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
