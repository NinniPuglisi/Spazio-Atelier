"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`
          fixed top-0 left-0 w-full z-50
          transition-all duration-500
          ${
            scrolled
              ? "bg-[#f8f7f4]/95 backdrop-blur-md border-b border-neutral-200"
              : "bg-transparent"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-16 py-5 md:py-8 flex items-center justify-between">

          <Link
            href="/"
            className={`
              uppercase
              tracking-[0.22em]
              text-[10px]
              md:text-xs
              transition-colors
              duration-500
              ${scrolled ? "text-black" : "text-white"}
            `}
          >
            <span className="md:hidden">
              Spazio Atelier
            </span>

            <span className="hidden md:inline">
              Ninni Puglisi | Spazio Atelier
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-12 text-sm">

            <Link
              href="/"
              className={scrolled ? "text-black" : "text-white"}
            >
              Home
            </Link>

            <Link
              href="/studio"
              className={scrolled ? "text-black" : "text-white"}
            >
              Studio
            </Link>

            <Link
              href="/projects"
              className={scrolled ? "text-black" : "text-white"}
            >
              Projects
            </Link>

            <Link
              href="/contact"
              className={scrolled ? "text-black" : "text-white"}
            >
              Contact
            </Link>

          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            className={`
              md:hidden
              text-3xl
              leading-none
              relative z-[60]
              ${scrolled ? "text-black" : "text-white"}
            `}
            aria-label="Apri menu"
          >
            ☰
          </button>

        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[999] bg-[#f8f7f4] flex flex-col">

          <div className="flex justify-end p-6">

            <button
              onClick={() => setMenuOpen(false)}
              className="text-4xl text-black"
              aria-label="Chiudi menu"
            >
              ✕
            </button>

          </div>

          <div className="flex-1 flex flex-col items-center justify-center gap-8">

            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light"
            >
              Home
            </Link>

            <Link
              href="/studio"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light"
            >
              Studio
            </Link>

            <Link
              href="/projects"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light"
            >
              Projects
            </Link>

            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light"
            >
              Contact
            </Link>

            <div className="flex gap-8 pt-6">

              <a
                href="https://www.instagram.com/NinniPuglisi_SpazioAtelier/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} />
              </a>

              <a
                href="https://www.facebook.com/profile.php?id=100063646356789"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF size={22} />
              </a>

            </div>

          </div>

        </div>
      )}
    </>
  );
}