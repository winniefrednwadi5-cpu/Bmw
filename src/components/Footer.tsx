import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const FOOTER_SECTIONS = [
  {
    title: 'Experience BMW',
    links: ['Models', 'BMW Electric', 'BMW M', 'ConnectedDrive', 'Innovation'],
  },
  {
    title: 'Shopping',
    links: ['Build your BMW', 'Offers & Finance', 'Find a Dealer', 'Corporate Sales', 'Request a Test Drive'],
  },
  {
    title: 'Owners',
    links: ['BMW Service', 'Parts & Accessories', 'Owner Support', 'Safety Recalls', 'BMW Mobile App'],
  },
  {
    title: 'About BMW',
    links: ['The BMW Group', 'Sustainability', 'News', 'Diversity & Inclusion', 'Careers'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-bmw-dark text-white pt-24 pb-12 px-6 lg:px-12 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
        {FOOTER_SECTIONS.map((section) => (
          <div key={section.title}>
            <h3 className="font-display text-sm uppercase tracking-widest font-bold mb-8">{section.title}</h3>
            <ul className="flex flex-col gap-4">
              {section.links.map((link) => (
                <li key={link}>
                  <Link to="#" className="text-gray-400 hover:text-white text-sm transition-colors decoration-gray-600 underline-offset-4 hover:underline">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex items-center gap-4 text-xs font-display uppercase tracking-widest text-gray-500">
          <Link to="#" className="hover:text-white">Legal Notice</Link>
          <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
          <Link to="#" className="hover:text-white">Privacy Policy</Link>
          <span className="w-1 h-1 bg-gray-700 rounded-full"></span>
          <Link to="#" className="hover:text-white">Cookie Policy</Link>
        </div>

        <div className="flex items-center gap-6">
          <Link to="#" className="text-gray-400 hover:text-white transition-colors"><Facebook size={20} /></Link>
          <Link to="#" className="text-gray-400 hover:text-white transition-colors"><Twitter size={20} /></Link>
          <Link to="#" className="text-gray-400 hover:text-white transition-colors"><Instagram size={20} /></Link>
          <Link to="#" className="text-gray-400 hover:text-white transition-colors"><Youtube size={20} /></Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 text-center md:text-left">
        <p className="text-[10px] text-gray-500 uppercase tracking-[0.2em] font-medium">
          © BMW Group 2026. THE ULTIMATE DRIVING MACHINE.
        </p>
      </div>
    </footer>
  );
}
