import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 mt-32">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h3 className="text-white text-2xl font-bold mb-4">
            SOLEX
          </h3>
          <p className="text-sm">
            Premium footwear crafted for performance & style.
          </p>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-white font-semibold mb-4">Shop</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href="/category/men">Men</Link></li>
            <li><Link href="/category/women">Women</Link></li>
            <li><Link href="/category/accessories">Accessories</Link></li>
            <li><Link href="/shop">All Shoes</Link></li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-white font-semibold mb-4">Company</h4>
          <ul className="space-y-2 text-sm">
            <li>About Us</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Terms</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="text-white font-semibold mb-4">
            Stay Updated
          </h4>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="px-4 py-2 w-full rounded-l-md bg-gray-900 border border-gray-700 text-sm focus:outline-none"
            />
            <button className="px-4 bg-white text-black rounded-r-md text-sm font-semibold">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-6 text-sm">
        © {new Date().getFullYear()} SOLEX. All rights reserved.
      </div>
    </footer>
  );
}
