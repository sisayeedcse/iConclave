"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const mainOrganizers = [
  { name: "Premier University", src: "/brand/organizers/pu.png" },
  { name: "IEEE Premier University Student Branch", src: "/brand/organizers/ieee-pusb.png" },
];

const associationLogos = [
  { name: "Premier University Robotics Club", src: "/brand/organizers/purc.png" },
  { name: "Premier University Computer Club", src: "/brand/organizers/pucc.png" },
  { name: "IEEE Women in Engineering", src: "/brand/organizers/wie.png" },
  { name: "IEEE Computer Society", src: "/brand/organizers/cs.png" },
  { name: "IEEE Robotics and Automation Society", src: "/brand/organizers/ras.png" },
  { name: "IEEE Power & Energy Society", src: "/brand/organizers/pes.png" },
];

export function Organizers() {
  return (
    <section className="section-padding bg-white border-t border-[#E7E8EC]">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center">
          
          {/* Organized By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-16 md:mb-24 w-full"
          >
            <span className="text-label text-[#8A8F98] block mb-8 uppercase tracking-widest text-sm">Organized By</span>
            <div className="flex flex-wrap items-center justify-center gap-10 md:gap-20">
              {mainOrganizers.map((logo) => (
                <div key={logo.name} className="relative h-16 md:h-24 w-[200px] md:w-[280px]">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 200px, 280px"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* In Association With */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full"
          >
            <span className="text-label text-[#8A8F98] block mb-8 uppercase tracking-widest text-sm">In Association With</span>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {associationLogos.map((logo) => (
                <div key={logo.name} className="relative h-12 md:h-16 w-[120px] md:w-[160px]">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    className="object-contain hover:scale-105 transition-transform duration-300 grayscale hover:grayscale-0 opacity-70 hover:opacity-100"
                    sizes="(max-width: 768px) 120px, 160px"
                  />
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
