"use client";

import React, { useState, useEffect } from 'react';

export default function Signin() {
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();  

  const [userSubmitted, setUserSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUserSubmitted(true);

    // window.location.href = '/success'; // Redirect to success page
  };

  useEffect(() => {
    if (userSubmitted) {
        fetch("http://127.0.0.1:5000/signin", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
        // credientials need to be included to accept response cookies from the server
        credentials: "include",
        }).then((response) => {
            response.json().then((data) => {
                console.log(data);
            })
        })
    }
  }, [userSubmitted]);

  useEffect(() => {
    console.log(password);
  }, [password]);

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-80">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
        <div className="mb-4">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            // bug where setPassword may not store the correct value
            onChange={(e) => setPassword(e.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.value)}
            className="w-full p-2 border border-gray-300 rounded-lg"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg w-full">Sign In</button>
      </form>
    </div>
  );
}
