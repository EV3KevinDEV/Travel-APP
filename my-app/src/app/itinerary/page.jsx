// Itinerary.js

"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Adjust import based on Next.js version

export default function ItineraryPage({ params }) {
  const [events, setEvents] = useState([]);
  const [newEvent, setNewEvent] = useState({
    date: "",
    time: "",
    description: "",
  });
  const [showEventForm, setShowEventForm] = useState(false);
  const [editingEvent, setEditingEvent] = useState(null);
  const router = useRouter();

  const groupId = params.groupId; // Assuming you're using dynamic routing and groupId is in params

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/signin");
    } else {
      fetchEvents(token);
    }
  }, []);

  const fetchEvents = async (token) => {
    try {
      const response = await fetch(
        `http://localhost:5000/groups/${groupId}/itinerary`,
        {
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setEvents(data);
      } else {
        console.error("Failed to fetch events");
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
  };

  const handleAddOrUpdateEvent = async () => {
    const token = localStorage.getItem("token");
    if (!newEvent.date || !newEvent.time || !newEvent.description) {
      alert("Please fill in all fields");
      return;
    }

    try {
      let response;
      if (editingEvent) {
        // Update existing event
        response = await fetch(
          `http://localhost:5000/groups/${groupId}/itinerary/${editingEvent.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
            body: JSON.stringify(newEvent),
          }
        );
      } else {
        // Add new event
        response = await fetch(
          `http://localhost:5000/groups/${groupId}/itinerary`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: token,
            },
            body: JSON.stringify(newEvent),
          }
        );
      }

      if (response.ok) {
        const event = await response.json();
        if (editingEvent) {
          setEvents(
            events.map((e) => (e.id === event.id ? event : e))
          );
          setEditingEvent(null);
        } else {
          setEvents([...events, event]);
        }
        setNewEvent({ date: "", time: "", description: "" });
        setShowEventForm(false);
      } else {
        console.error("Failed to save event");
      }
    } catch (error) {
      console.error("Error saving event:", error);
    }
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event);
    setNewEvent({
      date: event.date,
      time: event.time,
      description: event.description,
    });
    setShowEventForm(true);
  };

  const handleDeleteEvent = async (eventId) => {
    const token = localStorage.getItem("token");
    try {
      const response = await fetch(
        `http://localhost:5000/groups/${groupId}/itinerary/${eventId}`,
        {
          method: "DELETE",
          headers: {
            Authorization: token,
          },
        }
      );
      if (response.ok) {
        setEvents(events.filter((event) => event.id !== eventId));
      } else {
        console.error("Failed to delete event");
      }
    } catch (error) {
      console.error("Error deleting event:", error);
    }
  };

  const sortedEvents = events.slice().sort((a, b) => {
    const dateA = new Date(`${a.date}T${a.time}`);
    const dateB = new Date(`${b.date}T${b.time}`);
    return dateA - dateB;
  });

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Itinerary</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {sortedEvents.map((event) => (
          <div key={event.id} className="mb-4 pb-4 border-b last:border-b-0">
            <div className="font-semibold">
              {event.date} - {event.time}
            </div>
            <div>{event.description}</div>
            <div className="mt-2">
              <button
                className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600 mr-2"
                onClick={() => handleEditEvent(event)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                onClick={() => handleDeleteEvent(event.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <button
        className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        onClick={() => {
          setShowEventForm(true);
          setEditingEvent(null);
          setNewEvent({ date: "", time: "", description: "" });
        }}
      >
        Add New Event
      </button>

      {showEventForm && (
        <div className="mt-4 bg-white p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold mb-4">
            {editingEvent ? "Edit Event" : "Add New Event"}
          </h2>
          <div className="mb-2">
            <label className="block text-gray-700">Date</label>
            <input
              type="date"
              value={newEvent.date}
              onChange={(e) =>
                setNewEvent({ ...newEvent, date: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Time</label>
            <input
              type="time"
              value={newEvent.time}
              onChange={(e) =>
                setNewEvent({ ...newEvent, time: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-2">
            <label className="block text-gray-700">Description</label>
            <input
              type="text"
              value={newEvent.description}
              onChange={(e) =>
                setNewEvent({ ...newEvent, description: e.target.value })
              }
              className="w-full p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mr-2"
            onClick={handleAddOrUpdateEvent}
          >
            {editingEvent ? "Update Event" : "Save Event"}
          </button>
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600"
            onClick={() => {
              setShowEventForm(false);
              setEditingEvent(null);
              setNewEvent({ date: "", time: "", description: "" });
            }}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
}
