export default function Page() {
  const events = [
    {
      id: 1,
      date: "2023-07-01",
      time: "09:00",
      description: "Flight to Paris",
    },
    {
      id: 2,
      date: "2023-07-01",
      time: "14:00",
      description: "Check-in at Hotel",
    },
    {
      id: 3,
      date: "2023-07-02",
      time: "10:00",
      description: "Visit Eiffel Tower",
    },
    {
      id: 4,
      date: "2023-07-02",
      time: "19:00",
      description: "Dinner at Le Chateaubriand",
    },
  ];

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Itinerary</h1>
      <div className="bg-white shadow-md rounded-lg p-6">
        {events.map((event) => (
          <div key={event.id} className="mb-4 pb-4 border-b last:border-b-0">
            <div className="font-semibold">
              {event.date} - {event.time}
            </div>
            <div>{event.description}</div>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Add New Event
      </button>
    </div>
  );
}
