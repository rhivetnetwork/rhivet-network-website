"use client";

import React, { useState } from "react";
import MenuIcon from "./MenuIcon";
import ModalMenu from "./ModalMenu";
import LogoImage from "../../public/images/rhivet-logo-black.png";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "./Breadcrumb";
import { FiMail, FiPhone } from "react-icons/fi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="bg-black h-20 bg-opacity-30 backdrop-blur-lg fixed top-0 z-50 flex w-full flex-row justify-between items-center min-h-30 pl-6 md:pl-8 border-b border-white border-opacity-20">
        <div className="overflow-hidden">
          <Link href={"/"} id="hero__title">
            <Image src={LogoImage} alt="logo" className="h-10 w-auto" />
          </Link>
        </div>
        <div className="menu__button flex flex-row gap-5 justify-end items-center h-20">
          <Link
            className="text-white text-xs hidden lg:block"
            href={"tel:+234 810 123 4562"}
          >
            +234 810 123 4562
          </Link>
          <Link
            href={"mailto:info@rhivet.com"}
            className="text-white text-sm hidden lg:block"
          >
            info@rhivet.com
          </Link>
          <Link
            href="tel:+1234567890"
            target="_blank"
            className="text-white text-sm lg:hidden"
          >
            <FiPhone className="text-white hover:text-pink-500 text-2xl" />
          </Link>
          <Link
            href="mailto:info@example.com"
            target="_blank"
            className="text-white text-sm lg:hidden"
          >
            <FiMail className="text-white hover:text-pink-500 text-2xl" />
          </Link>
          <MenuIcon onClick={toggleMenu} />
        </div>
      </nav>
      <ModalMenu isOpen={isMenuOpen} onClose={toggleMenu} />
    </>
  );
};

export default Nav;
