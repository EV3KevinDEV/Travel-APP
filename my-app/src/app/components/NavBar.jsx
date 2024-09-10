import Link from "next/link";

export function NavBar() {
  return (
    <>
      {/* Header */}
      <header className="bg-custom-blue text-white text-center py-8 shadow-md">
        <h1 className="text-4xl font-bold tracking-tight">Travito</h1>
        <nav className="mt-4 space-x-4">
          <Link href="#">
            <a className="text-white text-lg hover:underline">Groups</a>
          </Link>
          <Link href="#">
            <a className="text-white text-lg hover:underline">Itinerary</a>
          </Link>
          <Link href="#">
            <a className="text-white text-lg hover:underline">Bookings</a>
          </Link>
          <Link href="#">
            <a className="text-white text-lg hover:underline">Chat</a>
          </Link>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
