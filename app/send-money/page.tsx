'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Info, Lock, Globe, RefreshCw, ChevronDown } from 'lucide-react';

interface CurrencyOption {
  code: string;
  flag: string;
  name: string;
  balance?: number;
}

export default function SendMoneyPage() {
  // Form state
  const [amount, setAmount] = useState<string>("100");
  const [transferType, setTransferType] = useState<'International' | 'Local'>('International');
  const [note, setNote] = useState<string>("");
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [showCurrencyDropdown, setShowCurrencyDropdown] = useState<'send' | 'receive' | null>(null);
  
  // Refs for dropdowns
  const sendDropdownRef = useRef<HTMLDivElement>(null);
  const receiveDropdownRef = useRef<HTMLDivElement>(null);
  
  // Currency options
  const currencies: CurrencyOption[] = [
    { code: 'GBP', flag: '🇬🇧', name: 'British Pound', balance: 850.50 },
    { code: 'USD', flag: '🇺🇸', name: 'US Dollar', balance: 1240.25 },
    { code: 'EUR', flag: '🇪🇺', name: 'Euro', balance: 920.75 },
    { code: 'NGN', flag: '🇳🇬', name: 'Nigerian Naira', balance: 425000 },
    { code: 'KES', flag: '🇰🇪', name: 'Kenyan Shilling', balance: 35000 },
    { code: 'GHS', flag: '🇬🇭', name: 'Ghanaian Cedi', balance: 3500 },
    { code: 'ZAR', flag: '🇿🇦', name: 'South African Rand', balance: 7500 },
    { code: 'RWF', flag: '🇷🇼', name: 'Rwandan Franc', balance: 250000 }
  ];
  
  const [sendCurrency, setSendCurrency] = useState<CurrencyOption>(currencies[0]);
  const [receiveCurrency, setReceiveCurrency] = useState<CurrencyOption>(currencies[3]);
  const [exchangeRate, setExchangeRate] = useState<number>(2010);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [exchangeRateUpdatedAt, setExchangeRateUpdatedAt] = useState<Date>(new Date());
  
  // Calculate receiver amount
  const receiverGets = parseFloat(amount || "0") * exchangeRate;
  
 
  const totalAmount = parseFloat(amount || "0");
  
 
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (showCurrencyDropdown === 'send' && sendDropdownRef.current && 
          !sendDropdownRef.current.contains(event.target as Node)) {
        setShowCurrencyDropdown(null);
      }
      if (showCurrencyDropdown === 'receive' && receiveDropdownRef.current && 
          !receiveDropdownRef.current.contains(event.target as Node)) {
        setShowCurrencyDropdown(null);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showCurrencyDropdown]);
  
  // Update exchange rate when currencies change
  useEffect(() => {
    updateExchangeRate();
  }, [sendCurrency, receiveCurrency]);
  
  // Simulated exchange rate update
  const updateExchangeRate = () => {
    setIsLoading(true);
    
   
    setTimeout(() => {
     
      let baseRate = 0;
      
      if (sendCurrency.code === 'GBP' && receiveCurrency.code === 'NGN') baseRate = 2010;
      else if (sendCurrency.code === 'USD' && receiveCurrency.code === 'NGN') baseRate = 1570;
      else if (sendCurrency.code === 'EUR' && receiveCurrency.code === 'NGN') baseRate = 1850;
      else if (sendCurrency.code === 'GBP' && receiveCurrency.code === 'KES') baseRate = 165;
      else if (sendCurrency.code === 'USD' && receiveCurrency.code === 'KES') baseRate = 129;
      else if (sendCurrency.code === 'GBP' && receiveCurrency.code === 'GHS') baseRate = 18.5;
      else if (sendCurrency.code === 'USD' && receiveCurrency.code === 'GHS') baseRate = 14.5;
      else baseRate = 100; 
      
      // Add slight randomness for realism
      const randomVariation = (Math.random() * 10 - 5) / 10; 
      const newRate = baseRate * (1 + randomVariation);
      
      setExchangeRate(parseFloat(newRate.toFixed(2)));
      setExchangeRateUpdatedAt(new Date());
      setIsLoading(false);
    }, 1000);
  };
  
  // Handle currency selection
  const handleCurrencySelect = (currency: CurrencyOption) => {
    if (showCurrencyDropdown === 'send') {
      setSendCurrency(currency);
    } else {
      setReceiveCurrency(currency);
    }
    setShowCurrencyDropdown(null);
  };
  
  // Handle continue button click
  const handleContinue = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      
      setIsProcessing(true);
      setTimeout(() => {
      
        setIsProcessing(false);
     
        setCurrentStep(1);
      }, 2000);
    }
  };
  
  // Format time since last update
  const getTimeSinceUpdate = () => {
    const seconds = Math.floor((new Date().getTime() - exchangeRateUpdatedAt.getTime()) / 1000);
    return `${seconds} seconds ago`;
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-[#00000033] bg-opacity-50 fixed inset-0 z-50 p-4">
      <div className="max-w-3xl w-full bg-gray-50 rounded-2xl shadow-lg overflow-hidden relative pb-8 animate-fade-in">
        {/* Header */}
        <div className="bg-[#c4fc74]/90 backdrop-blur-md px-6 py-5 sticky top-0 z-10">
          <div className="flex items-center">
            <h1 className="text-xl font-semibold text-center flex-1">
              {currentStep === 1 ? 'Send Money' : 'Review Transfer'}
            </h1>
          </div>
        </div>
        
        {/* Step indicator */}
        <div className="flex justify-center mt-4 mb-6 px-6">
          <div className="flex items-center w-full max-w-xs">
            <div className={`h-2 w-2/4 rounded-l-full ${currentStep >= 1 ? 'bg-[#c4fc74]' : 'bg-gray-200'}`}></div>
            <div className={`h-2 w-2/4 rounded-r-full ${currentStep >= 2 ? 'bg-[#c4fc74]' : 'bg-gray-200'}`}></div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="px-6 max-h-[80vh] overflow-y-auto">
          {/* Step 1: Amount Input */}
          {currentStep === 1 && (
            <>
              <p className="text-gray-600 text-center mb-6">Enter the amount you want to send</p>
              
              {/* Transfer type toggle */}
              <div className="bg-gray-100 rounded-full p-1 flex mb-6">
                <button 
                  className={`flex-1 py-2.5 px-4 rounded-full text-center flex items-center justify-center gap-2 transition-all duration-200 ${
                    transferType === 'International' ? 'bg-white shadow-md text-gray-800' : 'text-gray-500'
                  }`}
                  onClick={() => setTransferType('International')}
                >
                  <Globe size={18} />
                  International
                </button>
                <button 
                  className={`flex-1 py-2.5 px-4 rounded-full text-center flex items-center justify-center gap-2 transition-all duration-200 ${
                    transferType === 'Local' ? 'bg-white shadow-md text-gray-800' : 'text-gray-500'
                  }`}
                  onClick={() => setTransferType('Local')}
                >
                  <Lock size={18} />
                  Local
                </button>
              </div>
              
              {/* Amount you send */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 shadow-sm">
                <p className="text-gray-600 mb-2 font-medium">You send</p>
                <div className="flex justify-between items-center">
                  <div className="relative">
                    <span className="absolute text-2xl font-medium text-gray-500 -left-1 top-1/2 transform -translate-y-1/2">
                      {sendCurrency.code === 'GBP' ? '£' : 
                       sendCurrency.code === 'USD' ? '$' : 
                       sendCurrency.code === 'EUR' ? '€' : ''}
                    </span>
                    <input 
                      type="text" 
                      value={amount}
                      onChange={(e) => {
                      
                        const re = /^[0-9]*\.?[0-9]*$/;
                        if (e.target.value === '' || re.test(e.target.value)) {
                          setAmount(e.target.value);
                        }
                      }}
                      className="text-3xl font-semibold focus:outline-none pl-4 w-full bg-transparent"
                    />
                  </div>
                  <div ref={sendDropdownRef} className="relative">
                    <button 
                      className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-50 transition-colors"
                      onClick={() => setShowCurrencyDropdown(showCurrencyDropdown === 'send' ? null : 'send')}
                    >
                      <span className="text-xl">{sendCurrency.flag}</span>
                      <span className="font-medium">{sendCurrency.code}</span>
                      <ChevronDown size={16} className={showCurrencyDropdown === 'send' ? 'rotate-180 transition-transform' : 'transition-transform'} />
                    </button>
                    
                    {/* Send Currency Dropdown */}
                    {showCurrencyDropdown === 'send' && (
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
                        {currencies.map(currency => (
                          <button
                            key={currency.code}
                            className={`flex items-center justify-between w-full p-3 hover:bg-gray-50 text-left ${
                              currency.code === sendCurrency.code ? 'bg-[#c4fc74]/10' : ''
                            }`}
                            onClick={() => handleCurrencySelect(currency)}
                          >
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{currency.flag}</span>
                              <span className="font-medium">{currency.code}</span>
                            </div>
                            <span className="text-sm text-gray-500">
                              {currency.balance?.toLocaleString()}
                            </span>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 flex items-center justify-between">
                  <span>Available balance</span>
                  <span className="font-semibold">{sendCurrency.balance?.toLocaleString()} {sendCurrency.code}</span>
                </p>
              </div>
              
              {/* Transfer details */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 shadow-sm">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center gap-2">
                    <p className="text-gray-600">Exchange rate</p>
                    <button onClick={updateExchangeRate} disabled={isLoading} className="text-blue-500 hover:text-blue-600 transition-colors">
                      <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
                    </button>
                  </div>
                  <div className="flex items-center">
                    <p className="text-gray-700 font-medium">1 {sendCurrency.code} = {exchangeRate.toLocaleString()} {receiveCurrency.code}</p>
                  </div>
                </div>
                <p className="text-xs text-gray-500">
                  Updated {getTimeSinceUpdate()}
                </p>
              </div>
              
              {/* Receiver gets */}
              <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 shadow-sm">
                <p className="text-gray-600 mb-2 font-medium">Receiver gets</p>
                <div className="flex justify-between items-center">
                  <p className="text-3xl font-semibold">{receiverGets.toLocaleString()}</p>
                  <div ref={receiveDropdownRef} className="relative">
                    <button 
                      className="flex items-center gap-2 border border-gray-300 rounded-full py-2 px-4 hover:bg-gray-50 transition-colors"
                      onClick={() => setShowCurrencyDropdown(showCurrencyDropdown === 'receive' ? null : 'receive')}
                    >
                      <span className="text-xl">{receiveCurrency.flag}</span>
                      <span className="font-medium">{receiveCurrency.code}</span>
                      <ChevronDown size={16} className={showCurrencyDropdown === 'receive' ? 'rotate-180 transition-transform' : 'transition-transform'} />
                    </button>
                    
                    {/* Receive Currency Dropdown */}
                    {showCurrencyDropdown === 'receive' && (
                      <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 z-20 max-h-60 overflow-y-auto">
                        {currencies.map(currency => (
                          <button
                            key={currency.code}
                            className={`flex items-center w-full p-3 hover:bg-gray-50 text-left ${
                              currency.code === receiveCurrency.code ? 'bg-[#c4fc74]/10' : ''
                            }`}
                            onClick={() => handleCurrencySelect(currency)}
                          >
                            <span className="text-lg mr-2">{currency.flag}</span>
                            <div>
                              <p className="font-medium">{currency.code}</p>
                              <p className="text-xs text-gray-500">{currency.name}</p>
                            </div>
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Note */}
              <div className="bg-white border border-gray-200 rounded-lg px-5 py-4 mb-6 shadow-sm">
                <input
                  type="text"
                  placeholder="Add a note (optional)"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  className="w-full text-gray-700 focus:outline-none placeholder:text-gray-400"
                />
              </div>
            </>
          )}
          
          {/* Step 2: Review Details */}
          {currentStep === 2 && (
            <div className="animate-fade-in">
              <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-4">Transfer Summary</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">You send</p>
                    <p className="font-semibold">{parseFloat(amount).toLocaleString()} {sendCurrency.code}</p>
                  </div>
                  
                  <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                    <p className="text-gray-800 font-medium">Total cost</p>
                    <p className="font-semibold">{totalAmount.toLocaleString()} {sendCurrency.code}</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5 mb-4 shadow-sm">
                <div className="flex justify-between items-center mb-4">
                  <p className="text-gray-600">Exchange rate</p>
                  <div className="flex items-center gap-1">
                    <p className="text-gray-700 font-medium">1 {sendCurrency.code} = {exchangeRate.toLocaleString()} {receiveCurrency.code}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center pt-2">
                  <p className="text-gray-800 font-medium">Receiver gets</p>
                  <p className="font-semibold text-lg text-green-600">{receiverGets.toLocaleString()} {receiveCurrency.code}</p>
                </div>
              </div>
              
              <div className="bg-white border border-gray-200 rounded-lg p-5 mb-6 shadow-sm">
                <h3 className="font-medium text-gray-800 mb-4">Transfer Details</h3>
                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Processing time</p>
                    <p className="text-sm bg-gray-100 px-3 py-1 rounded-full text-gray-600">Instant</p>
                  </div>
                  
                  <div className="flex items-center gap-2 bg-blue-50 p-3 rounded-lg">
                    <Info size={18} className="text-blue-500 flex-shrink-0" />
                    <p className="text-sm text-blue-700">This transfer uses Starknet L2 blockchain technology for instant settlement.</p>
                  </div>
                  
                  {note && (
                    <div className="pt-2 border-t border-gray-100">
                      <p className="text-gray-600 mb-1">Note</p>
                      <p className="text-gray-800">{note}</p>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Back button */}
              <button 
                onClick={() => setCurrentStep(1)}
                className="w-full mb-4 bg-white border border-gray-300 text-gray-800 font-medium py-3.5 px-6 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Edit Details
              </button>
            </div>
          )}
          
          {/* Continue button */}
          <button 
            onClick={handleContinue}
            disabled={isProcessing || parseFloat(amount) <= 0}
            className={`w-full bg-[#c4fc74] hover:bg-[#b4ec64] text-gray-800 font-medium py-3.5 px-6 rounded-lg mb-6 flex items-center justify-center gap-2 transition-all
              ${parseFloat(amount) <= 0 ? 'opacity-60 cursor-not-allowed' : 'shadow-md hover:shadow-lg'}`}
          >
            {isProcessing ? (
              <>
                <span className="animate-spin h-5 w-5 border-2 border-white border-t-transparent rounded-full"></span>
                Processing...
              </>
            ) : (
              <>
                {currentStep === 1 ? 'Continue' : 'Confirm and Pay'}
                <ArrowRight size={20} />
              </>
            )}
          </button>
          
          {/* Security badge */}
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm">
            <Lock size={14} />
            <p>Secured by Starknet blockchain</p>
          </div>
        </div>
      </div>
    </div>
  );
}