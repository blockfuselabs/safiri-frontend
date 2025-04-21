"use client";
import dynamic from "next/dynamic";
import {
  Banknote,
  Users,
  ChartBar,
  ShieldCheck,
  Zap,
} from "lucide-react";

import globe from "../../../public/globe.json";

const Lottie = dynamic(() => import("lottie-react"), {
  ssr: false,
});

const BenefitsSection = () => {
  return (
    <section id="benefits" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Benefits of Using Safiri Send
          </h2>
          <p className="text-lg text-gray-600">
            Experience the advantages of our blockchain-powered cross-border
            payment solution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="h-16 w-16 rounded-xl bg-[#c4fc74] flex items-center justify-center mb-6">
              <Banknote size={30} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-bold mb-3">Cost Effective</h3>
            <p className="text-gray-600">
              Save up to 90% on transfer fees compared to traditional remittance
              services. Our flat 1% fee means more money reaches your
              recipients.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="h-16 w-16 rounded-xl bg-[#c4fc74] flex items-center justify-center mb-6">
              <Zap size={30} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-bold mb-3">Lightning Fast</h3>
            <p className="text-gray-600">
              No more waiting days for international transfers. Safiri Send
              completes transactions in seconds, not days, regardless of the
              destination.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="h-16 w-16 rounded-xl bg-[#c4fc74] flex items-center justify-center mb-6">
              <Users size={30} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-bold mb-3">Accessible to All</h3>
            <p className="text-gray-600">
              No bank account? No problem. No smartphone? Still works. Our USSD
              service ensures everyone can send and receive money across
              borders.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="h-16 w-16 rounded-xl bg-[#c4fc74] flex items-center justify-center mb-6">
              <ShieldCheck size={30} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-bold mb-3">Secure & Transparent</h3>
            <p className="text-gray-600">
              Every transaction is recorded on the blockchain, providing
              unmatched security and transparency. Track your money at every
              step.
            </p>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
            <div className="h-16 w-16 rounded-xl bg-[#c4fc74] flex items-center justify-center mb-6">
              <ChartBar size={30} className="text-gray-800" />
            </div>
            <h3 className="text-xl font-bold mb-3">Competitive Rates</h3>
            <p className="text-gray-600">
              Get the best exchange rates with no hidden fees. What you see is
              what you get, making international transfers truly affordable.
            </p>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-10 text-center">
            What Our Users Say
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="font-medium text-green-800">JO</span>
                </div>
                <div>
                  <h4 className="font-medium">John Okafor</h4>
                  <p className="text-sm text-gray-500">Business Owner, Lagos</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;I send money to suppliers in Ghana every week. Safiri Send has
                cut my transfer costs by 80% and the money arrives instantly.
                Game changer for my business!&rdquo;
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-lime-100 flex items-center justify-center">
                  <span className="font-medium text-lime-800">MA</span>
                </div>
                <div>
                  <h4 className="font-medium">Maria Achieng</h4>
                  <p className="text-sm text-gray-500">Student, Nairobi</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;As a student in Kenya with family in Nigeria, I needed an
                affordable way to receive support. Safiri Send is so easy to use
                and the fees are minimal compared to others.&rdquo;
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <span className="font-medium text-green-800">KA</span>
                </div>
                <div>
                  <h4 className="font-medium">Kwame Adjei</h4>
                  <p className="text-sm text-gray-500">Entrepreneur, Accra</p>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                &ldquo;I tried every money transfer service out there. Nothing comes
                close to Safiri Send in terms of speed and cost. The USSD
                feature means my mom in the village can receive money without a
                smartphone.&rdquo;
              </p>
              <div className="flex">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span key={star} className="text-yellow-400">
                    ★
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Countries Supported */}
        <div className="mt-20 bg-gradient-to-r from-green-50 to-lime-50 rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h3 className="text-2xl font-bold mb-4">
                Serving Major African Countries
              </h3>
              <p className="text-gray-600 mb-8">
                Safiri Send currently operates in 5 major African markets, with
                plans to expand to 20+ countries by the end of 2025.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    <span>🇳🇬</span>
                  </div>
                  <span className="font-medium">Nigeria</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center text-2xl">
                    <span>🇬🇭</span>
                  </div>
                  <span className="font-medium">Ghana</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    <span>🇰🇪</span>
                  </div>
                  <span className="font-medium">Kenya</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center text-2xl">
                    <span>🇿🇦</span>
                  </div>
                  <span className="font-medium">South Africa</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    <span>🇧🇷</span>
                  </div>
                  <span className="font-medium">Brazil</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center text-2xl">
                    <span>🇺🇸</span>
                  </div>
                  <span className="font-medium">USA</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    <span>🇬🇧</span>
                  </div>
                  <span className="font-medium">UK</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center text-2xl">
                    <span>🇨🇳</span>
                  </div>
                  <span className="font-medium">China</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    <span>🇪🇬</span>
                  </div>
                  <span className="font-medium">Egypt</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center text-2xl">
                    <span>🇨🇦</span>
                  </div>
                  <span className="font-medium">Canada</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-2xl">
                    <span>🇦🇪</span>
                  </div>
                  <span className="font-medium">UAE</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-lime-100 flex items-center justify-center text-2xl">
                    <span>➕</span>
                  </div>
                  <span className="font-medium">Coming Soon</span>
                </div>
              </div>
            </div>

            <div className="md:w-1/2 flex justify-center">
              <div className="relative w-full max-w-md">
                {/* Globe stying */}
                <Lottie
                  animationData={globe}
                  className="w-full h-full object-contain"
                  loop={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;