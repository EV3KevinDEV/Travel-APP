export default function Page() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Bookings</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <BookingSection title="Flights" />
        <BookingSection title="Hotels" />
        <BookingSection title="Car Rentals" />
      </div>
    </div>
  );
}

function BookingSection({ title }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-xl font-semibold mb-4">{title}</h2>
      <p className="mb-4">Find the best {title.toLowerCase()} for your trip.</p>
      <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
        Search {title}
      </button>
    </div>
  );
}
