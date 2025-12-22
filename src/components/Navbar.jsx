import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ChevronLeft,
  CreditCard,
  Link,
  Plug,
  Code,
  LayoutGrid,
  Eye,
  ArrowLeftRight,
  Users,
  Wallet,
  RotateCcw,
  Gift,
  ShoppingBag,
  Store,
  Laptop,
  Plane,
  Gamepad2,
  Shirt,
  Server,
  Shield,
  Globe,
  BookOpen,
  Github,
  Activity,
  Book,
  FileText,
  Bitcoin,
  HelpCircle,
  RefreshCcw,
  Info,
  Briefcase,
  Mail,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [activeBusinessTab, setActiveBusinessTab] = useState("payments");
  const [showPersonal, setShowPersonal] = useState(false);
  const [activePersonalTab, setActivePersonalTab] = useState("buy");
  const [showDevelopers, setShowDevelopers] = useState(false);
  const [showResources, setShowResources] = useState(false);
  const [activeResourcesTab, setActiveResourcesTab] = useState("learning");
  const [activeMobileMenu, setActiveMobileMenu] = useState(null);
  const [activeBusinessAccordion, setActiveBusinessAccordion] = useState(null);
// "payments" | "exchange" | "giftcards" | null
const [activePersonalAccordion, setActivePersonalAccordion] = useState(null);
// "buy" | "giftcards" | "merchant" | null
const [activeResourcesAccordion, setActiveResourcesAccordion] = useState(null);
// "learning" | "company" | null
const [activeNav, setActiveNav] = useState(null);





  const navLinks = [
    { name: "Business", hasDropdown: true },
    { name: "Personal", hasDropdown: true },
    { name: "Pricing", hasDropdown: false },
    { name: "Developers", hasDropdown: true },
    { name: "Resources", hasDropdown: true },
  ];

  const businessContent = {
    payments: [
      {
        icon: LayoutGrid,
        title: "Checkout integration",
        desc: "Ready-made payment flow and interface",
      },
      {
        icon: Code,
        title: "Accept via API",
        desc: "Seamless integration for developers",
      },
      {
        icon: CreditCard,
        title: "Solutions",
        desc: "Tailored crypto payment setups",
      },
      {
        icon: Link,
        title: "Accept via payment link/bill",
        desc: "Simplify billing and payments",
      },
      { icon: Eye, title: "Demo", desc: "Test the CoinGate checkout" },
      {
        icon: Plug,
        title: "Accept via plugins",
        desc: "Integrate with your e-shop",
      },
    ],
    exchange: [
      {
        icon: ArrowLeftRight,
        title: "Crypto payouts",
        desc: "Send crypto to anyone",
      },
      {
        icon: Wallet,
        title: "Deposit, swap & withdraw",
        desc: "Manage digital assets quickly",
      },
      { icon: Users, title: "User management", desc: "Manage team access" },
      {
        icon: Wallet,
        title: "Multi-currency account",
        desc: "All your crypto assets in one place",
      },
      {
        icon: RotateCcw,
        title: "Merchant refunds",
        desc: "Make refunds hassle-free",
      },
    ],
    giftcards: [
      {
        icon: Gift,
        title: "Create your business gift card",
        desc: "Offer branded crypto cards",
      },
      {
        icon: ShoppingBag,
        title: "Buy gift cards",
        desc: "Shop with your crypto",
      },
      {
        icon: Store,
        title: "Gift cards wholesale",
        desc: "Trade digital assets quickly",
      },
    ],
  };

  const personalContent = {
    buy: [
      { icon: CreditCard, title: "Buy crypto with credit card", desc: "Instant card purchases" },
      { icon: Users, title: "Personal solutions", desc: "Visit our cryptocurrency hub" },
    ],
    giftcards: [
      { icon: Gift, title: "Browse all gift cards", desc: "Vast selection of brands" },
      { icon: Store, title: "Stores", desc: "Shop your favorite retailers" },
      { icon: Laptop, title: "Electronics", desc: "Latest gadgets & tech" },
      { icon: Plane, title: "Travel", desc: "Gift unforgettable getaways" },
      { icon: Gamepad2, title: "Gaming", desc: "Top platforms & credits" },
      { icon: Shirt, title: "Clothing", desc: "Style for every season" },
    ],
    merchant: [
      { icon: LayoutGrid, title: "Browse all categories", desc: "Discover where to spend crypto" },
      { icon: Store, title: "Online stores", desc: "Everyday essentials & more" },
      { icon: Server, title: "Hosting", desc: "Web services that accept crypto" },
      { icon: Shield, title: "VPNs", desc: "Freedom & privacy online" },
      { icon: Globe, title: "Proxy", desc: "Secure, seamless connections" },
      { icon: ArrowLeftRight, title: "Trading platforms", desc: "Tools for smarter trading" },
    ],
  };

  const resourcesContent = {
    learning: [
      { icon: Book, title: "Blog", desc: "Latest news & insights" },
      { icon: Globe, title: "Supported countries", desc: "Quick crypto payments made easy" },
      { icon: FileText, title: "Legal", desc: "Terms & policies" },
      { icon: Bitcoin, title: "Supported currencies", desc: "View all currencies" },
      { icon: HelpCircle, title: "FAQ/Help center", desc: "Answers to your questions" },
      { icon: RefreshCcw, title: "Exchange rates", desc: "Live crypto-fiat rates" },
    ],
    company: [
      { icon: Info, title: "About us", desc: "Our mission & team" },
      { icon: Briefcase, title: "Careers", desc: "Join our team" },
      { icon: Mail, title: "Contact us", desc: "Get in touch with us" },
    ],
  };


  return (
    <nav className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* LOGO */}
          <div className="flex items-center gap-2 shrink-0">
            <span className="text-2xl font-bold text-gray-900">coingate</span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden xl:flex items-center space-x-8">
            {/* BUSINESS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => {
                setShowBusiness(true);
                setActiveNav("Business");
              }}
              onMouseLeave={() => {
                setShowBusiness(false);
                setActiveNav(null);
              }}
            >
              <button className={`flex items-center gap-1 px-4 py-1.5 font-semibold cursor-pointer ${activeNav === "Business" ? "text-[#33cf4d] bg-green-50 rounded-lg" : "text-slate-600 hover:text-[#33cf4d]"}`}>
                Business
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    showBusiness ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showBusiness && (
                <div className="absolute -left-[260px] top-full pt-6">
                  <div
                    className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 ${
                      activeBusinessTab === "giftcards"
                        ? "w-[620px]"
                        : "w-[1000px]"
                    }`}
                  >
                    <div
                      className={`grid gap-6 ${
                        activeBusinessTab === "giftcards"
                          ? "grid-cols-[260px_300px]"
                          : "grid-cols-[260px_1fr]"
                      }`}
                    >
                      {/* LEFT SIDE */}
                      <div className="space-y-2 border-r pr-4 border-gray-500">
                        <div
                          onMouseEnter={() => setActiveBusinessTab("payments")}
                          className={`px-4 py-3 rounded-xl cursor-pointer flex justify-between ${
                            activeBusinessTab === "payments"
                              ? "bg-green-50 text-[#33cf4d] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Accept payments →
                        </div>

                        <div
                          onMouseEnter={() => setActiveBusinessTab("exchange")}
                          className={`px-4 py-3 rounded-xl cursor-pointer flex justify-between ${
                            activeBusinessTab === "exchange"
                              ? "bg-green-50 text-[#33cf4d] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Manage & exchange →
                        </div>

                        <div
                          onMouseEnter={() => setActiveBusinessTab("giftcards")}
                          className={`px-4 py-3 rounded-xl cursor-pointer flex justify-between ${
                            activeBusinessTab === "giftcards"
                              ? "bg-green-50 text-[#33cf4d] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Gift cards →
                        </div>
                      </div>

                      {/* RIGHT SIDE */}
                      <div
                        className={`grid gap-6 ${
                          activeBusinessTab === "giftcards"
                            ? "grid-cols-1"
                            : "grid-cols-2"
                        }`}
                      >
                        {businessContent[activeBusinessTab].map(
                          ({ icon: Icon, title, desc }) => (
                            <div
                              key={title}
                              className="flex gap-4 items-start cursor-pointer hover:bg-gray-50 p-2 rounded-lg"
                              onClick={() => {
                                if (title === 'Checkout integration') {
                                  navigate('/checkout-integration');
                                }
                                if (title === 'Solutions') {
                                  navigate('/solutions');
                                }
                                if (title === 'Demo') {
                                  navigate('/demo');
                                }
                                if (title === 'Accept via payment link/bill') {
                                  navigate('/payment-bill');
                                }
                                if (title === 'Accept via plugins') {
                                  navigate('/accept-plugins');
                                }
                                if (title === 'Crypto payouts') {
                                  navigate('/crypto-payouts');
                                }
                                if (title === 'Deposit, swap & withdraw') {
                                  navigate('/deposit-withdraw');
                                }
                                if (title === 'User management') {
                                  navigate('/user-management');
                                }
                              }}
                            >
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-gray-700" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">
                                  {title}
                                </p>
                                <p className="text-sm text-gray-500">{desc}</p>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PERSONAL DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => {
                setShowPersonal(true);
                setActiveNav("Personal");
              }}
              onMouseLeave={() => {
                setShowPersonal(false);
                setActiveNav(null);
              }}
            >
              <button className={`flex items-center gap-1 px-4 py-1.5 font-medium cursor-pointer ${activeNav === "Personal" ? "text-[#33cf4d] bg-green-50 rounded-lg" : "text-slate-600 hover:text-indigo-600"}`}>
                Personal
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    showPersonal ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showPersonal && (
                <div className="absolute -left-[260px] top-full pt-6">
                  <div className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 ${activePersonalTab === "buy" ? "w-[620px]" : "w-[1000px]"}`}>
                    <div className={`grid gap-6 ${activePersonalTab === "buy" ? "grid-cols-[260px_300px]" : "grid-cols-[260px_1fr]"}`}>

                      {/* LEFT SIDE */}
                      <div className="space-y-2 border-r pr-4 border-gray-500">
                        <div
                          onMouseEnter={() => setActivePersonalTab("buy")}
                          className={`px-4 py-3 rounded-xl cursor-pointer flex justify-between ${
                            activePersonalTab === "buy"
                              ? "bg-green-50 text-[#33cf4d] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Buy & sell crypto →
                        </div>

                        <div
                          onMouseEnter={() => setActivePersonalTab("giftcards")}
                          className={`px-4 py-3 rounded-xl cursor-pointer flex justify-between ${
                            activePersonalTab === "giftcards"
                              ? "bg-green-50 text-[#33cf4d] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Gift cards →
                        </div>

                        <div
                          onMouseEnter={() => setActivePersonalTab("merchant")}
                          className={`px-4 py-3 rounded-xl cursor-pointer flex justify-between ${
                            activePersonalTab === "merchant"
                              ? "bg-green-50 text-[#33cf4d] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Merchant directory →
                        </div>
                      </div>

                      {/* RIGHT SIDE */}
                      <div className={`grid gap-6 ${activePersonalTab === "buy" ? "grid-cols-1" : "grid-cols-2"}`}>
                        {personalContent[activePersonalTab].map(
                          ({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex gap-4 items-start">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-gray-700" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{title}</p>
                                <p className="text-sm text-gray-500">{desc}</p>
                              </div>
                            </div>
                          )
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* PRICING BUTTON */}
            <button
              className={`flex items-center gap-1 px-4 py-1.5 font-medium cursor-pointer ${activeNav === "Pricing" ? "text-[#33cf4d] bg-green-50 rounded-lg" : "text-slate-600 hover:text-indigo-600"}`}
              onMouseEnter={() => setActiveNav("Pricing")}
              onMouseLeave={() => setActiveNav(null)}
            >
              Pricing
            </button>

            {/* DEVELOPERS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => {
                setShowDevelopers(true);
                setActiveNav("Developers");
              }}
              onMouseLeave={() => {
                setShowDevelopers(false);
                setActiveNav(null);
              }}
            >
              <button className={`flex items-center gap-1 px-4 py-1.5 font-medium cursor-pointer ${activeNav === "Developers" ? "text-[#33cf4d] bg-green-50 rounded-lg" : "text-slate-600 hover:text-indigo-600"}`}>
                Developers
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    showDevelopers ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showDevelopers && (
                <div className="absolute -left-[120px] top-full pt-6">
                  <div className="w-[320px] bg-white rounded-2xl shadow-xl border border-gray-100 p-6">
                    <div className="space-y-5">

                      <div className="flex gap-4 items-start cursor-pointer hover:bg-gray-50 p-3 rounded-xl">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <BookOpen className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Documentation</p>
                          <p className="text-sm text-gray-500">
                            Integrate our API easily
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start cursor-pointer hover:bg-gray-50 p-3 rounded-xl">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Github className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">GitHub repository</p>
                          <p className="text-sm text-gray-500">
                            Access our code & tools
                          </p>
                        </div>
                      </div>

                      <div className="flex gap-4 items-start cursor-pointer hover:bg-gray-50 p-3 rounded-xl">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                          <Activity className="w-5 h-5 text-gray-700" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">Status</p>
                          <p className="text-sm text-gray-500">
                            Live system performance
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* RESOURCES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => {
                setShowResources(true);
                setActiveNav("Resources");
              }}
              onMouseLeave={() => {
                setShowResources(false);
                setActiveNav(null);
              }}
            >
              <button className={`flex items-center gap-1 px-4 py-1.5 font-medium cursor-pointer ${activeNav === "Resources" ? "text-[#33cf4d] bg-green-50 rounded-lg" : "text-slate-600 hover:text-indigo-600"}`}>
                Resources
                <ChevronDown
                  size={18}
                  className={`transition-transform duration-300 ${
                    showResources ? "rotate-180" : ""
                  }`}
                />
              </button>

              {showResources && (
                <div className="absolute -left-[400px] top-full pt-6">
                  <div
                    className={`bg-white rounded-2xl shadow-xl border border-gray-100 p-6 ${
                      activeResourcesTab === "company"
                        ? "w-[620px]"
                        : "w-[950px]"
                    }`}
                  >
                    <div
                      className={`grid gap-6 ${
                        activeResourcesTab === "company"
                          ? "grid-cols-[260px_300px]"
                          : "grid-cols-[260px_1fr]"
                      }`}
                    >

                      {/* LEFT SIDE */}
                      <div className="space-y-2 border-r pr-4 border-gray-500">
                        <div
                          onMouseEnter={() => setActiveResourcesTab("learning")}
                          className={`px-4 py-3 rounded-xl cursor-pointer flex justify-between ${
                            activeResourcesTab === "learning"
                              ? "bg-green-50 text-[#33cf4d] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Learning center →
                        </div>

                        <div
                          onMouseEnter={() => setActiveResourcesTab("company")}
                          className={`px-4 py-3 rounded-xl cursor-pointer flex justify-between ${
                            activeResourcesTab === "company"
                              ? "bg-green-50 text-[#33cf4d] font-medium"
                              : "text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          Company →
                        </div>
                      </div>

                      {/* RIGHT SIDE */}
                      <div
                        className={`grid gap-6 ${
                          activeResourcesTab === "company"
                            ? "grid-cols-1"
                            : "grid-cols-2"
                        }`}
                      >
                        {resourcesContent[activeResourcesTab].map(
                          ({ icon: Icon, title, desc }) => (
                            <div key={title} className="flex gap-4 items-start">
                              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                                <Icon className="w-5 h-5 text-gray-700" />
                              </div>
                              <div>
                                <p className="font-semibold text-gray-900">{title}</p>
                                <p className="text-sm text-gray-500">{desc}</p>
                              </div>
                            </div>
                          )
                        )}
                      </div>

                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* RIGHT ACTIONS */}
          <div className="hidden xl:flex items-center space-x-4">
            <div className="flex items-center gap-2 mr-4">
              <span className="text-lg">🇬🇧</span>
              <span className="uppercase text-slate-600">en</span>
              <ChevronDown size={16} />
            </div>

            <button
              className="px-6 py-2.5 text-[#33cf4d] bg-green-50 rounded-xl cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Login
            </button>
            <button
              className="px-6 py-2.5 text-white bg-[#33cf4d] rounded-xl cursor-pointer"
              onClick={() => navigate('/register')}
            >
              Sign up
            </button>
          </div>

          {/* MOBILE */}
          <div className="flex xl:hidden items-center gap-4">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU (UNCHANGED) */}
      {isOpen && (
  <div className="xl:hidden fixed inset-0 bg-white z-50 flex flex-col">
    
    {/* HEADER */}
    <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold text-gray-900">coingate</span>
      </div>
      <button
        onClick={() => setIsOpen(false)}
        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
      >
        <X size={18} />
      </button>
    </div>

    {/* MENU ITEMS */}
    <div className="flex-1 overflow-y-auto">
      {navLinks.map((link) => (
  <div
    key={link.name}
    onClick={() => {
  if (link.name === "Business") {
    setActiveMobileMenu("business");
  }
  if (link.name === "Personal") {
    setActiveMobileMenu("personal");
  }
  if (link.name === "Developers") {
  setActiveMobileMenu("developers");
}
if (link.name === "Resources") {
  setActiveMobileMenu("resources");
}

}}
    className="flex items-center justify-between px-4 py-4 border-b border-gray-200 text-gray-800 font-medium cursor-pointer"
  >
    <span>{link.name}</span>
    {link.hasDropdown && <ChevronRight size={18} />}
  </div>
))}

    </div>

   {activeMobileMenu === "business" && (
  <div className="xl:hidden fixed inset-0 bg-white z-50 flex flex-col">

    {/* HEADER */}
    <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setActiveMobileMenu(null)}
      >
        <ChevronLeft size={18} />
        <span className="font-medium text-gray-900">Business</span>
      </div>

      <button
        onClick={() => {
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
      >
        <X size={18} />
      </button>
    </div>

    {/* BUSINESS MENU */}
    {/* BUSINESS MENU */}
<div className="flex-1 overflow-y-auto">

  {/* ACCEPT PAYMENTS */}
  <div className="border-b border-gray-200">
    <div
      onClick={() =>
        setActiveBusinessAccordion(
          activeBusinessAccordion === "payments" ? null : "payments"
        )
      }
      className="flex items-center justify-between px-4 py-4 text-gray-800 font-medium cursor-pointer"
    >
      <span>Accept payments</span>
      <ChevronDown
        size={18}
        className={`transition-transform ${
          activeBusinessAccordion === "payments" ? "rotate-180" : ""
        }`}
      />
    </div>

    {activeBusinessAccordion === "payments" && (
      <div className="px-4 pb-4 space-y-4 text-sm text-gray-700">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate('/checkout-integration');
            setActiveMobileMenu(null);
            setIsOpen(false);
          }}
        >
          <p className="font-medium">Checkout integration</p>
          <p className="text-gray-500">Ready-made payment flow and interface</p>
        </div>
        <div>
          <p className="font-medium">Accept via API</p>
          <p className="text-gray-500">Seamless integration for developers</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate('/solutions');
            setActiveMobileMenu(null);
            setIsOpen(false);
          }}
        >
          <p className="font-medium">Solutions</p>
          <p className="text-gray-500">Tailored crypto payment setups</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate('/payment-bill');
            setActiveMobileMenu(null);
            setIsOpen(false);
          }}
        >
          <p className="font-medium">Accept via payment link/bill</p>
          <p className="text-gray-500">Simplify billing and payments</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate('/demo');
            setActiveMobileMenu(null);
            setIsOpen(false);
          }}
        >
          <p className="font-medium">Demo</p>
          <p className="text-gray-500">Test the CoinGate checkout</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate('/accept-plugins');
            setActiveMobileMenu(null);
            setIsOpen(false);
          }}
        >
          <p className="font-medium">Accept via plugins</p>
          <p className="text-gray-500">Integrate with your e-shop</p>
        </div>
      </div>
    )}
  </div>

  {/* MANAGE & EXCHANGE */}
  <div className="border-b border-gray-200">
    <div
      onClick={() =>
        setActiveBusinessAccordion(
          activeBusinessAccordion === "exchange" ? null : "exchange"
        )
      }
      className="flex items-center justify-between px-4 py-4 text-gray-800 font-medium cursor-pointer"
    >
      <span>Manage & exchange</span>
      <ChevronDown
        size={18}
        className={`transition-transform ${
          activeBusinessAccordion === "exchange" ? "rotate-180" : ""
        }`}
      />
    </div>

    {activeBusinessAccordion === "exchange" && (
      <div className="px-4 pb-4 space-y-4 text-sm text-gray-700">
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate('/crypto-payouts');
            setActiveMobileMenu(null);
            setIsOpen(false);
          }}
        >
          <p className="font-medium">Crypto payouts</p>
          <p className="text-gray-500">Send crypto to anyone</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate('/deposit-withdraw');
            setActiveMobileMenu(null);
            setIsOpen(false);
          }}
        >
          <p className="font-medium">Deposit, swap & withdraw</p>
          <p className="text-gray-500">Manage digital assets quickly</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            navigate('/user-management');
            setActiveMobileMenu(null);
            setIsOpen(false);
          }}
        >
          <p className="font-medium">User management</p>
          <p className="text-gray-500">Manage team access</p>
        </div>
        <div>
          <p className="font-medium">Multi-currency account</p>
          <p className="text-gray-500">All your crypto assets in one place</p>
        </div>
        <div>
          <p className="font-medium">Merchant refunds</p>
          <p className="text-gray-500">Make refunds hassle-free</p>
        </div>
      </div>
    )}
  </div>

  {/* GIFT CARDS */}
  <div className="border-b border-gray-200">
    <div
      onClick={() =>
        setActiveBusinessAccordion(
          activeBusinessAccordion === "giftcards" ? null : "giftcards"
        )
      }
      className="flex items-center justify-between px-4 py-4 text-gray-800 font-medium cursor-pointer"
    >
      <span>Gift cards</span>
      <ChevronDown
        size={18}
        className={`transition-transform ${
          activeBusinessAccordion === "giftcards" ? "rotate-180" : ""
        }`}
      />
    </div>

    {activeBusinessAccordion === "giftcards" && (
      <div className="px-4 pb-4 space-y-4 text-sm text-gray-700">
        <div>
          <p className="font-medium">Create your business gift card</p>
          <p className="text-gray-500">Offer branded crypto cards</p>
        </div>
        <div>
          <p className="font-medium">Buy gift cards</p>
          <p className="text-gray-500">Shop with your crypto</p>
        </div>
        <div>
          <p className="font-medium">Gift cards wholesale</p>
          <p className="text-gray-500">Trade digital assets quickly</p>
        </div>
      </div>
    )}
  </div>

</div>


    {/* FOOTER BUTTONS */}
    <div className="px-4 py-4 border-t border-gray-100 flex items-center gap-8">
      <button
        className="w-full py-3 rounded-xl border border-green-200 text-[#33cf4d] font-semibold bg-green-50 cursor-pointer"
        onClick={() => {
          navigate('/login');
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
      >
        Login
      </button>
      <button
        className="w-full py-3 rounded-xl bg-[#33cf4d] text-white font-semibold cursor-pointer"
        onClick={() => {
          navigate('/register');
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
      >
        Sign up
      </button>
    </div>
  </div>
)}

{activeMobileMenu === "personal" && (
  <div className="xl:hidden fixed inset-0 bg-white z-50 flex flex-col">

    {/* HEADER */}
    <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setActiveMobileMenu(null)}
      >
        <ChevronLeft size={18} />
        <span className="font-medium text-gray-900">Personal</span>
      </div>

      <button
        onClick={() => {
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
      >
        <X size={18} />
      </button>
    </div>

    {/* PERSONAL MENU */}
    <div className="flex-1 overflow-y-auto">

      {/* BUY & SELL */}
      <div className="border-b border-gray-200">
        <div
          onClick={() =>
            setActivePersonalAccordion(
              activePersonalAccordion === "buy" ? null : "buy"
            )
          }
          className="flex items-center justify-between px-4 py-4 font-medium cursor-pointer"
        >
          <span>Buy & sell crypto</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${
              activePersonalAccordion === "buy" ? "rotate-180" : ""
            }`}
          />
        </div>

        {activePersonalAccordion === "buy" && (
          <div className="px-4 pb-4 space-y-4 text-sm text-gray-700">
            <div>
              <p className="font-medium">Buy crypto with credit card</p>
              <p className="text-gray-500">Instant card purchases</p>
            </div>
            <div>
              <p className="font-medium">Personal solutions</p>
              <p className="text-gray-500">Visit our cryptocurrency hub</p>
            </div>
          </div>
        )}
      </div>

      {/* GIFT CARDS */}
      <div className="border-b border-gray-200">
        <div
          onClick={() =>
            setActivePersonalAccordion(
              activePersonalAccordion === "giftcards" ? null : "giftcards"
            )
          }
          className="flex items-center justify-between px-4 py-4 font-medium cursor-pointer"
        >
          <span>Gift cards</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${
              activePersonalAccordion === "giftcards" ? "rotate-180" : ""
            }`}
          />
        </div>

        {activePersonalAccordion === "giftcards" && (
          <div className="px-4 pb-4 space-y-4 text-sm text-gray-700">
            <div><p className="font-medium">Browse all gift cards</p><p className="text-gray-500">Vast selection of brands</p></div>
            <div><p className="font-medium">Travel</p><p className="text-gray-500">Gift unforgettable getaways</p></div>
            <div><p className="font-medium">Stores</p><p className="text-gray-500">Shop your favorite retailers</p></div>
            <div><p className="font-medium">Gaming</p><p className="text-gray-500">Top platforms & credits</p></div>
            <div><p className="font-medium">Electronics</p><p className="text-gray-500">Latest gadgets & tech</p></div>
            <div><p className="font-medium">Clothing</p><p className="text-gray-500">Style for every season</p></div>
          </div>
        )}
      </div>

      {/* MERCHANT DIRECTORY */}
      <div className="border-b border-gray-200">
        <div
          onClick={() =>
            setActivePersonalAccordion(
              activePersonalAccordion === "merchant" ? null : "merchant"
            )
          }
          className="flex items-center justify-between px-4 py-4 font-medium cursor-pointer"
        >
          <span>Merchant directory</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${
              activePersonalAccordion === "merchant" ? "rotate-180" : ""
            }`}
          />
        </div>

        {activePersonalAccordion === "merchant" && (
          <div className="px-4 pb-4 space-y-4 text-sm text-gray-700">
            <div><p className="font-medium">Browse all categories</p><p className="text-gray-500">Discover where to spend crypto</p></div>
            <div><p className="font-medium">VPNs</p><p className="text-gray-500">Freedom & privacy online</p></div>
            <div><p className="font-medium">Online stores</p><p className="text-gray-500">Everyday essentials & more</p></div>
            <div><p className="font-medium">Proxy</p><p className="text-gray-500">Secure, seamless connections</p></div>
            <div><p className="font-medium">Hosting</p><p className="text-gray-500">Web services that accept crypto</p></div>
            <div><p className="font-medium">Trading platforms</p><p className="text-gray-500">Tools for smarter trading</p></div>
          </div>
        )}
      </div>

    </div>

    {/* FOOTER */}
    <div className="px-4 py-4 border-t border-gray-100 flex gap-8">
      <button
        className="w-full py-3 rounded-xl border border-green-200 text-[#33cf4d] font-semibold bg-green-50 cursor-pointer"
        onClick={() => {
          navigate('/login');
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
      >
        Login
      </button>
      <button
        className="w-full py-3 rounded-xl bg-[#33cf4d] text-white font-semibold cursor-pointer"
        onClick={() => {
          navigate('/register');
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
      >
        Sign up
      </button>
    </div>
  </div>
)}

{activeMobileMenu === "developers" && (
  <div className="xl:hidden fixed inset-0 bg-white z-50 flex flex-col">

    {/* HEADER */}
    <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setActiveMobileMenu(null)}
      >
        <ChevronLeft size={18} />
        <span className="font-medium text-gray-900">Developers</span>
      </div>

      <button
        onClick={() => {
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
      >
        <X size={18} />
      </button>
    </div>

    {/* DEVELOPERS CONTENT */}
    <div className="flex-1 overflow-y-auto px-4 py-6 space-y-6 text-sm text-gray-800">

      <div>
        <p className="font-medium">Documentation</p>
        <p className="text-gray-500">Integrate our API easily</p>
      </div>

      <div>
        <p className="font-medium">GitHub repository</p>
        <p className="text-gray-500">Access our code & tools</p>
      </div>

      <div>
        <p className="font-medium">Status</p>
        <p className="text-gray-500">Live system performance</p>
      </div>

    </div>

    {/* FOOTER */}
    <div className="px-4 py-4 border-t border-gray-100 flex gap-8">
      <button
        className="w-full py-3 rounded-xl border border-green-200 text-[#33cf4d] font-semibold bg-green-50 cursor-pointer"
        onClick={() => {
          navigate('/login');
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
      >
        Login
      </button>
      <button
        className="w-full py-3 rounded-xl bg-[#33cf4d] text-white font-semibold cursor-pointer"
        onClick={() => {
          navigate('/register');
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
      >
        Sign up
      </button>
    </div>

  </div>
)}
{activeMobileMenu === "resources" && (
  <div className="xl:hidden fixed inset-0 bg-white z-50 flex flex-col">

    {/* HEADER */}
    <div className="flex items-center justify-between px-4 h-16 border-b border-gray-100">
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => setActiveMobileMenu(null)}
      >
        <ChevronLeft size={18} />
        <span className="font-medium text-gray-900">Resources</span>
      </div>

      <button
        onClick={() => {
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
        className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center"
      >
        <X size={18} />
      </button>
    </div>

    {/* RESOURCES MENU */}
    <div className="flex-1 overflow-y-auto">

      {/* LEARNING CENTER */}
      <div className="border-b border-gray-200">
        <div
          onClick={() =>
            setActiveResourcesAccordion(
              activeResourcesAccordion === "learning" ? null : "learning"
            )
          }
          className="flex items-center justify-between px-4 py-4 font-medium cursor-pointer"
        >
          <span>Learning center</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${
              activeResourcesAccordion === "learning" ? "rotate-180" : ""
            }`}
          />
        </div>

        {activeResourcesAccordion === "learning" && (
          <div className="px-4 pb-4 space-y-4 text-sm text-gray-700">
            <div><p className="font-medium">Blog</p><p className="text-gray-500">Latest news & insights</p></div>
            <div><p className="font-medium">Supported countries</p><p className="text-gray-500">Quick crypto payments made easy</p></div>
            <div><p className="font-medium">Legal</p><p className="text-gray-500">Terms & policies</p></div>
            <div><p className="font-medium">Supported currencies</p><p className="text-gray-500">View all currencies</p></div>
            <div><p className="font-medium">FAQ / Help center</p><p className="text-gray-500">Answers to your questions</p></div>
            <div><p className="font-medium">Exchange rates</p><p className="text-gray-500">Live crypto-fiat rates</p></div>
          </div>
        )}
      </div>

      {/* COMPANY */}
      <div className="border-b border-gray-200">
        <div
          onClick={() =>
            setActiveResourcesAccordion(
              activeResourcesAccordion === "company" ? null : "company"
            )
          }
          className="flex items-center justify-between px-4 py-4 font-medium cursor-pointer"
        >
          <span>Company</span>
          <ChevronDown
            size={18}
            className={`transition-transform ${
              activeResourcesAccordion === "company" ? "rotate-180" : ""
            }`}
          />
        </div>

        {activeResourcesAccordion === "company" && (
          <div className="px-4 pb-4 space-y-4 text-sm text-gray-700">
            <div><p className="font-medium">About us</p><p className="text-gray-500">Our mission & team</p></div>
            <div><p className="font-medium">Careers</p><p className="text-gray-500">Join our team</p></div>
            <div><p className="font-medium">Contact us</p><p className="text-gray-500">Get in touch with us</p></div>
          </div>
        )}
      </div>

    </div>

    {/* FOOTER */}
    <div className="px-4 py-4 border-t border-gray-100 flex gap-8">
      <button
        className="w-full py-3 rounded-xl border border-green-200 text-[#33cf4d] font-semibold bg-green-50"
        onClick={() => {
          navigate('/login');
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
      >
        Login
      </button>
      <button
        className="w-full py-3 rounded-xl bg-[#33cf4d] text-white font-semibold"
        onClick={() => {
          navigate('/register');
          setActiveMobileMenu(null);
          setIsOpen(false);
        }}
      >
        Sign up
      </button>
    </div>

  </div>
)}



  </div>
)}

    </nav>
  );
};

export default Navbar;

