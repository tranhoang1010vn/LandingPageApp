"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-black/5 sticky top-0 z-50 bg-white/40 backdrop-blur-2xl">
      <div className="w-full mx-auto px-8 max-w-7xl lg:px-16">
        <div className="relative flex flex-col w-full py-5 mx-auto lg:items-center lg:justify-between lg:flex-row lg:px-6">
          <div className="flex flex-row items-center justify-between lg:justify-start">
            <Link href="/" className="text-black inline-flex items-center gap-3">
              <Image width={40} height={40} src="/logo.svg" alt="logo" />
              <span className="font-bold">Quawaco</span>
            </Link>
            <button
              onClick={() => setOpen(!open)}
              aria-expanded={open}
              aria-controls="main-navigation"
              aria-label="Toggle navigation menu"
              className="inline-flex items-center justify-center p-2 text-base-400 hover:text-black focus:outline-none focus:text-black lg:hidden"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ease-in-out ${open ? "rotate-90" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {!open ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                )}
              </svg>
            </button>
          </div>
          <nav
            id="main-navigation"
            className={`${open ? "h-auto" : "h-0"} flex-col items-center flex-grow gap-4 lg:gap-8 flex overflow-hidden lg:pb-0 lg:flex lg:justify-end lg:h-auto lg:flex-row transition-all duration-300 ease-in-out`}
          >
            <Link
              className="text-sm text-black transition duration-300 hover:text-blue-600 lg:ml-auto"
              href="/#features"
            >
              Tính năng
            </Link>
            <Link
              href="/tutorials"
              className="text-sm text-black transition duration-300 hover:text-blue-600 relative"
            >
              Hướng dẫn
              <span className="bg-red-600 ms-1 text-white text-[10px] px-2 py-1 rounded-full">
                NEW
              </span>
            </Link>
            <Link
              href="/"
              className="text-sm text-black transition duration-300 hover:text-blue-600 relative"
            >
              Lịch sử
              <sup className="ml-1 inline-block mt-1 w-1.5 h-1.5 bg-green-500 rounded-full"></sup>
            </Link>

            <Link
              href="/faq"
              className="text-sm text-black transition duration-300 hover:text-blue-600 relative"
            >
              Hỏi đáp
            </Link>

            <div className="inline-flex items-center gap-2 list-none py-px lg:ml-auto">
              {/* <Link
                href="/signup"
                className="flex items-center justify-center transition-all duration-200 focus:ring-2 focus:outline-none text-base-500 bg-white hover:text-accent-600 ring-1 ring-base-200 focus:bg-accent-100 h-8 px-4 py-2 text-xs font-medium rounded-md hover:bg-accent-100"
              >
                Sign up
              </Link>
              <Link
                href="/login"
                className="flex items-center justify-center transition-all duration-200 ring-1 focus:ring-2 ring-accent-700 focus:outline-none text-base-50 bg-accent-600 hover:bg-accent-700 focus:ring-base-500/50 h-8 px-4 py-2 text-xs font-medium rounded-md"
              >
                Log in
              </Link> */}
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
