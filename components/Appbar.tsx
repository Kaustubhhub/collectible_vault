"use client"
import React from 'react'
import { Macondo } from '@next/font/google'
import { cn } from '@/lib/utils';

const silkscreen = Macondo({
    subsets: ['latin'],
    weight: '400',
});

const Appbar = () => {
    return (
        <div className='border bg-[#f2f2f2] p-4 flex justify-center text-2xl '>
            <span className={cn(silkscreen.className, 'font-extrabold')}>
                Collectible vault
            </span>
        </div>
    )
}

export default Appbar
