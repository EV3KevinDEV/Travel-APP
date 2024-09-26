// pages/location-share.jsx

"use client";

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import withAuth from '../components/withAuth';

// Fix for default marker icon not showing in React Leaflet
delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
    'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

function LocationShare() {
  const [position, setPosition] = useState(null);
  const [error, setError] = useState(null);
  const [sharing, setSharing] = useState(false);
  const [sharedPositions, setSharedPositions] = useState([]);
  const router = useRouter();

  // Fetch existing shared locations
  useEffect(() => {
    const fetchSharedLocations = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/location`, {
          method: 'GET',
          credentials: 'include', // Include cookies
        });
        if (response.ok) {
          const data = await response.json();
          setSharedPositions(data.locations);
        } else {
          // Handle unauthorized access
          router.push('/signin');
        }
      } catch (err) {
        console.error('Error fetching shared locations:', err);
      }
    };

    fetchSharedLocations();
  }, [router]);

  // Get user's current location
  useEffect(() => {
    if (!navigator.geolocation) {
      setError('Geolocation is not supported by your browser.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        });
      },
      (err) => {
        setError('Unable to retrieve your location.');
        console.error(err);
      }
    );
  }, []);

  // Handle sharing location
  const handleShareLocation = async () => {
    if (!position) return;
    setSharing(true);
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/location`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies
        body: JSON.stringify(position),
      });

      if (response.ok) {
        const data = await response.json();
        setSharedPositions([...sharedPositions, data.location]);
        alert('Location shared successfully!');
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch (err) {
      console.error('Error sharing location:', err);
      alert('An error occurred while sharing your location.');
    } finally {
      setSharing(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">
        <h2 className="text-2xl font-bold mb-4 text-center">Share Your Location</h2>

        {error && <p className="text-red-500">{error}</p>}
        {position ? (
          <>
            <MapContainer
              center={[position.lat, position.lng]}
              zoom={13}
              style={{ height: '400px', width: '100%' }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[position.lat, position.lng]}>
                <Popup>You are here</Popup>
              </Marker>
              {sharedPositions.map((loc, index) => (
                <Marker key={index} position={[loc.lat, loc.lng]}>
                  <Popup>{loc.username} is here</Popup>
                </Marker>
              ))}
            </MapContainer>
            <button
              onClick={handleShareLocation}
              className={`mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50`}
              disabled={sharing}
            >
              {sharing ? 'Sharing...' : 'Share Location'}
            </button>
          </>
        ) : (
          !error && <p>Fetching your location...</p>
        )}
        <div className="mt-4 text-center">
          <Link href="/dashboard">
            <a className="text-blue-500 hover:underline">Back to Dashboard</a>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default withAuth(LocationShare);
