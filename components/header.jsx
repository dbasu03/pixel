"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import { SignedOut } from '@clerk/nextjs';
import { SignedIn } from '@clerk/nextjs';
import { useStoreUser } from '@/hooks/use-store-user';
import { BarLoader } from 'react-spinners';
import { Unauthenticated,Authenticated } from 'convex/react';
import { Button } from './ui/button';
import { LayoutDashboard, Sparkles } from "lucide-react";

const Header = () => {

    const { isLoading } = useStoreUser();
  const path = usePathname();

  if (path.includes("/editor")) {
    return null;
   } // Hide header on editor page

  return <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 text-nowrap" >
    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-full px-8 py-3 flex items-center justify-between gap-8">
        <Link href="/" className="mr-10 md:mr-20">
          <Image
            src="/logo-text.png"
            alt="Pixxel Logo"
            className="min-w-24 object-cover"
            width={96}
            height={24}
          />
        </Link>
        {path === "/" && (
          <div className="hidden md:flex space-x-6">
            <Link
              href="#features"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Features
            </Link>
            <Link
              href="#pricing"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-white font-medium transition-all duration-300 hover:text-cyan-400 cursor-pointer"
            >
              Contact
            </Link>
          </div>
        )}
         <div className="flex items-center gap-3 ml-10 md:ml-20">
          <Unauthenticated>
              <SignInButton />
              <SignUpButton>
                <button className="bg-[#6c47ff] text-ceramic-white rounded-full font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 cursor-pointer">
                  Sign Up
                </button>
              </SignUpButton>
              
            </Unauthenticated>
            <Authenticated>
              <Link href="/dashboard">
              <Button variant="glass" className="hidden sm:flex">
                <LayoutDashboard className="h-4 w-4" />
                <span className="hidden md:flex">Dashboard</span>
              </Button>
            </Link>
              <UserButton 
              appearance={{
                elements: {
                  avatarBox: "w-8 h-8 rounded-lg border border-white/20",
                  },
              }}
          />
            </Authenticated>
         </div>
        {true && (
          <div className="fixed bottom-0 left-0 w-full z-40 flex justify-center">
            <BarLoader width={"95%"} color="#06b6d4" />
          </div>
        )}

    </div>
    </header>
  
};

export default Header;