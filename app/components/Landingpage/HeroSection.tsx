"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState, useEffect } from "react";
import { useIntersectionObserver } from "../Hooks/useIntersectionObserver";
import { useRef as reactUseRef } from "react";

const HeroSection = () => {
  const [animationStep, setAnimationStep] = useState(0);
  const statsRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const isStatsVisible = useIntersectionObserver(statsRef, {
    threshold: 1,
    rootMargin: "0px 0px -50px 0px",
  });

  useEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, 4);
  }, []);

  const stats = [
    {
      value: "5+",
      label: "African Countries",
      description: "Expanding cross-border reach",
      icon: "🌍",
    },
    {
      value: "10s",
      label: "Average Transfer Time",
      description: "Lightning-fast transactions",
      icon: "⚡",
    },
    {
      value: "1%",
      label: "Transaction Fee",
      description: "Lowest in the market",
      icon: "💸",
    },
    {
      value: "24/7",
      label: "Service Availability",
      description: "Always accessible",
      icon: "🕒",
    },
  ];

  // Control the USSD payment animation steps
  useEffect(() => {
    const timer = setInterval(() => {
      setAnimationStep((prev) => (prev < 3 ? prev + 1 : 0));
    }, 2000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-16 md:py-10 overflow-hidden bg-white text-gray-900 animate-fade-in">
      {/*  Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#f9f9fc] via-[#f3f4ff] to-[#f9f9fc] opacity-50"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-indigo-100 rounded-full blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[700px] h-[700px] bg-green-100 rounded-full blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

        {/* grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTAgMGg4MHY4MEgwVjB6bTMwIDQwaDIwdjIwSDMwVjQwem0wLTMwaDIwdjIwSDMwVjEweiIvPjwvZz48L2c+PC9zdmc+')]"></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="animate-fade-in-top  space-y-6">
            <div className="inline-block px-4 py-1.5 rounded-full border border-gray-200 bg-white/70 backdrop-blur-md shadow-md">
              <span className="text-sm font-medium flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#c4fc74] animate-pulse"></span>
                Powered by Blockchain
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#373742] to-[#373742]/80 bg-clip-text text-transparent">
              Seamless Cross-Border Payments
            </h1>

            <p className="text-xl text-gray-600 max-w-xl">
              Revolutionizing cross-border transactions with blockchain
              technology. Instant, secure, and transparent money transfers
              across the continent.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3.5 rounded-full bg-[#c4fc74] text-gray-900 font-semibold hover:bg-[#a3d84f] transition-colors shadow-md shadow-lime-200 flex items-center gap-2">
                Get Started <ArrowRight size={20} />
              </button>
              <button className="px-8 py-3.5 rounded-full border border-gray-300 bg-white/70 backdrop-blur-md text-gray-800 font-semibold hover:bg-gray-50 transition-colors shadow-md flex items-center gap-2">
                Learn More <ArrowUpRight size={20} />
              </button>
            </div>

            {/* Country Flags */}
            <div className="mt-10 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[
                  { name: "Nigeria", colors: ["#008751", "#ffffff"] },
                  { name: "Ghana", colors: ["#ce1126", "#fcd116", "#006b3f"] },
                  {
                    name: "Kenya",
                    colors: ["#000000", "#ffffff", "#bc0000", "#006600"],
                  },
                  {
                    name: "South Africa",
                    colors: ["#002395", "#de3831", "#007a4d", "#ffb612"],
                  },
                ].map((country, index) => (
                  <div
                    key={country.name}
                    className="w-12 h-12 rounded-full border-2 border-white overflow-hidden shadow-lg"
                  >
                    <svg viewBox="0 0 36 36" className="w-full h-full">
                      {country.colors.map((color, colorIndex) => (
                        <rect
                          key={colorIndex}
                          x="0"
                          y={colorIndex * (36 / country.colors.length)}
                          width="36"
                          height={36 / country.colors.length}
                          fill={color}
                        />
                      ))}
                    </svg>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full border-2 border-white bg-gray-100 flex items-center justify-center shadow-lg">
                  <span className="font-semibold text-sm text-gray-800">+</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                Connecting multiple African nations
              </p>
            </div>
          </div>

          {/* Phone Section */}
          <div className="lg:ml-auto relative animate-slide-in-right">
            <div className="relative z-10 max-w-2xl mx-auto">
              <svg viewBox="0 0 600 1100" className="w-full h-full">
                {/* Phone shadow */}
                <ellipse
                  cx="300"
                  cy="1050"
                  rx="250"
                  ry="50"
                  fill="rgba(0,0,0,0.1)"
                />

                {/* Phone body */}
                <defs>
                  <linearGradient
                    id="phoneGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="100%" stopColor="#c4c4c6" />
                  </linearGradient>
                  <filter
                    id="phoneGlow"
                    x="-20%"
                    y="-20%"
                    width="140%"
                    height="140%"
                  >
                    <feGaussianBlur stdDeviation="15" result="blur" />
                    <feComposite
                      in="SourceGraphic"
                      in2="blur"
                      operator="over"
                    />
                  </filter>
                </defs>

                {/* Phone frame  */}
                <rect
                  x="50"
                  y="50"
                  width="500"
                  height="1000"
                  rx="60"
                  fill="url(#phoneGradient)"
                  stroke="#c4c4c6"
                  strokeWidth="3"
                  filter="url(#phoneGlow)"
                />

                {/* Camera Notch */}
                <rect
                  x="230"
                  y="60"
                  width="140"
                  height="35"
                  rx="20"
                  fill="#000"
                />
                <circle cx="230" cy="77" r="12" fill="#222" />
                <circle cx="370" cy="77" r="12" fill="#222" />

                {/* Phone screen */}
                <rect
                  x="75"
                  y="100"
                  width="450"
                  height="900"
                  rx="40"
                  fill="#ffffff"
                />

                {/* USSD Menu*/}
                <g>
                  <rect
                    x="100"
                    y="150"
                    width="400"
                    height="100"
                    rx="20"
                    fill="#f0f0f0"
                    stroke="#e0e0e0"
                    strokeWidth="1"
                  />
                  <rect
                    x="100"
                    y="270"
                    width="400"
                    height="100"
                    rx="20"
                    fill="#f0f0f0"
                    stroke="#e0e0e0"
                    strokeWidth="1"
                    opacity={animationStep >= 1 ? "1" : "0"}
                  />
                  <rect
                    x="100"
                    y="390"
                    width="400"
                    height="100"
                    rx="20"
                    fill="#f0f0f0"
                    stroke="#e0e0e0"
                    strokeWidth="1"
                    opacity={animationStep >= 2 ? "1" : "0"}
                  />
                  <rect
                    x="100"
                    y="510"
                    width="400"
                    height="150"
                    rx="20"
                    fill="#f0f0f0"
                    stroke="#e0e0e0"
                    strokeWidth="1"
                    opacity={animationStep >= 3 ? "1" : "0"}
                  />

                  {/* Step 1: Select Service */}
                  <text
                    x="140"
                    y="200"
                    fill="#000"
                    fontSize="24"
                    fontFamily="Inter, sans-serif"
                    fontWeight="600"
                  >
                    Select Service
                  </text>
                  <text
                    x="140"
                    y="235"
                    fill="#87c236"
                    fontSize="20"
                    fontFamily="Inter, sans-serif"
                  >
                    1. Send Money
                  </text>

                  {/* Step 2: Select Country */}
                  <g opacity={animationStep >= 1 ? "1" : "0"}>
                    <text
                      x="140"
                      y="320"
                      fill="#000"
                      fontSize="24"
                      fontFamily="Inter, sans-serif"
                      fontWeight="600"
                    >
                      Select Country
                    </text>
                    <text
                      x="140"
                      y="355"
                      fill="#87c236"
                      fontSize="20"
                      fontFamily="Inter, sans-serif"
                    >
                      2. Ghana
                    </text>
                  </g>

                  {/* Step 3: Enter Amount */}
                  <g opacity={animationStep >= 2 ? "1" : "0"}>
                    <text
                      x="140"
                      y="440"
                      fill="#000"
                      fontSize="24"
                      fontFamily="Inter, sans-serif"
                      fontWeight="600"
                    >
                      Enter Amount
                    </text>
                    <text
                      x="140"
                      y="475"
                      fill="#87c236"
                      fontSize="20"
                      fontFamily="Inter, sans-serif"
                    >
                      $100
                    </text>
                  </g>

                  {/* Step 4: Confirmation */}
                  <g opacity={animationStep >= 3 ? "1" : "0"}>
                    <text
                      x="140"
                      y="560"
                      fill="#000"
                      fontSize="24"
                      fontFamily="Inter, sans-serif"
                      fontWeight="600"
                    >
                      Confirming...
                    </text>
                    <text
                      x="140"
                      y="610"
                      fill="#87c236"
                      fontSize="28"
                      fontFamily="Inter, sans-serif"
                    >
                      Payment Sent!
                    </text>
                    <circle cx="300" cy="570" r="6" fill="#87c236">
                      <animate
                        attributeName="opacity"
                        values="0;1;0"
                        dur="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>
                </g>

                {/* Blockchain connection visual */}
                <g opacity={animationStep >= 3 ? "1" : "0"}>
                  <path
                    d="M330 570 L430 570 L530 650"
                    stroke="#87c236"
                    strokeWidth="3"
                    strokeDasharray="8,8"
                    fill="none"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      from="16"
                      to="0"
                      dur="1s"
                      repeatCount="indefinite"
                    />
                  </path>
                  <circle
                    cx="530"
                    cy="650"
                    r="25"
                    fill="none"
                    stroke="#87c236"
                    strokeWidth="3"
                  >
                    <animate
                      attributeName="r"
                      values="8;25;8"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </g>

                {/* Home Indicator */}
                <rect
                  x="250"
                  y="1030"
                  width="100"
                  height="8"
                  rx="4"
                  fill="#333"
                />
              </svg>
            </div>

            <div className="absolute top-1/4 -right-16 w-32 h-32 bg-indigo-100 rounded-full blur-md z-0 opacity-40 animate-blob"></div>
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-green-100 rounded-full blur-md z-0 opacity-40 animate-blob animation-delay-2000"></div>
          </div>
        </div>
                {/* stat section */}
        <div
          ref={statsRef}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-200 pt-12"
        >
          {stats.map((stat, index) => {
            const isVisible = useIntersectionObserver(
              { current: cardRefs.current[index] },
              {
                threshold: 0.2,
                rootMargin: "0px 0px -50px 0px",
              }
            );

            return (
              <div
                key={stat.label}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`text-center group p-4 rounded-xl transition-all duration-300 hover:bg-[#c4fc74]/10 hover:shadow-lg 
                ${isVisible ? "animate-fade-in-top" : "opacity-0"}`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-4xl mb-2 opacity-80 group-hover:opacity-100 transition-opacity">
                  {stat.icon}
                </div>
                <h3 className="text-4xl font-bold mb-2 text-[#c4fc74] group-hover:scale-110 transition-transform duration-300">
                  {stat.value}
                </h3>
                <p className="text-gray-600 font-semibold group-hover:text-[#c4fc74] transition-colors duration-300">
                  {stat.label}
                </p>
                <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
const useRef = reactUseRef;
