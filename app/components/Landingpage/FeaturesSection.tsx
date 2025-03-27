import React from 'react';
import { ArrowUpRight, Cpu, CreditCard, Globe, Lock, UserCheck, Wallet, Smartphone, ChevronRight } from 'lucide-react';

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-36 bg-[#f6f6f6]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-3">
            <span className="text-xs uppercase tracking-wider font-bold text-[#343444]">
              Our Technology
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#343444]">
            Powered by Cutting-Edge Innovation
          </h2>
          <p className="text-lg text-[#343444]/80">
            Transforming cross-border payments with blockchain technology, making financial transfers seamless and secure.
          </p>
        </div>
        
        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <Wallet size={28} />,
              iconBg: "bg-[#c4fc74]/20",
              iconColor: "text-[#343444]",
              title: "Crypto-Powered Transfers",
              description: "Lightning-fast settlements on StarkNet with unparalleled security and minimal fees.",
              items: [
                "Zero-knowledge proofs",
                "Low transaction costs",
                "Instant cross-border transfers"
              ],
              link: "Blockchain Technology",
              linkColor: "text-[#343444] hover:text-[#343444]/70"
            },
            {
              icon: <CreditCard size={28} />,
              iconBg: "bg-[#c4fc74]/20",
              iconColor: "text-[#343444]",
              title: "Flexible Funding Options",
              description: "Seamlessly convert local currency to crypto with competitive exchange rates.",
              items: [
                "Multiple payment methods",
                "Transparent conversions",
                "Competitive rates"
              ],
              link: "Funding Methods",
              linkColor: "text-[#343444] hover:text-[#343444]/70"
            },
            {
              icon: <Smartphone size={28} />,
              iconBg: "bg-[#c4fc74]/20",
              iconColor: "text-[#343444]",
              title: "Universal Accessibility",
              description: "Send and receive money across multiple platforms, including low-tech solutions.",
              items: [
                "Web platform",
                "Mobile apps",
                "USSD service"
              ],
              link: "Access Channels",
              linkColor: "text-[#343444] hover:text-[#343444]/70"
            }
          ].map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-8 border border-[#343444]/10 shadow-sm transition duration-300 hover:shadow-xl hover:-translate-y-2">
                <div className={`h-16 w-16 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}>
                  <div className={feature.iconColor}>{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#343444]">{feature.title}</h3>
                <p className="text-[#343444]/80 mb-6">
                  {feature.description}
                </p>
                <ul className="space-y-4 mb-8">
                  {feature.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-[#c4fc74]/30 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <span className="text-[#343444] text-xs">✓</span>
                      </div>
                      <span className="text-sm text-[#343444]/80">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="pt-4 border-t border-[#343444]/10">
                  <a href="#" className={`inline-flex items-center gap-2 ${feature.linkColor} font-medium transition`}>
                    {feature.link} <ArrowUpRight size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* How it Works Section */}
        <div className="mt-24 relative">
          <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-[#343444]/10 p-12">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1 rounded-full bg-[#c4fc74]/20 text-sm font-medium text-[#343444] mb-4">
                Simple Process
              </span>
              <h3 className="text-3xl font-bold mb-4 text-[#343444]">How Safiri Send Works</h3>
              <p className="text-[#343444]/80 max-w-xl mx-auto">
                A seamless three-step process built on blockchain technology for security, speed, and accessibility.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 relative">
              {/* Connection lines (desktop only) */}
              <div className="hidden md:block absolute top-24 left-1/3 w-1/3 h-1 bg-[#c4fc74] z-0"></div>
              <div className="hidden md:block absolute top-24 right-1/3 w-1/3 h-1 bg-[#c4fc74] z-0"></div>
              
              {/* Step 1 */}
              <div className="group">
                <div className="bg-white rounded-2xl p-8 border border-[#343444]/10 shadow-sm relative z-10 h-full transition duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 h-10 w-10 rounded-full bg-[#c4fc74] flex items-center justify-center shadow-md">
                    <span className="font-bold text-[#343444]">1</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-[#343444]">Fund Your Wallet</h4>
                  <p className="text-[#343444]/80 text-sm mb-6">
                    Add money to your Safiri Send wallet using bank transfer, mobile money, or card payment in your local currency.
                  </p>
                  <div className="w-full bg-[#f6f6f6] rounded-xl border border-[#343444]/10 flex items-center justify-center p-6">
                    <div className="grid grid-cols-3 gap-3 w-full">
                      {[
                        { icon: <CreditCard size={24} className="text-[#343444]/60" /> },
                        { icon: <Globe size={24} className="text-[#343444]/60" /> },
                        { icon: <Smartphone size={24} className="text-[#343444]/60" /> }
                      ].map((item, i) => (
                        <div key={i} className="h-16 bg-white rounded-lg shadow-sm flex items-center justify-center">
                          {item.icon}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 2 */}
              <div className="group">
                <div className="bg-white rounded-2xl p-8 border border-[#343444]/10 shadow-sm relative z-10 h-full transition duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 h-10 w-10 rounded-full bg-[#c4fc74] flex items-center justify-center shadow-md">
                    <span className="font-bold text-[#343444]">2</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-[#343444]">Send Money</h4>
                  <p className="text-[#343444]/80 text-sm mb-6">
                    Specify recipient details, amount, and destination country. Funds are converted and settled on StarkNet.
                  </p>
                  <div className="w-full bg-[#f6f6f6] rounded-xl border border-[#343444]/10 flex items-center justify-center p-6">
                    <div className="space-y-4 w-full">
                      <div className="h-8 bg-white rounded-lg shadow-sm w-full"></div>
                      <div className="h-8 bg-white rounded-lg shadow-sm w-full"></div>
                      <div className="h-10 bg-[#c4fc74] rounded-lg w-full flex items-center justify-center shadow-sm">
                        <span className="text-sm font-semibold text-[#343444]">Send Now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Step 3 */}
              <div className="group">
                <div className="bg-white rounded-2xl p-8 border border-[#343444]/10 shadow-sm relative z-10 h-full transition duration-300 hover:shadow-lg hover:-translate-y-1">
                  <div className="absolute top-0 right-0 -mt-2 -mr-2 h-10 w-10 rounded-full bg-[#c4fc74] flex items-center justify-center shadow-md">
                    <span className="font-bold text-[#343444]">3</span>
                  </div>
                  <h4 className="text-xl font-semibold mb-4 text-[#343444]">Receive Funds</h4>
                  <p className="text-[#343444]/80 text-sm mb-6">
                    Recipients get an instant notification and can withdraw to their bank account or mobile money in local currency.
                  </p>
                  <div className="w-full bg-[#f6f6f6] rounded-xl border border-[#343444]/10 flex items-center justify-center p-6">
                    <div className="space-y-4 w-full">
                      <div className="flex justify-between items-center mb-2">
                        <div className="h-10 w-10 rounded-full bg-[#c4fc74]/20 flex items-center justify-center shadow-sm">
                          <UserCheck size={18} className="text-[#343444]" />
                        </div>
                        <div className="h-8 px-4 bg-[#c4fc74]/20 rounded-full flex items-center justify-center shadow-sm">
                          <span className="text-xs text-[#343444] font-semibold">Received</span>
                        </div>
                      </div>
                      <div className="h-8 bg-white rounded-lg shadow-sm w-3/4"></div>
                      <div className="h-10 bg-[#c4fc74] rounded-lg w-full flex items-center justify-center shadow-sm">
                        <span className="text-sm font-semibold text-[#343444]">Withdraw</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-center mt-16">
              <a href="#" className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[#c4fc74] text-[#343444] font-medium hover:shadow-lg transition-all shadow-md">
                <Cpu size={20} />
                <span>Get Started with Safiri Send</span>
                <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;