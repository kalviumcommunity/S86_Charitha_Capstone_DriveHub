import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="pt-20 bg-gray-50">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
          
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight drop-shadow-md">
              Hit the Road. <br /> Ride Your Way.
            </h1>
            <p className="text-lg mb-6 drop-shadow-md">
              DriveHub lets you rent cars, bikes, and more instantly. Browse, book, and drive — all in one seamless platform.
            </p>
            <Link
              to="/vehicles"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
            >
              Browse Vehicles
            </Link>
          </motion.div>

          {/* Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center items-center space-x-4"
          >
            {/* Car SVG */}
            <svg className="w-48 h-48" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect x="4" y="28" width="56" height="16" rx="4" fill="#ef4444" />
              <circle cx="16" cy="48" r="6" fill="#111827" />
              <circle cx="48" cy="48" r="6" fill="#111827" />
              <rect x="12" y="20" width="40" height="12" rx="2" fill="#f87171" />
            </svg>

            {/* Bike SVG */}
            <svg className="w-32 h-32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <circle cx="16" cy="48" r="6" fill="#3b82f6" />
              <circle cx="48" cy="48" r="6" fill="#3b82f6" />
              <line x1="16" y1="48" x2="32" y2="24" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>
              <line x1="32" y1="24" x2="48" y2="48" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>
              <line x1="32" y1="24" x2="32" y2="12" stroke="#3b82f6" strokeWidth="4" strokeLinecap="round"/>
            </svg>

            {/* Truck SVG */}
            <svg className="w-32 h-32" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
              <rect x="2" y="28" width="40" height="16" rx="2" fill="#facc15" />
              <rect x="42" y="32" width="18" height="12" rx="1" fill="#fcd34d" />
              <circle cx="12" cy="48" r="6" fill="#111827" />
              <circle cx="40" cy="48" r="6" fill="#111827" />
              <circle cx="54" cy="48" r="6" fill="#111827" />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-800">
            How DriveHub Works
          </h2>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Browse Vehicles */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <svg className="w-12 h-12 mx-auto mb-4 text-yellow-500" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="30" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path d="M20 44h24M20 20h24" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <h3 className="text-xl font-semibold mb-3">1️⃣ Browse Vehicles</h3>
              <p>Explore cars, bikes, and SUVs by type, price, and location with clear listings.</p>
            </motion.div>

            {/* Book Instantly */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <svg className="w-12 h-12 mx-auto mb-4 text-yellow-500" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 32h32M32 16v32" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <h3 className="text-xl font-semibold mb-3">2️⃣ Book Instantly</h3>
              <p>Select your vehicle, pick dates, and confirm your booking in seconds.</p>
            </motion.div>

            {/* Drive & Enjoy */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-lg shadow-md">
              <svg className="w-12 h-12 mx-auto mb-4 text-yellow-500" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
                <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="4" fill="none"/>
                <path d="M20 32h24" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
              <h3 className="text-xl font-semibold mb-3">3️⃣ Drive & Enjoy</h3>
              <p>Pick up your vehicle, drive safely, and manage bookings seamlessly on the platform.</p>
            </motion.div>

          </div>
        </div>
      </section>

{/* Features Section */}
<section className="py-16 bg-white text-gray-900">
  <div className="max-w-7xl mx-auto px-6 text-center">
    <h2 className="text-3xl font-bold mb-12">
      Why Choose DriveHub?
    </h2>
    <div className="grid md:grid-cols-3 gap-8">

      <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Car SVG */}
        <svg className="w-12 h-12 mx-auto mb-4 text-gray-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <rect x="4" y="28" width="56" height="16" rx="4" fill="currentColor" />
          <circle cx="16" cy="48" r="6" fill="#111827" />
          <circle cx="48" cy="48" r="6" fill="#111827" />
        </svg>
        <h3 className="text-xl font-semibold mb-3">🚗 Wide Selection</h3>
        <p>From hatchbacks to bikes, choose the perfect vehicle for your journey.</p>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Lightning SVG */}
        <svg className="w-12 h-12 mx-auto mb-4 text-gray-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 4 L24 32 H40 L32 60" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
        <h3 className="text-xl font-semibold mb-3">⚡ Instant Booking</h3>
        <p>Check availability in real-time and confirm your ride instantly.</p>
      </motion.div>

      <motion.div whileHover={{ scale: 1.05 }} className="bg-gray-100 p-6 rounded-lg shadow-md">
        {/* Shield SVG */}
        <svg className="w-12 h-12 mx-auto mb-4 text-gray-800" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg">
          <path d="M32 4 L60 16 V32 C60 48 32 60 32 60 C32 60 4 48 4 32 V16 Z" stroke="currentColor" strokeWidth="4" fill="none"/>
          <path d="M20 32 L28 40 L44 24" stroke="currentColor" strokeWidth="4" fill="none" strokeLinecap="round"/>
        </svg>
        <h3 className="text-xl font-semibold mb-3">🛡️ Secure & Reliable</h3>
        <p>Safe payments, verified owners, and transparent rentals for peace of mind.</p>
      </motion.div>

    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="bg-red-600 py-16 text-center text-white">
        <h2 className="text-3xl font-bold mb-6 drop-shadow-md">
          Ready to hit the road?
        </h2>
        <Link
          to="/register"
          className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-md"
        >
          Join DriveHub Today
        </Link>
      </section>

    </div>
  );
}
