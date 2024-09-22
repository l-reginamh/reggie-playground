"use client";

import { useRef } from "react";
import PixelRow from "./PixelRow";
import { exportComponentAsPNG } from "react-component-export-image";
import { Button } from "./ui/button";

interface PixelBoardProps {
    width: number;
    height: number;
    selectedColor: string;
}

export default function PixelBoards({width, height, selectedColor}: PixelBoardProps) {
    const boardRef = useRef<HTMLInputElement>(null);
  
    let rows = [];
  
    for (let i = 0; i < height; i++) {
      rows.push(<PixelRow key={i} width={width} selectedColor={selectedColor} />);
    }

    return (
        <>
            <div className="my-8 w-fit flex flex-col nes-container">
                <div ref={boardRef}>
                    {
                        rows.map(row => (
                            row
                        ))
                    }
                </div>
            </div>
            <Button onClick={() => exportComponentAsPNG(boardRef)} className="nes-button is-success">
                Export as PNG
            </Button>
        </>
    )
}