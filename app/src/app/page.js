import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <>
      <div className="text-center">
        {/* <!-- Welcome Section --> */}
        <section className="text-center my-12">
          <h2 className="text-4xl font-bold mb-4">Welcome to Travito</h2>
          <p className="text-xl mb-8 text-gray-700">Your all-in-one travel companion</p>
        </section>

        {/* <!-- Features Section --> */}
        <section className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* <!-- Feature Card 1: Group Planning --> */}
          <a href="/groups" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
              <svg className="w-12 h-12 mx-auto text-custom-blue mb-4" fill="none" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M5.121 19H3a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v7M15 19v1a2 2 0 002 2h5l-6-7m0 0l-6 7m6-7v-5a2 2 0 012-2h.01M8 16H5a2 2 0 00-2 2v3h3v-3a2 2 0 012-2zm10-10h.01"></path>
              </svg>
              <h3 className="text-xl font-medium">Create Group</h3>
              <p className="mt-2 text-gray-600">Create and manage travel groups</p>
            </div>
          </a>

          {/* <!-- Feature Card 2: Shared Itinerary --> */}
          <a href="/itinerary" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
              <svg className="w-12 h-12 mx-auto text-custom-blue mb-4" fill="none" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M3 7h18M3 7v6a4 4 0 004 4h10a4 4 0 004-4V7m-18 0a4 4 0 004-4h10a4 4 0 004 4M4 17a4 4 0 004 4h6a4 4 0 004-4m-4 4a4 4 0 004-4M4 17H3"></path>
              </svg>
              <h3 className="text-xl font-medium">Shared Itinerary</h3>
              <p className="mt-2 text-gray-600">Plan your trip together</p>
            </div>
          </a>

          {/* <!-- Feature Card 3: Bookings --> */}
          <a href="/bookings" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
              <svg className="w-12 h-12 mx-auto text-custom-blue mb-4" fill="none" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M17 13l5-5m-5 5l-5-5m5 5V3a2 2 0 00-2-2H5a2 2 0 00-2 2v7a2 2 0 002 2h7v2H3v6h9v-6H9v-2m12 12H7a2 2 0 002-2h10a2 2 0 002 2v-6a2 2 0 00-2-2"></path>
              </svg>
              <h3 className="text-xl font-medium">Bookings</h3>
              <p className="mt-2 text-gray-600">Book flights, hotels, and car rentals</p>
            </div>
          </a>

          {/* <!-- Feature Card 4: Group Chat --> */}
          <a href="/chat" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
              <svg className="w-12 h-12 mx-auto text-custom-blue mb-4" fill="none" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M8 10h6M8 14h4m-5 7H5v-2a2 2 0 00-2-2h1v-1M6 3h12a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V5a2 2 0 012-2"></path>
              </svg>
              <h3 className="text-xl font-medium">Group Chat</h3>
              <p className="mt-2 text-gray-600">Stay connected with your travel buddies</p>
            </div>
          </a>

          {/* <!-- Feature Card 5: Location Sharing --> */}
          <a href="#" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
              <svg className="w-12 h-12 mx-auto text-custom-blue mb-4" fill="none" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M5 11l7-7 7 7m-7 7V5m7 7h1a2 2 0 00-2 2H6a2 2 0 01-2 2h7"></path>
              </svg>
              <h3 className="text-xl font-medium">Location Sharing</h3>
              <p className="mt-2 text-gray-600">Keep track of your group members</p>
            </div>
          </a>

          {/* <!-- Feature Card 6: Local Recommendations --> */}
          <a href="#" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
              <svg className="w-12 h-12 mx-auto text-custom-blue mb-4" fill="none" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M5 3v16a2 2 0 001 1h10a2 2 0 001-1V5l-2-2H6a2 2 0 00-1 1H4m0 10h16M5 7h6m0 0v4m-2 0h2v6"></path>
              </svg>
              <h3 className="text-xl font-medium">Local Recommendations</h3>
              <p className="mt-2 text-gray-600">Discover the best local experiences</p>
            </div>
          </a>
        </section>

        {/* <!-- Add Sign-Up and Sign-In Links --> */}
        <section className="text-center my-12">
          <Link to="/signup" className="text-blue-500 hover:text-blue-700">
            Create an Account
          </Link>
          <span className="mx-2">|</span>
          <Link to="/signin" className="text-blue-500 hover:text-blue-700">
            Sign In
          </Link>
        </section>
      </div>
    </>
  );
}
