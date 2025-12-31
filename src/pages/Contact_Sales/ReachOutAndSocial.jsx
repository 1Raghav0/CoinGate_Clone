import {
  Headphones,
  Newspaper,
  ShieldCheck,
} from "lucide-react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedinIn, FaFacebookF } from "react-icons/fa";

const ReachOutAndSocial = () => {
  return (
    <section className="bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto space-y-10">

        {/* ================= Reach Out Section ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-14">
          <p className="text-sm md:text-lg  text-gray-400 text-center mb-2 font-semibold">
            WE ARE COINGATE
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-900 mb-10">
            Reach Out to Other Teams
          </h2>

          <div className="grid md:grid-cols-3 gap-8  max-w-4xl mx-auto">
            
            {/* Support */}
            <div className="space-y-4">
              <div className=" w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <Headphones className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Visit Support page
              </h3>
              <p className="text-sm text-gray-500">
                If you have technical or payment-related issues, get in touch
                with our support team.
              </p>
              <Link
                to="/faq-help-center"
                className="text-lg font-medium text-green-500 hover:underline"
              >
                Visit Support page
              </Link>
            </div>

            {/* Press */}
            <div className="space-y-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <Newspaper className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Press inquiries
              </h3>
              <p className="text-sm text-gray-500">
                We're eager to provide media representatives with the resources
                and information you need.
              </p>
              <Link
                to="/press-enquiries"
                className="text-lg font-medium text-green-500 hover:underline"
              >
                Contact
              </Link>
            </div>

            {/* Compliance */}
            <div className="space-y-4">
              <div className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100">
                <ShieldCheck className="w-5 h-5 text-gray-600" />
              </div>
              <h3 className="font-semibold text-gray-900 text-lg">
                Contact Compliance
              </h3>
              <p className="text-sm text-gray-500">
                For any AML/CTF inquiries including information requests,
                subpoenas, court or police orders, or any other general
                compliance-related matters.
              </p>
              <Link
                to="/contact-compliance"
                className="text-lg font-medium text-green-500 hover:underline"
              >
                Contact
              </Link>
            </div>

          </div>
        </div>

        {/* ================= Social Media Section ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-14 text-center">
          <p className="text-lg font-semibold text-gray-400 mb-2">
            WE'RE ON SOCIAL MEDIA
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-[52px] font-semibold text-gray-900 mb-8 leading-snug max-w-4xl mx-auto">
            Stay up-to-date with our latest news
            and updates on our social media channels:
          </h2>

          <div className="flex justify-center gap-10 text-gray-500 py-10">
            <FaTwitter className="w-24 h-24 hover:text-indigo-600 cursor-pointer transition" />
            <FaLinkedinIn className="w-24 h-24 hover:text-indigo-600 cursor-pointer transition" />
            <FaFacebookF className="w-20 h-20 hover:text-indigo-600 cursor-pointer transition" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default ReachOutAndSocial;
