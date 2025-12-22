// import React, { useState } from 'react';
// import {
//   ChevronDown,
//   Facebook,
//   Linkedin,
//   Instagram,
//   MessageSquare,
// } from 'lucide-react';

// const Footer = () => {
//   const [openSection, setOpenSection] = useState(null); // one open at a time
//   const [chatOpen, setChatOpen] = useState(false);


//   return (
//     <footer className="bg-[#0b1121] text-white py-10 px-6 font-sans relative">
//       <div className="max-w-7xl mx-auto">

//         {/* Logo */}
//         <div className="flex items-center gap-2 mb-8">
//           <div className="text-white font-bold text-xl flex items-center">
//             <span className="mr-1 text-2xl text-[#5b45e0]">∽</span> coingate
//           </div>
//         </div>

//         {/* Mobile Accordion Footer */}
//         <div className="border-t border-gray-800">

//           {/* DEVELOPERS */}
//           <Accordion
//             title="Developers"
//             open={openSection === 'developers'}
//             onClick={() =>
//               setOpenSection(openSection === 'developers' ? null : 'developers')
//             }
//           >
//             <Item>Documentation</Item>
//             <Item>GitHub Repository</Item>
//             <Item>Status</Item>
//             <Item>Plugins</Item>
//             <Item>Wix</Item>
//             <Item>WHMCS</Item>
//             <Item>OpenCart</Item>
//             <Item>PrestaShop</Item>
//             <Item>WooCommerce</Item>
//           </Accordion>

//           {/* PRODUCTS */}
//           <Accordion
//             title="Products"
//             open={openSection === 'products'}
//             onClick={() =>
//               setOpenSection(openSection === 'products' ? null : 'products')
//             }
//           >
//             <Item>Checkout integration</Item>
//             <Item>Billing</Item>
//             <Item>Crypto payouts</Item>
//             <Item>Deposit, swap & withdraw</Item>
//             <Item>Refunds</Item>
//             <Item>Multi-currency account</Item>
//             <Item>User management</Item>
//             <Item>Buy crypto with credit card</Item>
//             <Item>Merchant Directory</Item>
//             <Item>Buy Gift Cards</Item>
//             <Item>Gift Cards Wholesale</Item>
//             <Item>Create your Gift Card</Item>
//           </Accordion>

//           {/* RESOURCES */}
//           <Accordion
//             title="Resources"
//             open={openSection === 'resources'}
//             onClick={() =>
//               setOpenSection(openSection === 'resources' ? null : 'resources')
//             }
//           >
//             <Item>Legal</Item>
//             <Item>Privacy policy</Item>
//             <Item>FAQ / Support</Item>
//             <Item>Terms & Conditions</Item>
//             <Item>Exchange Rates</Item>
//             <Item>Supported Countries</Item>
//             <Item>Supported Currencies</Item>
//             <Item>Referral Program</Item>
//             <Item>Affiliates Program</Item>
//           </Accordion>

//           {/* COMPANY */}
//           <Accordion
//             title="Company"
//             open={openSection === 'company'}
//             onClick={() =>
//               setOpenSection(openSection === 'company' ? null : 'company')
//             }
//           >
//             <Item>About Us</Item>
//             <Item>Contact Us</Item>
//             <Item>Career</Item>
//             <Item>Pricing</Item>
//             <Item>Blog Articles</Item>
//             <Item>Brand Assets</Item>
//             <Item>Reviews</Item>
//           </Accordion>
//         </div>

//         {/* Bottom Meta */}
//         <div className="mt-10 space-y-4">
//           <p className="text-sm text-gray-400">2025 © CoinGate</p>

//           <div className="space-y-3">
//             <p className="text-sm font-medium">Let's connect:</p>
//             <div className="flex gap-3">
//               <SocialIcon icon={<Facebook size={18} />} />
//               <SocialIcon icon={<span className="font-bold text-xs italic">𝕏</span>} />
//               <SocialIcon icon={<Linkedin size={18} />} />
//               <SocialIcon icon={<Instagram size={18} />} />
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Floating Chat Button */}
//       <button
//   onClick={() => setChatOpen(true)}
//   className="fixed bottom-6 right-6 bg-[#33cf4d] p-4 rounded-sm shadow-lg hover:bg-[#33ee3a] transition-all z-50"
// >
//   <MessageSquare className="text-white fill-current" size={24} />
// </button>

// {chatOpen && (
//   <div className="fixed bottom-24 right-6 w-[320px] h-[520px] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 flex flex-col">

//     {/* HEADER */}
//     <div className="bg-[#33cf4d] text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
//       <div>
//         <p className="font-semibold text-sm">Live Support</p>
//         <p className="text-xs opacity-90">Ask us anything</p>
//       </div>
//       <button
//         onClick={() => setChatOpen(false)}
//         className="w-6 h-6 flex items-center justify-center rounded-full hover:bg-white/20"
//       >
//         ✕
//       </button>
//     </div>

