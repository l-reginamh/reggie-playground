"use client";

import { useState } from "react"

interface PixelProps{
    selectedColor: string
}

export default function Pixel({selectedColor}: PixelProps) {
    const [pixelColor, setPixelColor] = useState("#ffffff")
    const [oldColor, setOldColor] = useState(pixelColor);
    const [canChangeColor, setCanChangeColor] = useState(true);

    const applyColor = () => {
        setPixelColor(selectedColor);
        setCanChangeColor(false);
    }

    const changeColorOnHover = () => {
        setOldColor(pixelColor);
        setPixelColor(selectedColor);
    }

    const resetColor = () => {
        if (canChangeColor) {
            setPixelColor(oldColor);
        }

        setCanChangeColor(true);
    }

    return (
        <div 
            className="flex w-3 h-3"
            onClick={applyColor}
            onMouseEnter={changeColorOnHover}
            onMouseLeave={resetColor}
            style={{ backgroundColor: pixelColor }}
        ></div>
    )
}