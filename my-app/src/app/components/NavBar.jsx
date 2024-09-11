import Link from "next/link";

export function NavBar({ user }) {
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

          {/* User Info Section */}
          <div className="inline-block float-right space-x-4">
            {user ? (
              // If the user is logged in, display their name or email
              <>
                <span className="text-lg">Welcome, {user.name || user.email}</span>
                <Link href="/profile">
                  <a className="text-white text-lg hover:underline">Profile</a>
                </Link>
              </>
            ) : (
              // If the user is not logged in, show the "Sign In" link
              <Link href="/signin">
                <a className="text-white text-lg hover:underline">Sign In</a>
              </Link>
            )}
          </div>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
