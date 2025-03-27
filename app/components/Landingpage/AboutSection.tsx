import React from 'react';
import { Shield, Zap, Smartphone, Globe, ArrowRight } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#f6f6f6] overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <div className="inline-block mb-3 transform transition duration-500 hover:scale-105">
            <span className="text-xs uppercase tracking-wider font-bold text-[#343444]">
              Our Vision
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#343444]">
            Transforming African Remittances
          </h2>
          <p className="text-lg text-[#343444]/80 animate-fade-in">
            Blockchain-powered financial revolution, connecting African economies with lightning speed and unparalleled security.
          </p>
        </div>
        
        <div className="flex flex-col items-center justify-center">
          <div className="max-w-5xl w-full">
            <div className="relative z-10">
              <div className="text-center mb-10">
                <div className="inline-block mb-3">
                  <span className="text-xs uppercase tracking-wider font-bold px-3 py-1 bg-[#c4fc74]/10 text-[#343444] rounded-full">
                    Next-Gen Finance
                  </span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#343444]">
                  Empowering African Financial Futures
                </h3>
                <p className="text-[#343444]/80 mb-8 text-lg text-center max-w-2xl mx-auto">
                  Safiri Send: Your gateway to seamless, instant, and secure cross-border payments. We're not just a platform—we're a financial ecosystem.
                </p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    icon: <Shield className="text-[#c4fc74]" size={24} />,
                    color: "bg-[#c4fc74]/20",
                    title: "Blockchain Guardian",
                    desc: "Military-grade encryption meets blockchain transparency. Every transaction is an immutable digital fortress.",
                    animation: "animate-float-1"
                  },
                  {
                    icon: <Zap className="text-[#c4fc74]" size={24} />,
                    color: "bg-[#c4fc74]/20",
                    title: "Quantum-Speed Transfer",
                    desc: "StarkNet's lightning network: Transmit funds faster than a thought, across continents in milliseconds.",
                    animation: "animate-float-2"
                  },
                  {
                    icon: <Smartphone className="text-[#c4fc74]" size={24} />,
                    color: "bg-[#c4fc74]/20",
                    title: "Universal Access",
                    desc: "Financial freedom without boundaries. Web, mobile, USSD—technology bows to your convenience.",
                    animation: "animate-float-3"
                  },
                  {
                    icon: <Globe className="text-[#c4fc74]" size={24} />,
                    color: "bg-[#c4fc74]/20",
                    title: "Currency Chameleon",
                    desc: "Local currencies dance at your fingertips. Exchange rates that respect your economic journey.",
                    animation: "animate-float-4"
                  }
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className={`bg-white/60 backdrop-blur-sm p-6 rounded-3xl border border-gray-100 
                      transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 
                      hover:border-[#c4fc74] ${feature.animation}`}
                  >
                    <div className={`h-12 w-12 rounded-xl ${feature.color} flex items-center justify-center mb-4 transform transition duration-300 group-hover:rotate-12`}>
                      {feature.icon}
                    </div>
                    <h4 className="text-lg font-bold mb-2 text-[#343444]">{feature.title}</h4>
                    <p className="text-[#343444]/80 text-sm">
                      {feature.desc}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-10 flex justify-center animate-bounce-slow">
                <a 
                  href="#features" 
                  className="inline-flex items-center gap-2 px-6 py-3 
                    bg-[#c4fc74] 
                    text-[#343444] font-bold rounded-full 
                    hover:bg-[#c4fc74]/90 
                    transition-all shadow-2xl hover:shadow-[#c4fc74]/50"
                >
                  Explore Our Future <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;