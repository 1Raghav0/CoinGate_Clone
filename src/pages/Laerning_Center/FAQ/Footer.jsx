import React from "react";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  ArrowUp,
  MessageSquare,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#0b1121] text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Social links */}
        <div className="flex items-center gap-5 mb-6">
          <a href="#" className="hover:text-white transition">
            <Facebook size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Twitter size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Linkedin size={18} />
          </a>
          <a href="#" className="hover:text-white transition">
            <Instagram size={18} />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-gray-400">
          © CoinGate
        </p>
      </div>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 left-6 w-10 h-10 rounded-lg border border-indigo-500 text-indigo-500 flex items-center justify-center hover:bg-indigo-500 hover:text-white transition"
      >
        <ArrowUp size={18} />
      </button>

      {/* Chat button */}
      <button className="fixed bottom-6 right-6 w-12 h-12 rounded-lg bg-indigo-500 text-white flex items-center justify-center shadow-lg hover:bg-indigo-600 transition">
        <MessageSquare size={20} />
      </button>
    </footer>
  );
};

export default Footer;
