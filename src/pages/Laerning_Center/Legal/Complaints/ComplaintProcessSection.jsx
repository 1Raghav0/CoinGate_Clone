import { CheckCircle } from "lucide-react";

const ComplaintProcessSection = () => {
  return (
    <section className="bg-[#f7f8fa] py-4 px-4">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* ================= CARD 1 ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1121] mb-10">
            Complaint Submission Process
          </h2>

          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT */}
            <div className="space-y-6 text-sm md:text-base text-gray-600">
              <p>
                <strong>1. Download the Complaint Form</strong><br />
                You can download the complaint form from our website or your CoinGate dashboard.
              </p>

              <p>
                <strong>2. Submit the Completed Form</strong><br />
                Once you have filled out the form, please send it to{" "}
                <a
                  href="mailto:complaints@coingate.com"
                  className="text-indigo-600 font-medium"
                >
                  complaints@coingate.com
                </a>.
              </p>

              <p>
                <strong>3. Acknowledgment of Receipt</strong><br />
                You will receive confirmation that your complaint has been received and is under review.
              </p>
            </div>

            {/* RIGHT */}
            <div className="space-y-6 text-sm md:text-base text-gray-600">
              <p>
                <strong>4. Review and Admissibility</strong>
              </p>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  If your complaint is deemed not admissible, we will notify you with a rejection message or request additional information if needed.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  If admissible, we will assess whether it can be resolved immediately.
                </li>
              </ul>

              <p>
                <strong>5. Resolution Process</strong>
              </p>

              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  Immediate resolution will be communicated and the case considered resolved.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  If further processing is required, the complaint is uploaded to Avokaado with your approval.
                </li>
              </ul>

              <p>
                <strong>6. Final Confirmation</strong><br />
                Once resolved to your satisfaction, you will be prompted to provide a digital signature confirming resolution.
              </p>
            </div>
          </div>
        </div>

        {/* ================= CARD 2 ================= */}
        <div className="bg-white rounded-3xl p-8 md:p-14 shadow-sm">
          <h2 className="text-2xl md:text-3xl font-bold text-[#0b1121] mb-2">
            How We Handle Your Complaint
          </h2>
          <p className="text-gray-500 mb-10">Step-by-Step Process</p>

          <div className="grid md:grid-cols-2 gap-10">
            {/* LEFT */}
            <div className="space-y-6 text-sm md:text-base text-gray-600">
              <p><strong>1. Initial Review</strong></p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  We monitor our dedicated channels and email inbox for new complaints.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  The complaint template is reviewed to ensure all required fields are completed.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  Additional information may be requested if necessary.
                </li>
              </ul>

              <p><strong>2. Complaint Registration</strong></p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  A Jira ticket is created to track the progress.
                </li>
              </ul>

              <p><strong>3. Investigation and Onboarding</strong></p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  If immediate resolution isn’t possible, the complaint is uploaded to Avokaado.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  You will be asked to approve the uploaded complaint template.
                </li>
              </ul>
            </div>

            {/* RIGHT */}
            <div className="space-y-6 text-sm md:text-base text-gray-600">
              <p><strong>4. Assigning Dedicated Staff</strong></p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  After approval, dedicated staff is onboarded and investigation begins.
                </li>
              </ul>

              <p><strong>5. Resolution and Communication</strong></p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  A remediation plan is created once the investigation is complete.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  Our support team explains the resolution and next steps.
                </li>
              </ul>

              <p><strong>6. Final Approval</strong></p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  Signed approval is reviewed and confirmed by management.
                </li>
                <li className="flex gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 mt-1" />
                  The complaint is marked resolved in Jira.
                </li>
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ComplaintProcessSection;
