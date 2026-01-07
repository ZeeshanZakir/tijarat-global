"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Resources", href: "/resources" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // 🔹 Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-black/80 backdrop-blur-md shadow-lg"
            : "bg-transparent"
        }
      `}
    >
      <div
        className="
          mx-auto
          h-20
          flex
          items-center
          justify-between
          px-4
          sm:px-6
          md:px-8
          xl:px-12
          2xl:px-16
          max-w-screen-2xl
        "
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Tijarat Global Logo"
            width={140}
            height={40}
            priority
            className="
              w-[100px]
              sm:w-[110px]
              md:w-[120px]
              lg:w-[140px]
              h-auto
              transition-all
              duration-300
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`
                  text-white
                  text-sm
                  font-medium
                  pb-1
                  border-b-2
                  transition-all
                  duration-200
                  ${
                    isActive
                      ? "border-white"
                      : "border-transparent hover:border-white/60"
                  }
                `}
              >
                {item.name}
              </Link>
            );
          })}
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            className="w-7 h-7 transition-transform duration-300"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile / Tablet Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black/90 backdrop-blur-md">
          <div className="flex flex-col px-6 py-6 space-y-4">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`
                    text-white
                    text-base
                    font-medium
                    border-b
                    pb-2
                    transition-all
                    ${
                      isActive
                        ? "border-white"
                        : "border-transparent opacity-80 hover:opacity-100"
                    }
                  `}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </nav>
  );
}
