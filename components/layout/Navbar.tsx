"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { siteConfig } from "@/data/site";

const navLinks = [
  { label: "Competitions", href: "/competitions" },
  { label: "Schedule", href: "/schedule" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-[#E7E8EC]"
            : "bg-transparent"
        }`}
      >
        <nav className="container-wide flex items-center justify-between h-16 md:h-[70px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0"
            aria-label="iConclave Home"
          >
            <Image
              src="/brand/iconclave-logo.png"
              alt="iConclave"
              width={499}
              height={94}
              priority
              className="h-7 md:h-8 w-auto"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative group ${
                  pathname === link.href ||
                  pathname.startsWith(link.href + "/")
                    ? "text-[#111111]"
                    : "text-[#5F6368] hover:text-[#111111]"
                }`}
              >
                {link.label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#111111] transition-all duration-300 ${
                    pathname === link.href ||
                    pathname.startsWith(link.href + "/")
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/competitions"
              className="inline-flex items-center gap-1.5 px-4 py-2 text-sm font-semibold bg-[#111111] text-white rounded-[10px] hover:bg-[#1455D9] transition-colors duration-200"
            >
              Register
              <ArrowUpRight size={14} />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg text-[#111111] hover:bg-[#F7F8FA] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-white pt-16 flex flex-col"
          >
            <div className="container-wide flex flex-col gap-1 pt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06, duration: 0.2 }}
                >
                  <Link
                    href={link.href}
                    className="block py-4 text-3xl font-bold font-display text-[#111111] border-b border-[#E7E8EC] hover:text-[#1455D9] transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="mt-8"
              >
                <Link
                  href="/competitions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 text-base font-semibold bg-[#111111] text-white rounded-[10px] hover:bg-[#1455D9] transition-colors"
                >
                  Register Now
                  <ArrowUpRight size={16} />
                </Link>
              </motion.div>
            </div>
            <div className="container-wide mt-auto pb-8">
              <p className="text-xs text-[#8A8F98]">
                {siteConfig.name} &mdash; {siteConfig.university}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
