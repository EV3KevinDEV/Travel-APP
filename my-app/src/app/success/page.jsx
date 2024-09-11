import React from 'react';
import Link from "next/link";

export default function Success() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center bg-white p-8 rounded-lg shadow-lg w-80">
        <h1 className="text-3xl font-bold mb-6 text-green-600">Success!</h1>
        <p className="text-xl text-gray-700 mb-8">Your action was successful.</p>
        <Link href="/" className="text-blue-500 hover:text-blue-700 underline">
          Go back to Home
        </Link>
      </div>
    </div>
  );
}
