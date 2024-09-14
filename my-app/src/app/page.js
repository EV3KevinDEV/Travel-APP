import React from 'react';
import Link from "next/link";

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
            
              <div className='w-full flex justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 mb-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                                          </svg></div>

              <h3 className="text-xl font-medium">Create Group</h3>
              <p className="mt-2 text-gray-600">Create and manage travel groups</p>
            </div>
            
          </a>

          {/* <!-- Feature Card 2: Shared Itinerary --> */}
          <a href="/itinerary" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
                                      <div className='w-full flex justify-center'>

                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 mb-4">
              <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
            </svg>
            </div>

              <h3 className="text-xl font-medium">Shared Itinerary</h3>
              <p className="mt-2 text-gray-600">Plan your trip together</p>
            </div>
          </a>

          {/* <!-- Feature Card 3: Bookings --> */}
          <a href="/bookings" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
            
                          <div className='w-full flex justify-center'>

            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-12 mb-4">
  <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
</svg>

</div>

              <h3 className="text-xl font-medium">Bookings</h3>
              <p className="mt-2 text-gray-600">Book flights, hotels, and car rentals</p>
            </div>
          </a>

          {/* <!-- Feature Card 4: Group Chat --> */}
          <a href="/chat" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
            
                          <div className='w-full flex justify-center'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-12 mb-4">
  <path fill-rule="evenodd" d="M1 8c0-3.43 3.262-6 7-6s7 2.57 7 6-3.262 6-7 6c-.423 0-.838-.032-1.241-.094-.9.574-1.941.948-3.06 1.06a.75.75 0 0 1-.713-1.14c.232-.378.395-.804.469-1.26C1.979 11.486 1 9.86 1 8Z" clip-rule="evenodd" />
</svg>
</div>

              <h3 className="text-xl font-medium">Group Chat</h3>
              <p className="mt-2 text-gray-600">Stay connected with your travel buddies</p>
            </div>
          </a>

          {/* <!-- Feature Card 5: Location Sharing --> */}
          <a href="#" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
            
                          <div className='w-full flex justify-center'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-12 mb-4">
  <path fill-rule="evenodd" d="m7.539 14.841.003.003.002.002a.755.755 0 0 0 .912 0l.002-.002.003-.003.012-.009a5.57 5.57 0 0 0 .19-.153 15.588 15.588 0 0 0 2.046-2.082c1.101-1.362 2.291-3.342 2.291-5.597A5 5 0 0 0 3 7c0 2.255 1.19 4.235 2.292 5.597a15.591 15.591 0 0 0 2.046 2.082 8.916 8.916 0 0 0 .189.153l.012.01ZM8 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" clip-rule="evenodd" />
</svg>

</div>
              <h3 className="text-xl font-medium">Location Sharing</h3>
              <p className="mt-2 text-gray-600">Keep track of your group members</p>
            </div>
          </a>

          {/* <!-- Feature Card 6: Local Recommendations --> */}
          <a href="#" className="block">
            <div className="bg-custom-white p-8 text-center rounded-lg shadow-lg hover:shadow-2xl border border-custom-green transition duration-200">
            
                          <div className='w-full flex justify-center'>

            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="size-12 mb-4">
  <path d="M2.09 15a1 1 0 0 0 1-1V8a1 1 0 1 0-2 0v6a1 1 0 0 0 1 1ZM5.765 13H4.09V8c.663 0 1.218-.466 1.556-1.037a4.02 4.02 0 0 1 1.358-1.377c.478-.292.907-.706.989-1.26V4.32a9.03 9.03 0 0 0 0-2.642c-.028-.194.048-.394.224-.479A2 2 0 0 1 11.09 3c0 .812-.08 1.605-.235 2.371a.521.521 0 0 0 .502.629h1.733c1.104 0 2.01.898 1.901 1.997a19.831 19.831 0 0 1-1.081 4.788c-.27.747-.998 1.215-1.793 1.215H9.414c-.215 0-.428-.035-.632-.103l-2.384-.794A2.002 2.002 0 0 0 5.765 13Z" />
</svg>
</div>

              <h3 className="text-xl font-medium">Local Recommendations</h3>
              <p className="mt-2 text-gray-600">Discover the best local experiences</p>
            </div>
          </a>
        </section>

        {/* <!-- Add Sign-Up and Sign-In Links --> */}
        <section className="text-center my-12">
          <Link href="/signup" className="text-blue-500 hover:text-blue-700">
            Create an Account
          </Link>
          <span className="mx-2">|</span>
          <Link href="/signin" className="text-blue-500 hover:text-blue-700">
            Sign In
          </Link>
        </section>
      </div>
    </>
  );
}
