"use client"

import BreadcrumbHeader from "@/components/BreadcrumbHeader";
import { useState } from "react";
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
    const [markdown, setMarkdown] = useState('## markdown preview');

    return (
        <main className="flex mx-auto max-w-screen-xl min-h-screen flex-col items-center lg:justify-start p-5 md:p-8 lg:px-24">
            <div className="flex flex-col w-full mb-10 nes-container text-xs">
                <BreadcrumbHeader subtitle="Markdown Editor" className="nes-text is-success"></BreadcrumbHeader>
            </div>
            <div className='flex flex-col md:flex-row w-full gap-4'>
                <div className="flex-1 text-xs">
                    <textarea onChange={(e) => {setMarkdown(e.target.value);}} value={markdown} className="nes-textarea min-h-96" />
                </div>
                <div className="flex-1">
                    <div className="nes-text is-disabled border-b w-full">Preview window</div>
                    <ReactMarkdown className={"preview font-['Open_Sans']"}>{markdown}</ReactMarkdown>
                </div>
            </div>
        </main>
    )
}