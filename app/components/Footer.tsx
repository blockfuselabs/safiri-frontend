import { FaXTwitter} from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import Image from 'next/image';
import Logo from "../../public/safiri.svg"

const Footer = () => {
  return (
    <footer className="bg-[#f8f7f5] text-[#373742]">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10  flex items-center justify-center">
              <Image src={Logo} alt="Brand" />
              </div>
              <span className="text-2xl font-bold">Safiri</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Blockchain-powered cross-border payment infrastructure making sending money across Africa fast, affordable, and accessible.
            </p>
            <div className="flex gap-4">
              <a href="https://x.com/safiri_send" target="_blank" className="h-10 w-10 rounded-full flex items-center justify-center hover:bg-[#c4fc74] hover:text-gray-900 transition">
                <FaXTwitter size={20} />
              </a>
           
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-white transition">About Us</a></li>
              <li><a href="#features" className="text-gray-400 hover:text-white transition">Features</a></li>
              <li><a href="#benefits" className="text-gray-400 hover:text-white transition">Benefits</a></li>
              <li><a href="#waitlist" className="text-gray-400 hover:text-white transition">Join Waitlist</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="text-gray-400">info@safirisend.xyz</li>
              <li className="text-gray-400">+234 9032621846</li>
              <li className="text-gray-400">Jos, Nigeria</li>
            </ul>
            <div className="mt-6">
              <button className="px-6 py-2 rounded-full bg-[#c4fc74] text-gray-900 font-medium hover:brightness-105 transition flex items-center gap-2">
                <FiSend size={16} /> Contact Us
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">© 2025 Safiri Send. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white transition">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;