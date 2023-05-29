"use client";

import useWindowInnerWidth from "@/hooks/useWindowInnerWidth";
import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

const Navbar = () => {
  const { isMobile } = useWindowInnerWidth();
  const [isMenuOpen, setIsMenuOpen] = useState(() => {
    return isMobile ? false : true;
  });

  useEffect(() => {
    setIsMenuOpen(!isMobile);
  }, [isMobile]);

  const toggleOpenMenu = useCallback(() => {
    setIsMenuOpen(current => !current);
  }, []);

  return (
    <nav className="w-full shadow-sm fixed top-0 left-0 inset-0 border">
      <div className="py-4 px-8 border-b-[1px] flex md:flex-row flex-col md:justify-between md:items-center gap-3 md:gap-0">
        <div className="hidden md:block cursor-pointer">
          <Image src="/scudetto.jpg" alt="Scudetto Robur" width="50" height="50" />
        </div>
        <button onClick={toggleOpenMenu} className=" md:hidden inline-flex outline-none">
          <span className="sr-only">Open site menu</span>
          <Image alt="Hamburger icon" src="/hamburger.svg" width="30" height="30" />
        </button>
        {isMenuOpen && (
          <ul className="block space-y-4 md:gap-2 md:space-y-0 md:flex md:w-auto bg-white md:bg-transparent">
            <li>
              <Link className="hover:underline focus:underline" href="/team">
                La squadra
              </Link>
            </li>
            <li>
              <Link className="hover:underline focus:underline" href="/results">
                Risultati
              </Link>
            </li>
            <li>
              <Link className="hover:underline focus:underline" href="/standing">
                Classifica
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
