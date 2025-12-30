import React from "react";

const ComplaintResolutionSections = () => {
  return (
    <section className="bg-[#f7f8fa] py-12 px-4">
      <div className="max-w-7xl mx-auto space-y-12">

        {/* ================= Timeframes ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl max-w-lg mx-auto font-semibold text-center mb-6">
            Timeframes for Complaint Resolution
          </h2>
          <p className="text-lg text-gray-500 text-center max-w-xl mx-auto mb-8">
            We categorize complaints by severity, which determines the timeframe
            for resolution. Note: Timeframes account for document onboarding,
            review, approval, and signing procedures. A 10% buffer is recommended
            for formal procedures (e.g., 3 days for low-severity complaints).
          </p>

          <div className="overflow-x-auto">
            <table className="w-full max-w-6xl mx-auto text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-4 font-semibold">Complaint Type</th>
                  <th className="text-left py-4 font-semibold">Severity Category</th>
                  <th className="text-left py-4 font-semibold">Resolution Timeframe</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-300">
                  <td className="py-4">Complaint Admission</td>
                  <td className="py-4">—</td>
                  <td className="py-4">10 working days from receipt.</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4">Complaint Resolution</td>
                  <td className="py-4">Low</td>
                  <td className="py-4">30 working days from admission.</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4">Complaint Resolution</td>
                  <td className="py-4">Medium</td>
                  <td className="py-4">10 working days from admission.</td>
                </tr>
                <tr>
                  <td className="py-4">Complaint Resolution</td>
                  <td className="py-4">High</td>
                  <td className="py-4">5 working days from admission.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= Dormant Complaints ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-8">
            Dormant Complaints
          </h2>
          <p className="text-lg max-w-xl mx-auto text-gray-500 text-center mb-8">
            Complaints are deemed dormant and closed if no response is received
            within the set severity timeframe.
          </p>

          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="border-b border-gray-300">
                  <th className="text-left py-4 font-semibold">Complaint Type</th>
                  <th className="text-left py-4 font-semibold">Timeframe</th>
                </tr>
              </thead>
              <tbody className="text-gray-600">
                <tr className="border-b border-gray-300">
                  <td className="py-4">Complaint Not Admissible</td>
                  <td className="py-4">
                    Closed after 10 working days if no response from the complainant.
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4">Low-Severity Complaint</td>
                  <td className="py-4">
                    Closed after 30 working days if no response from the complainant.
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4">Medium-Severity Complaint</td>
                  <td className="py-4">
                    Closed after 10 working days if no response from the complainant.
                  </td>
                </tr>
                <tr>
                  <td className="py-4">High-Severity Complaint</td>
                  <td className="py-4">
                    Closed after 5 working days if no response from the complainant.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ================= Refusal Criteria ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Complaint Refusal Criteria
          </h2>
          <p className="text-lg text-gray-500 mb-6">
            In certain situations, CoinGate reserves the right to refuse complaints.
            These include:
          </p>

          <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-600">
            <li>
              Duplicate Complaints: Complaints identical to those
              already being examined by another competent authority or court.
            </li>
            <li>
              Anonymous Complaints: Complaints submitted without
              sufficient identification of the complainant.
            </li>
            <li>
              Late Submissions:Complaints submitted more than three
              (3) months after the complainant became aware or should have become
              aware of the issue.
            </li>
          </ol>
        </div>

        {/* ================= Avokaado ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            How to Onboard and Use Avokaado
          </h2>
          <p className="text-lg text-gray-500 mb-6">
            If your complaint requires further investigation:
          </p>

          <ol className="list-decimal pl-5 space-y-4 text-lg text-gray-600">
            <li>
              Avokaado Onboarding: You will receive an onboarding
              invitation via email.
            </li>
            <li>
              Signing Up: Follow the provided link to create an
              account and access your complaint file.
            </li>
            <li>
              Approval Process: Review and approve the uploaded
              complaint form in the Avokaado dashboard.
            </li>
          </ol>
        </div>

        {/* ================= Contact ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-lg text-gray-600">
            If you have questions about the process or need assistance with Avokaado,
            please contact our support team at{" "}
            <a
              href="mailto:support@coingate.com"
              className="text-green-500 font-medium hover:underline"
            >
              support@coingate.com
            </a>.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ComplaintResolutionSections;
