'use client';

import Link from 'next/link';

export default function Navbar() {

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
          Amanda Hotchkiss
        </Link>
        <div className="flex space-x-6 items-center">
          <Link href="/" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Home</Link>
          <Link href="/about" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">About</Link>
          <Link href="/projects" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Works</Link>
          <Link href="/contact" className="text-gray-700 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-400">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
