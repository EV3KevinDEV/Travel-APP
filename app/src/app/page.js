import React from "react";
import FeatureCard from "/src/app/components/FeatureCard";

export default function Home() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Travito</h1>
        <p className="text-xl mb-8">Your all-in-one travel companion</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FeatureCard
            title="Group Planning"
            description="Create and manage travel groups"
            link="/groups"
          />
          <FeatureCard
            title="Shared Itinerary"
            description="Plan your trip together"
            link="/itinerary"
          />
          <FeatureCard
            title="Bookings"
            description="Book flights, hotels, and car rentals"
            link="/bookings"
          />
          <FeatureCard
            title="Group Chat"
            description="Stay connected with your travel buddies"
            link="/chat"
          />
          <FeatureCard
            title="Location Sharing"
            description="Keep track of your group members"
            link="#"
          />
          <FeatureCard
            title="Local Recommendations"
            description="Discover the best local experiences"
            link="#"
          />
        </div>
      </div>
    </>
  );
}
