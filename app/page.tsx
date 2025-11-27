'use client';
// Sonar Library for Toast like Android Studio

import { useState } from "react";
import Button from "./components/Button";

export default function Home() {

    return (
        <div className="min-h-screen flex flex-col items-center px-4 py-12">

            <h1 className="text-4xl sm:text-5xl font-bold text-[var(--noel-teal)] mb-10 text-center">
                Welcome to My Portfolio
            </h1>
        </div>
    );
}
