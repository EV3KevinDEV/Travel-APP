// Signin.js

"use client";
import React, { useState } from 'react';
import Link from "next/link"

export default function Signin() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        console.log('Signed in:', data);
        // Store token and username in localStorage
        localStorage.setItem('token', data.user.token);
        localStorage.setItem('username', data.user.username);
        window.location.href = '/success'; // Redirect to success page
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error('Error signing in:', error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        {/* First Name */}
        {/* ... existing form fields ... */}
        {/* Sign Up Button */}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg w-full"
        >
          Sign Up
        </button>
        {/* Link to Sign In */}
        <p className="mt-4 text-center">
          Already have an account?{' '}
          <Link href="/signin" className="text-blue-500 hover:underline">
            Sign in here
          </Link>
        </p>
      </form>
    </div>
  );
}