import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col items-center">
          <div className="mb-8">
            <Link href="/">
              <Image 
                src="/logo.svg" 
                alt="InnoAU Logo" 
                width={180} 
                height={63} 
                className="invert"
              />
            </Link>
          </div>
          
          <nav className="flex space-x-12 mb-8">
            <Link href="#products" className="text-gray-300 hover:text-white text-base">
              Products
            </Link>
            <Link href="#about" className="text-gray-300 hover:text-white text-base">
              About
            </Link>
            <Link href="#contact" className="text-gray-300 hover:text-white text-base">
              Contact
            </Link>
          </nav>
          
          <p className="text-center text-sm text-gray-400">
            &copy; {new Date().getFullYear()} InnoAU. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
} 