//     {/* CHAT BODY */}
//     <div className="flex-1 px-3 py-4 overflow-y-auto bg-gray-50">
//       <div className="flex gap-2 items-start">
//         <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold">
//           CG
//         </div>
//         <div className="bg-white border rounded-lg px-3 py-2 text-sm text-gray-700 max-w-[220px]">
//           Hi, I’m ChatBot, your digital assistant. I’m here to help you. Type in
//           your question or select an option.
//         </div>
//       </div>

//       <p className="text-xs text-gray-400 mt-2 ml-10">Just now</p>
//     </div>

//     {/* INPUT */}
//     <div className="p-3 border-t border-gray-200">
//       <input
//         type="text"
//         placeholder="Type a message"
//         className="w-full border rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#45e05f]"
//       />
//       <p className="text-[10px] text-gray-400 text-center mt-1">
//         Built with Zendesk
//       </p>
//     </div>
//   </div>
// )}

//     </footer>
//   );
// };

// /* ---------- Helpers ---------- */

// const Accordion = ({ title, open, onClick, children }) => (
//   <div className="border-b border-gray-800">
//     <div
//       onClick={onClick}
//       className="flex items-center justify-between py-4 cursor-pointer"
//     >
//       <span className="font-semibold text-sm">{title}</span>
//       <ChevronDown
//         className={`w-4 h-4 transition-transform ${
//           open ? 'rotate-180' : ''
//         }`}
//       />
//     </div>

//     {open && (
//       <div className="pb-4 pl-4 space-y-2 text-sm text-gray-300 border-t border-gray-700 pt-2">
//         {children}
//       </div>
//     )}
//   </div>
// );

// const Item = ({ children, className = '' }) => (
//   <p className={className}>{children}</p>
// );

// const SocialIcon = ({ icon }) => (
//   <a
//     href="#"
//     className="w-8 h-8 rounded-full bg-[#33cf4d] flex items-center justify-center hover:opacity-80 transition-opacity"
//   >
//     {icon}
//   </a>
// );

// export default Footer;


