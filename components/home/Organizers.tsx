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
    <section className="py-24 bg-gradient-to-b from-[#F4F6F9] to-white border-t border-[#E7E8EC]">
      <div className="container-wide">
        <div className="flex flex-col items-center text-center">
          
          {/* Organized By */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="mb-20 w-full"
          >
            <span className="text-label text-[#8A8F98] block mb-10 uppercase tracking-widest text-sm">Organized By</span>
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {mainOrganizers.map((logo) => (
                <div 
                  key={logo.name} 
                  className="bg-white rounded-[24px] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E7E8EC]/60 flex items-center justify-center w-full max-w-[320px] aspect-[4/3] group"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 250px, 320px"
                    />
                  </div>
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
            <span className="text-label text-[#8A8F98] block mb-10 uppercase tracking-widest text-sm">In Association With</span>
            <div className="flex flex-wrap items-center justify-center gap-6">
              {associationLogos.map((logo) => (
                <div 
                  key={logo.name} 
                  className="bg-white rounded-[24px] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#E7E8EC]/60 flex items-center justify-center w-[160px] h-[120px] md:w-[240px] md:h-[160px] group"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={logo.src}
                      alt={logo.name}
                      fill
                      className="object-contain group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 160px, 240px"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
