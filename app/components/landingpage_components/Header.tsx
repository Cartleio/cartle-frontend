"use client"
import { Fragment, useState,useEffect } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import Image from 'next/image';
import Logo from '../../assets/cartle.png'
import {
  
  Bars3Icon,
  XMarkIcon
} from '@heroicons/react/24/outline';
import { ChevronDownIcon, PhoneIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
interface NavigationItem {
    name: string;
    href: string;
  }
  
  interface SolutionItem {
    name: string;
    description: string;
    href: string;
    icon: React.ElementType;
  }
  
  interface CtaItem {
    name: string;
    href: string;
    icon: React.ElementType;
  }
  
  const navigation: NavigationItem[] = [
    { name: 'Home', href: '/' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Login', href: '/auth/login' },
    
  ];
  
 
  function classNames(...classes: (string | boolean)[]): string {
    return classes.filter(Boolean).join(' ')
  }
  interface HeaderProps {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }
const Header = ({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false); 
  const pathname = usePathname()

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setIsScrolled(scrollPosition > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div >
      <header className={`fixed inset-x-0 shadow-sm z-50 ${isScrolled ? 'top-0 bg-white bg-opacity-100 rounded-md my-4 mx-2 lg:mx-4' : 'bg-hero-image mx-2 lg:mx-6 rounded-md bg-cover bg-center bg-white'}`}>
        <nav className="flex items-center justify-between px-6 py-4 lg:px-8 text-lg" aria-label="Global">
        <div className="flex lg:flex-1">
              <Link href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Cartle</span>
                <Image 
                className="h-8 lg:h-10 w-auto " 
                src={Logo} 
                alt="NestSite Logo"
                width={160.8} 
                height={60.9} />  
              </Link>
              </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                <Bars3Icon className="h-6 w-6 text-black" aria-hidden="true" />
              </button>
            </div>
           
            <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <div className="hidden lg:flex lg:gap-x-12 ">
                {navigation.map((item) => (
                    <Link
                    key={item.name}
                    href={item.href}
                    className={` font-semibold whitespace-nowrap py-3 mr-4 ${pathname === item.href ? 'text-orange-500 border-b-4 border-orange-500': 'text-gray-700'}`}
                    >
                    {item.name} 
                    </Link>
                ))}
                
                </div>
              <Link
                href="/auth/signup"
                className="text-white text-lg font-semibold whitespace-nowrap leading-6 bg-[#FF7600] px-8 py-3 rounded-md mr-4"
              >
                Get started
              </Link>
            </div>
          </nav>
          <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <div className="fixed inset-0 z-50" />
            <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white text-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <Link href="#" className="-m-1.5 p-1.5">
                  <span className="sr-only">Cartle</span>
                  {/**<Image className="h-8 w-auto" src={Logo} alt="cartle logo" width={179.8} height={78.9} /> */}
                </Link>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6 text-gray-800" aria-hidden="true" />
                </button>
              </div>
              <div className="mt-6 flow-root">
                <div className="-my-6 divide-y divide-gray-500/10">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block  rounded-lg whitespace-nowrap  px-3 py-2 text-base font-medium leading-7 text-gray-700 hover:bg-indigo-800"
                      >
                        {item.name}
                      </Link>             
                    ))}
                 
                  </div>
                  <div className="py-6 flex justify-between items-center">
                    <div className="lg:flex">
                    <Link
                      href="/auth/signup"
                      className="text-white text-lg font-semibold leading-6  whitespace-nowrap bg-[#FF7600] px-5 py-2.5 rounded-md mr-4"
                    >
                        Get started
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </Dialog>
        </header>
    </div>
  )
}


  
export default Header