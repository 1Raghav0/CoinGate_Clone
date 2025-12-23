import {
  MessageSquare,
  Database,
  Gamepad2,
  Megaphone,
  ShoppingBag,
  Briefcase,
  ShieldCheck,
  Monitor,
  Code2,
  LineChart,
  Plane,
  Wifi,
  Server,
} from "lucide-react";

const categories = [
  { name: "Communication", icon: MessageSquare },
  { name: "Data centers", icon: Database },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Marketing & Advertising", icon: Megaphone },
  { name: "Online Stores", icon: ShoppingBag },
  { name: "Professional Services", icon: Briefcase },
  { name: "Proxy", icon: ShieldCheck },
  { name: "Remote Desktop Protocols (RDP)", icon: Monitor },
  { name: "Software & Web Services", icon: Code2 },
  { name: "Trading Platforms", icon: LineChart },
  { name: "Travel & Leisure", icon: Plane },
  { name: "VPN", icon: Wifi },
  { name: "VPS & Hosting", icon: Server },
];

const ExploreCategories = () => {
  return (
    <section className="bg-[#f7f8fa] px-6 py-10">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl p-8 md:p-14">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0b1121]">
            Explore categories
          </h2>
          <p className="text-gray-500 text-sm md:text-base mt-2 max-w-2xl">
            Easily browse stores by interest. Click on each card to discover a
            variety of stores accepting crypto payments.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <button
                key={cat.name}
                className="group border border-gray-200 rounded-xl p-4 flex flex-col items-center text-center hover:border-indigo-500 hover:shadow-sm transition"
              >
                <div className="w-22 h-22 rounded-full bg-indigo-50 flex items-center justify-center mb-3 group-hover:bg-indigo-100 transition">
                  <Icon className="w-12 h-12 text-indigo-600" />
                </div>
                <span className="text-xs md:text-sm font-medium text-gray-700">
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExploreCategories;
