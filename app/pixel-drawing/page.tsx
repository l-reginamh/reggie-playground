"use client";

import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import BreadcrumbHeader from "@/components/BreadcrumbHeader";

const PixelBoard = dynamic(() => 
    import("@/components/PixelBoard").then((module) => module.default), {ssr: false})

export default function PixelDrawing() {
    const [width, setWidth] = useState(15);
    const [height, setHeight] = useState(15);
    const [selectedColor, setSelectedColor] = useState("#000000");
    const [hideOptions, setHideOptions] = useState(false);
    const [hideDrawingPanel, setHideDrawingPanel] = useState(true);
    const [buttonText, setButtonText] = useState("Pixel Start!")

    const initializeDrawingPanel = () => {
        setHideOptions(!hideOptions);
        setHideDrawingPanel(!hideDrawingPanel);
        setButtonText(buttonText === "Pixel Start!" ? "Restart Pixel!" : "Pixel Start!");
    };

    return (
        <main className="text-xs flex mx-auto max-w-screen-md min-h-screen flex-col items-center lg:justify-start p-5 md:p-8 lg:px-24">
            <div className="flex flex-col w-full mb-10 nes-container">
                <BreadcrumbHeader subtitle="Pixel Art Drawing!" className="nes-text is-success"></BreadcrumbHeader>
            </div>
            <div className="nes-container flex flex-col gap-4 justify-between text-center w-full">
                <div className="text-xl">
                Pixel Board Setup
                </div>
                {hideDrawingPanel && 
                    (<div className="w-full flex flex-col text-left">
                        <div className="text-md pl-3">Board Size</div>
                        <div className="w-full flex flex-row gap-4">
                            <div className="w-full flex flex-col text-center">
                                <Input 
                                    type="number" 
                                    className="nes-input" 
                                    id="item" 
                                    value={width} 
                                    autoComplete="false" 
                                    onChange={(e) => {
                                                setWidth(e.target.valueAsNumber); 
                                            }}  
                                />
                                <div className="text-xxxs text-slate-400 mt-1">
                                    Width
                                </div>
                            </div>
                            <div className="w-full flex flex-col text-center">
                                <Input 
                                    type="number" 
                                    className="nes-input" 
                                    id="item" 
                                    value={height} 
                                    autoComplete="false" 
                                    onChange={(e) => {
                                                setHeight(e.target.valueAsNumber); 
                                            }}  
                                />
                                <div className="text-xxxs text-slate-400 mt-1">
                                    Height
                                </div>
                            </div>
                        </div>
                    </div>)
                }

                <Button 
                    onClick={() => {
                        initializeDrawingPanel()
                    }}
                    className={`nes-btn ${hideDrawingPanel === false ? 'is-error' : 'is-success'} w-full`}
                >
                    {buttonText}
                </Button>
            </div>

            {
                hideOptions && (
                    <div className="flex flex-col w-full mt-10 nes-container">
                        <div className="flex flex-col text-left">
                            <div className="text-md pl-3">
                            Color Picker
                            </div>
                            <div className="flex">
                                <Input 
                                    type="color" 
                                    className="nes-input w-full" 
                                    id="item" 
                                    value={selectedColor} 
                                    autoComplete="false" 
                                    onChange={(e) => {
                                        console.log(e.target.value);
                                        setSelectedColor(e.target.value); 
                                    }}  
                                />
                            </div>
                        </div>
                        <div className="flex flex-col text-center">
                            <PixelBoard 
                                width={width}
                                height={height}
                                selectedColor={selectedColor}
                            />
                        </div>
                    </div>
                )
            }
        </main>
    );
}