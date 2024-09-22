"use client";

import Pixel from "./Pixel";

interface PixelRowProps {
    width: number;
    selectedColor: string;
}

export default function PixelRow({width, selectedColor}: PixelRowProps) {
    let pixels = [];
  
    for (let i = 0; i < width; i++) {
      pixels.push(<Pixel key={i} selectedColor={selectedColor} />);
    }
  
    return (
        <div className="flex flex-row">{pixels}</div>
    );
}