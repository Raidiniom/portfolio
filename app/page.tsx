'use client';
// Sonar Library for Toast like Android Studio

import { useState } from "react";
import Button from "./components/Button";

export default function Home() {
    const [message, setMessage] = useState('');

    const testClick1 = () => {
        setMessage('Hello')
    }

    const testClick2 = () => {
        setMessage('Testing')
    }

    const testClick3 = () => {
        setMessage('Minecraft')
    }

    return (
        <div className="min-h-screen flex flex-col items-center px-4 py-12">

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--noel-teal)] mb-10 text-center">
                Welcome to My Portfolio
            </h1>

            {message && (
                <p className="text-xl text-[var(--noel-teal)] font-semibold">
                    {message}
                </p>
            )}
            
            <Button label={"Hello"} onClick={testClick1}/>
            <Button label={"Hello"} onClick={testClick2}/>
            <Button label={"Hello"} onClick={testClick3}/>
        </div>
    );
}
