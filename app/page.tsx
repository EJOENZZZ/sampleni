import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-50">

      {/* ================= NAVBAR ================= */}
      <nav className="w-full bg-white shadow-md py-4 px-10 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.png"
            alt="RetailHub Logo"
            width={40}
            height={40}
          />
          <span className="text-xl font-bold text-blue-700">RetailHub</span>
        </div>

        <div className="hidden md:flex gap-8 font-medium text-gray-700">
          <Link href="/" className="hover:text-blue-600 transition">Home</Link>
          <Link href="/products" className="hover:text-blue-600 transition">Products</Link>
          <Link href="/about" className="hover:text-blue-600 transition">About</Link>
          <Link href="/contact" className="hover:text-blue-600 transition">Contact</Link>
        </div>

        <div className="flex gap-4">
          <Link
            href="/login"
            className="px-5 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
          >
            Sign Up
          </Link>
        </div>
      </nav>

      {/* ================= HERO SECTION ================= */}
      <section className="relative flex items-center justify-center text-center text-white h-[85vh]">

        {/* Background Image */}
        <Image
          src="/retail-bg.jpg"   // put image inside public folder
          alt="Retail Background"
          fill
          className="object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-5xl font-bold mb-6">
            Transform Your Retail Business
          </h1>
          <p className="text-lg mb-8 text-gray-200">
            Powerful tools to manage inventory, monitor sales,
            and boost profits — all in one system.
          </p>

          <div className="flex justify-center gap-6">
            <Link
              href="/signup"
              className="px-8 py-3 rounded-full bg-blue-600 hover:bg-blue-700 transition font-semibold"
            >
              Start Free Trial
            </Link>
            <Link
              href="/products"
              className="px-8 py-3 rounded-full border border-white hover:bg-white hover:text-black transition font-semibold"
            >
              View Demo
            </Link>
          </div>
        </div>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-20 bg-white text-center">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-10">
          <div>
            <h2 className="text-4xl font-bold text-blue-600">1,200+</h2>
            <p className="text-gray-600 mt-2">Active Retail Stores</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-600">₱50M+</h2>
            <p className="text-gray-600 mt-2">Sales Processed</p>
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-600">99%</h2>
            <p className="text-gray-600 mt-2">Customer Satisfaction</p>
          </div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-10 text-center">
          <h2 className="text-3xl font-bold mb-12">
            Why Choose RetailHub?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">📦 Smart Inventory</h3>
              <p className="text-gray-600">
                Automated stock alerts and real-time tracking.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">💳 Sales Dashboard</h3>
              <p className="text-gray-600">
                Visual charts and performance monitoring.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition">
              <h3 className="text-xl font-semibold mb-4">🔒 Secure System</h3>
              <p className="text-gray-600">
                Safe transactions and protected user accounts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-blue-600 text-white text-center py-16">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Upgrade Your Business?
        </h2>
        <Link
          href="/signup"
          className="px-8 py-3 rounded-full bg-white text-blue-600 font-semibold hover:bg-gray-200 transition"
        >
          Create Account Now
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="bg-white border-t text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} RetailHub. All rights reserved.
      </footer>

    </div>
  );
}