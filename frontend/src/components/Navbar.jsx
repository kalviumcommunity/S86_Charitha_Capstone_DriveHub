import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          🚗 DriveHub
        </Link>

        {/* Links */}
        <div className="flex space-x-6">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>
          <Link to="/vehicles" className="text-gray-700 hover:text-blue-600">
            Vehicles
          </Link>
          <Link to="/bookings" className="text-gray-700 hover:text-blue-600">
            My Bookings
          </Link>
          <Link to="/login" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}
