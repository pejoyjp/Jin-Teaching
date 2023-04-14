'use client'
import Link from 'next/link'
import React from 'react'
import toast, { Toaster } from 'react-hot-toast';

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className="border-b-[1px] border-b-white fixed top-0 w-full">
        <Toaster />
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16 justify-between text-rose-300">

            <div className="flex-shrink-0">
                <Link href="/" className="font-bold text-lg hover:">
                    Jin Teaching
                </Link>
            </div>
            
            <div className='flex gap-2'>
                <div className="flex">
                    <Link
                        href="/"
                        className="px-3 py-2 text-sm font-medium hover:underline"
                    >
                        主页
                    </Link>
                </div>

                <div className="flex">
                    <Link
                        href="/material"
                        className="px-3 py-2 text-sm font-medium hover:underline"
                    >
                        找学习资料看这！
                    </Link>
                </div>
            </div>

            

        </div>
        </div>
    </nav>
  )
}

export default Navbar