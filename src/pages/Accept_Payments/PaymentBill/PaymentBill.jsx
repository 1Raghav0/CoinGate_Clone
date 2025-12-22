import React from "react";
import HeroSection from "./HeroSection";
import CryptoInvoicingBenefits from "./CryptoInvoicingBenefits";
import TestimonialsSection from "./TestimonialsSection";
import SupportedCryptoInvoices from "./SupportedCryptoInvoices";
import CryptoInvoiceCTA from "./CryptoInvoiceCTA";
import FAQSection from "./FAQSection";

const PaymentBill = () => {
  return (
    <>
      <HeroSection />
      <CryptoInvoicingBenefits />
      <TestimonialsSection />
      <SupportedCryptoInvoices />
      <CryptoInvoiceCTA />
      <FAQSection />
    </>
  );
};

export default PaymentBill;
