import Link from "next/link";

export function NavBar() {
  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Travito
        </Link>
        <div className="space-x-4">
          <Link href="/groups" className="text-white hover:text-blue-200">
            Groups
          </Link>
          <Link href="/itinerary" className="text-white hover:text-blue-200">
            Itinerary
          </Link>
          <Link href="/bookings" className="text-white hover:text-blue-200">
            Bookings
          </Link>
          <Link href="/chat" className="text-white hover:text-blue-200">
            Chat
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
