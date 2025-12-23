import { useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronUp,
  MessageSquare,
  Database,
  Gamepad2,
  Megaphone,
  ShoppingBag,
  Briefcase,
  Globe,
  Monitor,
  Code2,
  LineChart,
  Plane,
  ShieldCheck,
  Server,
} from "lucide-react";


/* ================= DATA ================= */

const categories = [
  { name: "All", icon: Globe },
  { name: "Communication", icon: MessageSquare },
  { name: "Data centers", icon: Database },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Marketing & Advertising", icon: Megaphone },
  { name: "Online Stores", icon: ShoppingBag },
  { name: "Professional Services", icon: Briefcase },
  { name: "Proxy", icon: ShieldCheck },
  { name: "Remote Desktop Protocols", icon: Monitor },
  { name: "Software & Web Services", icon: Code2 },
  { name: "Trading Platforms", icon: LineChart },
  { name: "Travel & Leisure", icon: Plane },
  { name: "VPN", icon: ShieldCheck },
  { name: "VPS & Hosting", icon: Server },
];


const stores = [
  {
    id: 1,
    name: "1fichier",
    description:
      "1fichier is a cloud storage service providing secure file hosting, sharing, and backup.",
    category: "Software & Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/1fichier-logo.png",
  },
  {
    id: 2,
    name: "24Instant",
    description:
      "24Instant is an official reseller of cloud and file-hosting premium access.",
    category: "Online Stores",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
  },
  {
    id: 3,
    name: "2Cloud",
    description:
      "2Cloud provides reliable and privacy-focused VPS and dedicated servers.",
    category: "Software & Web Services",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    id: 4,
    name: "2ndNumber",
    description:
      "2ndNumber offers virtual phone numbers for SMS, calls, and app verification.",
    category: "Communication",
    logo: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
  },
  {
    id: 5,
    name: "360Clash",
    description:
      "360Clash is a gaming platform offering private servers and tools.",
    category: "Gaming",
    logo: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
  },
  {
    id: 6,
    name: "99RDP",
    description:
      "99RDP provides high-performance RDP servers and VPS hosting solutions.",
    category: "Remote Desktop Protocols (RDP)",
    logo: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
  },
  {
    id: 7,
    name: "1fichier",
    description:
      "1fichier is a cloud storage service providing secure file hosting, sharing, and backup.",
    category: "Software & Web Services",
    logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/1fichier-logo.png",
  },
  {
    id: 8,
    name: "24Instant",
    description:
      "24Instant is an official reseller of cloud and file-hosting premium access.",
    category: "Online Stores",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
  },
  {
    id: 9,
    name: "2Cloud",
    description:
      "2Cloud provides reliable and privacy-focused VPS and dedicated servers.",
    category: "Software & Web Services",
    logo: "https://cdn-icons-png.flaticon.com/512/5968/5968705.png",
  },
  {
    id: 10,
    name: "2ndNumber",
    description:
      "2ndNumber offers virtual phone numbers for SMS, calls, and app verification.",
    category: "Communication",
    logo: "https://cdn-icons-png.flaticon.com/512/906/906175.png",
  },
  {
    id: 11,
    name: "360Clash",
    description:
      "360Clash is a gaming platform offering private servers and tools.",
    category: "Gaming",
    logo: "https://cdn-icons-png.flaticon.com/512/1055/1055646.png",
  },
  {
    id: 12,
    name: "99RDP",
    description:
      "99RDP provides high-performance RDP servers and VPS hosting solutions.",
    category: "Remote Desktop Protocols (RDP)",
    logo: "https://cdn-icons-png.flaticon.com/512/906/906343.png",
  },
];

/* ================= COMPONENT ================= */

const StoresPage = ({ activeCategory, setActiveCategory }) => {
const [search, setSearch] = useState("");
const [showPaymentFilter, setShowPaymentFilter] = useState(true);
const [showCategories, setShowCategories] = useState(true);

const [paymentFilters, setPaymentFilters] = useState({
  direct: true,
  gift: true,
});

  const filteredStores = stores.filter((store) => {
    const matchesCategory =
      activeCategory === "All" || store.category === activeCategory;
    const matchesSearch = store.name
      .toLowerCase()
      .includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-[#f7f8fa] min-h-screen px-4 sm:px-6 lg:px-10 py-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-8">

        {/* ================= SIDEBAR ================= */}
        <aside className="bg-white rounded-xl p-5 border border-gray-200 h-fit">
  {/* Search */}
  <div className="relative mb-6">
    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
    <input
      type="text"
      placeholder="Search"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="w-full pl-9 pr-3 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  {/* ================= Payment Type Filter ================= */}
  <div className="mb-6">
    <button
      onClick={() => setShowPaymentFilter(!showPaymentFilter)}
      className="w-full flex items-center justify-between text-sm font-semibold text-gray-700 mb-3"
    >
      Payment type filter
      {showPaymentFilter ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>

    {showPaymentFilter && (
      <div className="space-y-2 pl-1">
        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={paymentFilters.direct}
            onChange={() =>
              setPaymentFilters((p) => ({ ...p, direct: !p.direct }))
            }
            className="accent-indigo-600"
          />
          Pay direct
        </label>

        <label className="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            checked={paymentFilters.gift}
            onChange={() =>
              setPaymentFilters((p) => ({ ...p, gift: !p.gift }))
            }
            className="accent-indigo-600"
          />
          Gift cards
        </label>
      </div>
    )}
  </div>

  {/* ================= Browse Categories ================= */}
  <div>
    <button
      onClick={() => setShowCategories(!showCategories)}
      className="w-full flex items-center justify-between text-sm font-semibold text-gray-700 mb-3"
    >
      Browse categories
      {showCategories ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
    </button>

    {showCategories && (
      <ul className="space-y-1">
        {categories.map(({ name, icon: Icon }) => (
          <li key={name}>
            <button
              onClick={() => {
                setActiveCategory(name);
                window.scrollTo(0, 0);
              }}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition ${
                activeCategory === name
                  ? "bg-indigo-50 text-indigo-600 font-medium"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              <Icon size={16} />
              {name}
            </button>
          </li>
        ))}
      </ul>
    )}
  </div>
</aside>


        {/* ================= MAIN CONTENT ================= */}
        <main>
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold text-[#0b1121]">
              All stores
            </h2>
            <span className="text-sm text-gray-500">
              Total: {filteredStores.length}
            </span>
          </div>

          {/* Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStores.map((store) => (
              <div
                key={store.id}
                className="bg-white border border-gray-200 rounded-xl p-5 hover:shadow-md transition"
              >
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={store.logo}
                    alt={store.name}
                    className="w-10 h-10 object-contain"
                  />
                  <h3 className="font-semibold text-[#0b1121]">
                    {store.name}
                  </h3>
                </div>

                <p className="text-sm text-gray-500 leading-relaxed mb-4">
                  {store.description}
                </p>

                <span className="inline-block text-xs px-2 py-1 rounded bg-gray-100 text-gray-600">
                  {store.category}
                </span>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default StoresPage;
