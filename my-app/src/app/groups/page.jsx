// Page.js

"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Next.js 13+ useRouter import

export default function Page() {
  const [groups, setGroups] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/signin");
    } else {
      fetchGroups(token);
    }
  }, []);

  const fetchGroups = async (token) => {
    try {
      const response = await fetch("http://localhost:5000/groups", {
        headers: {
          Authorization: token,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setGroups(data);
      } else {
        // Handle unauthorized access
        router.push("/signin");
      }
    } catch (error) {
      console.error("Error fetching groups:", error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Travel Groups</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {groups.map((group) => (
          <Link href={`/groups/${group.id}`} key={group.id}>
            <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{group.name}</h2>
              <p className="text-gray-600 mb-2">{group.destination}</p>
              <p>{group.members.length} members</p>
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
