// Signin.js

"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Correct import for Next.js App Router
import Link from 'next/link'; // For client-side navigation

export default function Signin() {
  // State variables for email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // State to track form submission, loading, and error states
  const [userSubmitted, setUserSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const router = useRouter(); // Initialize router for navigation

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setUserSubmitted(true);
    setLoading(true);
    setError(null);
  };

  // Effect to handle sign-in request when the user submits the form
  useEffect(() => {
    if (userSubmitted) {
      // Reset userSubmitted to prevent multiple submissions
      setUserSubmitted(false);

      // Make the POST request to the sign-in API
      fetch("http://localhost:5000/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
        // Credentials need to be included to accept response cookies from the server
        credentials: "include",
      })
        .then(async (response) => {
          setLoading(false);
          if (!response.ok) {
            // Handle HTTP errors
            const errorData = await response.json();
            throw new Error(errorData.message || 'Sign-in failed');
          }
          return response.json();
        })
        .then((data) => {
          console.log('Sign-in successful:', data);
          // Store token and username in localStorage
          localStorage.setItem('token', data.user.token);
          localStorage.setItem('username', data.user.username);
          // Redirect to success or dashboard page
          router.push('/success'); // Replace with your desired route
        })
        .catch((error) => {
          console.error('Error during sign-in:', error);
          setError(error.message);
        });
    }
  }, [userSubmitted, email, password, router]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>

        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email} // Bind the input value to state
            onChange={(e) => setEmail(e.target.value)} // Correctly update email state
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 mb-2">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password} // Bind the input value to state
            onChange={(e) => setPassword(e.target.value)} // Correctly update password state
            className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your password"
            required
          />
        </div>

        {/* Display Error Message */}
        {error && (
          <div className="mb-4 text-red-500 text-sm">
            {error}
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className={`bg-blue-500 text-white p-2 rounded-lg w-full hover:bg-blue-600 transition-colors ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Signing In...' : 'Sign In'}
        </button>

        {/* Sign-Up Link */}
        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{' '}
          <Link href="/signup">
            <span className="text-blue-500 hover:underline cursor-pointer">
              Sign Up
            </span>
          </Link>
        </p>
      </form>
    </div>
  );
}