import React, { useState } from 'react';
import {
  ChevronDown,
  Facebook,
  Linkedin,
  Instagram,
  MessageSquare,
} from 'lucide-react';

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <footer className="bg-[#0b1121] text-white py-10 px-6 font-sans relative">
      <div className="max-w-7xl mx-auto">

        {/* ================= DESKTOP FOOTER ================= */}
        <div className="hidden lg:grid grid-cols-5 gap-10 text-sm">

          {/* LOGO COLUMN */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-[#5b45e0]">∽</span>
              <span className="font-bold text-lg">coingate</span>
            </div>

            <p className="text-gray-400 text-sm">2025 © CoinGate</p>

            <div className="space-y-2">
              <p className="text-sm font-medium">Let's connect:</p>
              <div className="flex gap-3">
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<span className="font-bold text-xs italic">𝕏</span>} />
                <SocialIcon icon={<Linkedin size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
              </div>
            </div>
          </div>

          {/* DEVELOPERS */}
          <FooterColumn title="Developers">
            <li>Documentation</li>
            <li>GitHub Repository</li>
            <li>Status</li>
            <li>Plugins</li>
            <li>Wix</li>
            <li>WHMCS</li>
            <li>OpenCart</li>
            <li>PrestaShop</li>
            <li>WooCommerce</li>
          </FooterColumn>

          {/* PRODUCTS */}
          <FooterColumn title="Products">
            <li>Checkout integration</li>
            <li>Billing</li>
            <li>Crypto payouts</li>
            <li>Deposit, swap & withdraw</li>
            <li>Refunds</li>
            <li>Multi-currency account</li>
            <li>User management</li>
            <li>Buy crypto with credit card</li>
            <li>Merchant Directory</li>
            <li>Buy Gift Cards</li>
            <li>Gift Cards Wholesale</li>
            <li>Create your Gift Card</li>
          </FooterColumn>

          {/* RESOURCES */}
          <FooterColumn title="Resources">
            <li>Legal</li>
            <li>Privacy policy</li>
            <li>FAQ / Support</li>
            <li>Terms & Conditions</li>
            <li>Exchange Rates</li>
            <li>Supported Countries</li>
            <li>Supported Currencies</li>
            <li>Referral Program</li>
            <li>Affiliates Program</li>
          </FooterColumn>

          {/* COMPANY */}
          <FooterColumn title="Company">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Career</li>
            <li>Pricing</li>
            <li>Blog Articles</li>
            <li>Brand Assets</li>
            <li>Reviews</li>
          </FooterColumn>
        </div>

        {/* ================= MOBILE FOOTER (UNCHANGED) ================= */}
        <div className="flex items-center gap-2 lg:hidden">
              <span className="text-2xl text-[#5b45e0]">∽</span>
              <span className="font-bold text-lg">coingate</span>
            </div>
        <div className="lg:hidden border-t border-gray-800 mt-8">

          <Accordion
            title="Developers"
            open={openSection === 'developers'}
            onClick={() =>
              setOpenSection(openSection === 'developers' ? null : 'developers')
            }
          >
            <Item>Documentation</Item>
            <Item>GitHub Repository</Item>
            <Item>Status</Item>
            <Item>Plugins</Item>
            <Item>Wix</Item>
            <Item>WHMCS</Item>
            <Item>OpenCart</Item>
            <Item>PrestaShop</Item>
            <Item>WooCommerce</Item>
          </Accordion>

          <Accordion
            title="Products"
            open={openSection === 'products'}
            onClick={() =>
              setOpenSection(openSection === 'products' ? null : 'products')
            }
          >
            <Item>Checkout integration</Item>
            <Item>Billing</Item>
            <Item>Crypto payouts</Item>
            <Item>Deposit, swap & withdraw</Item>
            <Item>Refunds</Item>
            <Item>Multi-currency account</Item>
            <Item>User management</Item>
            <Item>Buy crypto with credit card</Item>
            <Item>Merchant Directory</Item>
            <Item>Buy Gift Cards</Item>
            <Item>Gift Cards Wholesale</Item>
            <Item>Create your Gift Card</Item>
          </Accordion>

          <Accordion
            title="Resources"
            open={openSection === 'resources'}
            onClick={() =>
              setOpenSection(openSection === 'resources' ? null : 'resources')
            }
          >
            <Item>Legal</Item>
            <Item>Privacy policy</Item>
            <Item>FAQ / Support</Item>
            <Item>Terms & Conditions</Item>
            <Item>Exchange Rates</Item>
            <Item>Supported Countries</Item>
            <Item>Supported Currencies</Item>
            <Item>Referral Program</Item>
            <Item>Affiliates Program</Item>
          </Accordion>

          <Accordion
            title="Company"
            open={openSection === 'company'}
            onClick={() =>
              setOpenSection(openSection === 'company' ? null : 'company')
            }
          >
            <Item>About Us</Item>
            <Item>Contact Us</Item>
            <Item>Career</Item>
            <Item>Pricing</Item>
            <Item>Blog Articles</Item>
            <Item>Brand Assets</Item>
            <Item>Reviews</Item>
          </Accordion>
        </div>

        <div className='lg:hidden space-y-2 py-4'>
          <p className="text-gray-400 text-sm">2025 © CoinGate</p>

            <div className="space-y-2">
              <p className="text-sm font-medium">Let's connect:</p>
              <div className="flex gap-3">
                <SocialIcon icon={<Facebook size={18} />} />
                <SocialIcon icon={<span className="font-bold text-xs italic">𝕏</span>} />
                <SocialIcon icon={<Linkedin size={18} />} />
                <SocialIcon icon={<Instagram size={18} />} />
              </div>
            </div>
        </div>
      </div>

      {/* ================= CHAT BUTTON ================= */}
      <button
        onClick={() => setChatOpen(true)}
        className="fixed bottom-6 right-6 bg-[#33cf4d] p-4 rounded-sm shadow-lg hover:bg-[#33ee3a] transition-all z-50"
      >
        <MessageSquare className="text-white" size={24} />
      </button>

      {chatOpen && (
        <div className="fixed bottom-24 right-6 w-[320px] h-[520px] bg-white rounded-lg shadow-2xl border z-50 flex flex-col">
          <div className="bg-[#33cf4d] text-white px-4 py-3 flex justify-between items-center rounded-t-lg">
            <div>
              <p className="font-semibold text-sm">Live Support</p>
              <p className="text-xs">Ask us anything</p>
            </div>
            <button onClick={() => setChatOpen(false)}>✕</button>
          </div>

          <div className="flex-1 p-4 text-sm text-gray-700 bg-gray-50">
            Hi, I’m ChatBot, your digital assistant.
          </div>

          <div className="p-3 border-t">
            <input
              className="w-full border rounded-full px-4 py-2 text-sm"
              placeholder="Type a message"
            />
          </div>
        </div>
      )}
    </footer>
  );
};

/* ================= HELPERS ================= */

const FooterColumn = ({ title, children }) => (
  <div>
    <h4 className="font-semibold mb-4">{title}</h4>
    <ul className="space-y-2 text-gray-300">{children}</ul>
  </div>
);

const Accordion = ({ title, open, onClick, children }) => (
  <div className="border-b border-gray-800">
    <div
      onClick={onClick}
      className="flex items-center justify-between py-4 cursor-pointer"
    >
      <span className="font-semibold text-sm">{title}</span>
      <ChevronDown className={`w-4 h-4 ${open ? 'rotate-180' : ''}`} />
    </div>
    {open && (
      <div className="pb-4 pl-4 space-y-2 text-sm text-gray-300 border-t border-gray-700 pt-2">
        {children}
      </div>
    )}
  </div>
);

const Item = ({ children }) => <p>{children}</p>;

const SocialIcon = ({ icon }) => (
  <a className="w-8 h-8 rounded-full bg-[#33cf4d] flex items-center justify-center">
    {icon}
  </a>
);

export default Footer;
