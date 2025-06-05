import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-neutral-900 text-white bottom-0 left-0">
      <div className="container mx-auto px-6 py-12 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
        <div>
          <Image
            alt="Logo"
            src="/logo1.png"
            className="rounded-full mb-4"
            width={40}
            height={40}
          />
          <p className="text-neutral-400 text-sm">
            High-quality products at unbeatable prices. Shop smart, live better.
          </p>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>
              <Link href="/products">All Products</Link>
            </li>
            <li>
              <Link href="#">Categories</Link>
            </li>
            <li>
              <Link href="#">New Arrivals</Link>
            </li>
            <li>
              <Link href="#">Best Deals</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-sm text-neutral-300">
            <li>
              <Link href="#">Contact Us</Link>
            </li>
            <li>
              <Link href="#">FAQ</Link>
            </li>
            <li>
              <Link href="#">Returns</Link>
            </li>
            <li>
              <Link href="#">Privacy Policy</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 text-xl text-white">
            <a href="#" aria-label="Facebook">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter">
              <Twitter />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-neutral-800 mt-8 py-4 text-center text-sm text-neutral-400">
        &copy; {new Date().getFullYear()} My Ecommerce. All rights reserved.
      </div>
    </footer>
  );
}
