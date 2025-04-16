// app/send-money/page.tsx
'use client';

import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface CurrencyOption {
  code: string;
  flag: string;
}

export default function SendMoneyPage() {
  const [amount, setAmount] = useState<string>("100");
  const [transferType, setTransferType] = useState<'International' | 'Local Transfer'>('International');
  const [note, setNote] = useState<string>("");
  const [sendCurrency, setSendCurrency] = useState<CurrencyOption>({ code: 'GBP', flag: '🇬🇧' });
  const [receiveCurrency, setReceiveCurrency] = useState<CurrencyOption>({ code: 'NGN', flag: '🇳🇬' });
  
  // Example exchange rate
  const exchangeRate = 2010;
  const receiverGets = parseFloat(amount || "0") * exchangeRate;
  
  return (
    <div className="bg-white min-h-screen max-w-lg rounded-md mx-auto shadow-md ">
      {/* Status bar */}
      <div className="p-4 flex justify-between items-center ">
        <div className="text-lg font-medium">08:32</div>
        <div className="flex items-center gap-2">
          <div className="text-sm">••</div>
          <div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 9L1 15" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <path d="M5 5L5 19" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <path d="M9 1L9 23" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <path d="M13 5L13 19" stroke="black" strokeWidth="2" strokeLinecap="round"/>
              <path d="M17 9L17 15" stroke="black" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <div>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M3 7C3 4.23858 5.23858 2 8 2H16C18.7614 2 21 4.23858 21 7V17C21 19.7614 18.7614 22 16 22H8C5.23858 22 3 19.7614 3 17V7ZM5 7C5 5.34315 6.34315 4 8 4H16C17.6569 4 19 5.34315 19 7V17C19 18.6569 17.6569 20 16 20H8C6.34315 20 5 18.6569 5 17V7ZM12 6C9.23858 6 7 8.23858 7 11C7 13.7614 9.23858 16 12 16C14.7614 16 17 13.7614 17 11C17 8.23858 14.7614 6 12 6Z" fill="black"/>
            </svg>
          </div>
          <div className="text-sm">85%</div>
        </div>
      </div>
      
      {/* Header */}
      <div className="px-6 pt-2 pb-4">
        <div className="flex items-center">
          <Link href="/" className="mr-4">
            <ArrowLeft size={24} color="#000" />
          </Link>
          <h1 className="text-xl font-semibold text-center flex-1 pr-8">Send Money</h1>
        </div>
      </div>
      
      {/* Amount input section */}
      <div className="px-6">
        <p className="text-gray-500 text-center mb-4">Enter the amount you want to send</p>
        
        {/* Transfer type toggle */}
        <div className="bg-gray-100 text-[#c4fc74] rounded-full p-1 flex mb-4">
          <button 
            className={`flex-1 py-2 px-4 rounded-full text-center ${transferType === 'International' ? 'bg-white text-[#c4fc74]' : 'text-gray-500'}`}
            onClick={() => setTransferType('International')}
          >
            International
          </button>
          <button 
            className={`flex-1 py-2 px-4 rounded-full text-center ${transferType === 'Local Transfer' ? 'bg-white text-[#c4fc74]' : 'text-gray-500'}`}
            onClick={() => setTransferType('Local Transfer')}
          >
            Local Transfer
          </button>
        </div>
        
        {/* Amount you send */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <p className="text-[#c4fc74] mb-2">You send</p>
          <div className="flex justify-between items-center">
            <input 
              type="text" 
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="text-3xl font-semibold focus:outline-none w-1/2"
            />
            <button className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4">
              <span className="text-xl">{sendCurrency.flag}</span>
              <span className="font-medium">{sendCurrency.code}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <p className="text-sm text-orange-500 text-right mt-2">You have: 0.50 GBP</p>
        </div>
        
        {/* Transfer details */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-500">Transfer fee</p>
            <p className="text-amber-500 font-medium">0.00 GBP</p>
          </div>
          <div className="flex justify-between items-center mb-2">
            <p className="text-gray-500">We will convert</p>
            <p className="text-gray-700 font-medium">100.00 GBP</p>
          </div>
          <div className="flex justify-between items-center pt-1 border-t border-gray-100">
            <p className="text-gray-500">1 GBP = 2,010.00 NGN</p>
          </div>
        </div>
        
        {/* Receiver amount */}
        <div className="bg-white border border-gray-200 rounded-lg p-4 mb-4">
          <p className="text-[#c4fc74] mb-2">Receiver gets</p>
          <div className="flex justify-between items-center">
            <p className="text-3xl font-semibold">{receiverGets.toLocaleString()}</p>
            <button className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4">
              <span className="text-xl">{receiveCurrency.flag}</span>
              <span className="font-medium">{receiveCurrency.code}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 9L12 15L18 9" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Note */}
        <div className="bg-white border border-gray-200 rounded-lg px-4 py-3 mb-4">
          <input
            type="text"
            placeholder="Add Note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            className="w-full text-gray-400 focus:outline-none"
          />
        </div>
        
        {/* Continue button */}
        <button className="w-full bg-[#c4fc74] hover:bg-[#a3d84f] text-white font-medium py-4 px-6 rounded-lg mb-6">
          Continue
        </button>
      </div>
      
      {/* iPhone indicator */}
      <div className="flex justify-center pb-4">
        <div className="w-24 h-1 bg-black rounded-full"></div>
      </div>
    </div>
  );
}