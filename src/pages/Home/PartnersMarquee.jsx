import { Server, Globe, Shield, Zap, Coins, Plane } from "lucide-react";

const logos = [
  { name: "Cherry Servers", icon: Server },
  { name: "Hostinger", icon: Globe },
  { name: "NordVPN", icon: Shield },
  { name: "Surfshark", icon: Zap },
  { name: "Coinzilla", icon: Coins },
  { name: "Alternative Airlines", icon: Plane },
];

const PartnersMarquee = () => {
  return (
    <section className="bg-[#0b1121] py-10 overflow-hidden">
      <div className="relative w-full">
        {/* Marquee */}
        <div className="marquee-track">
          {/* Duplicate for infinite loop */}
          {[...logos, ...logos].map((logo, index) => {
            const IconComponent = logo.icon;
            return (
              <div key={index} className="marquee-logo flex items-center justify-center gap-2">
                <IconComponent size={32} className="text-white opacity-80 hover:opacity-100 transition" />
                <span className="text-white text   md:text-lg lg:text-xl opacity-70">{logo.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
