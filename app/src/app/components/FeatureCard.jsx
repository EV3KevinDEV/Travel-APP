import React from "react";
import Link from "next/link";

export default function FeatureCard({ title, description, link }) {
  return (
    <Link href={link} className="block">
      <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
        <h2 className="text-xl font-semibold mb-2">{title}</h2>
        <p>{description}</p>
      </div>
    </Link>
  );
}
