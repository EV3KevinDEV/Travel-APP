import React from "react";
import Link from "next/link";

export default function Page() {
  const groups = [
    {
      id: 1,
      name: "Summer Vacation 2023",
      members: 5,
      destination: "Bali, Indonesia",
    },
    {
      id: 2,
      name: "City Break: Paris",
      members: 3,
      destination: "Paris, France",
    },
    {
      id: 3,
      name: "Hiking Trip",
      members: 4,
      destination: "Rocky Mountains, USA",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Travel Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <Link href={`/groups/${group.id}`} key={group.id}>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
              <p className="text-gray-600 mb-2">{group.destination}</p>
              <p>{group.members} members</p>
            </div>
          </Link>
        ))}
      </div>
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Create New Group
      </button>
    </div>
  );
}
