import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { FaDeleteLeft, FaPlus } from "react-icons/fa6";
import { useToast } from "./ui/use-toast"

interface InputCardProps {
    items: string[];
    onAddToList: (item: string) => void
    onUpdateList: (index: number) => void
    onClearList: () => void
}

export function InputCard({ items, onAddToList, onUpdateList, onClearList }: InputCardProps) {
    const [inputValue, setInputValue] = useState<string>('');
    const { toast } = useToast()

    const showInvalidInputToast = () => {
        toast({
            variant: "destructive",
            title: "Input cannot be empty.",
            description: "Please provide a valid input.",
        })
    }

    const showHitMaxInputToast = () => {
        toast({
            variant: "warning",
            title: "Hit Maximum Input.",
            description: "You have reach the maximum available input.",
        })
    }
    
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="title">Input</CardTitle>
                <CardDescription className="text-xxs">Let&apos;s input the items you wanna spin through.</CardDescription>
            </CardHeader>
            <CardContent>
                    <div className="flex flex-row w-full items-center gap-4">
                        <div className="flex w-full">
                            <Input className="w-full nes-input" id="item" placeholder="Input item..." value={inputValue} autoComplete="false" onChange={(e) => {
                                setInputValue(e.target.value); 
                            }}  />
                        </div>
                        <div className="flex">
                            <Button onClick={() => {
                                if (items.length >= 20) {
                                    showHitMaxInputToast();
                                }
                                else if (inputValue === "") {
                                    showInvalidInputToast();
                                } else {
                                    onAddToList(inputValue)
                                    setInputValue("");
                                }
                            }} className="nes-btn is-primary text-center w-[45px]">
                                <FaPlus />
                            </Button>
                        </div>
                    </div>
            </CardContent>
            <CardFooter className="flex flex-col items-start">
                <ul className="mb-5 w-full">
                {
                    items.length > 0 &&
                    items.map((item, index) => (
                        <li key={index} className="flex items-center justify-between w-full mb-2 flex-wrap">
                            <div className="ml-2 text-xxs mb-2">{item}</div>
                            <Button variant={"ghost"} className="text-lg nes-btn is-warning w-[45px]" onClick={() => {onUpdateList(index)}}><FaDeleteLeft /></Button>
                        </li>
                    ))
                }
                </ul>
                {
                    items.length > 0 &&
                    <Button onClick={() => {onClearList()}} className="nes-btn is-error">Clear the List</Button>
                }
            </CardFooter>
        </Card>
    )
}
