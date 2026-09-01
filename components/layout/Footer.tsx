import Link from "next/link";
import Image from "next/image";
import { competitions } from "@/data/competitions";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="bg-[#F7F8FA] border-t border-[#E7E8EC] pt-16 pb-8">
      <div className="container-wide">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-5">
            <Image
              src="/brand/iconclave-logo.png"
              alt="iConclave"
              width={499}
              height={94}
              className="h-7 w-auto mb-4"
            />
            <p className="text-[#5F6368] text-sm leading-relaxed max-w-xs">
              {siteConfig.tagline}
            </p>
            <p className="text-[#8A8F98] text-xs mt-4 leading-relaxed">
              {siteConfig.organizerLine}
            </p>
          </div>

          {/* Competitions */}
          <div className="md:col-span-4">
            <h3 className="text-label text-[#8A8F98] mb-5">Competitions</h3>
            <ul className="space-y-3">
              {competitions.map((comp) => (
                <li key={comp.slug}>
                  <Link
                    href={`/competitions/${comp.slug}`}
                    className="text-sm text-[#5F6368] hover:text-[#111111] transition-colors"
                  >
                    {comp.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Site Links */}
          <div className="md:col-span-3">
            <h3 className="text-label text-[#8A8F98] mb-5">Explore</h3>
            <ul className="space-y-3">
              {[
                { label: "Competitions", href: "/competitions" },
                { label: "Schedule", href: "/schedule" },
                { label: "About iConclave", href: "/about" },
                { label: "FAQ", href: "/faq" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#5F6368] hover:text-[#111111] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#E7E8EC] flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-xs text-[#8A8F98]">
            &copy; {siteConfig.year} iConclave &mdash; {siteConfig.university},{" "}
            {siteConfig.location}
          </p>
          <p className="text-xs text-[#8A8F98]">
            IDEAS. INTELLIGENCE. INNOVATION.
          </p>
        </div>
      </div>
    </footer>
  );
}
