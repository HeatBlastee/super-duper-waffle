"use client";
import { FC, useState } from "react";

import Button from "@/components/Button";
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "About",
    href: "#intro",
  },
  {
    label: "Selected Works",
    href: "#projects",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "FAQs",
    href: "#faqs",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Header: FC = () => {

  const [isOpen, setOpen] = useState(false);
  return <header>
    <div className="fixed top-0 left-0 w-full mix-blend-difference backdrop-blur-md">
      <div className="container !max-w-full">
        <div className="flex justify-between h-20 items-center">
          <div>
            <a href="/">
              <span className="text-xl font-bold uppercase text-white">mann&nbsp; patel</span>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="fixed top-0 left-0 w-full">
      <div className="container !max-w-full">
        <div className="flex justify-end h-20 items-center">
          <div className="flex items-center gap-4">
            <div className="size-11 border border-stone-400 rounded-full inline-flex items-center justify-center bg-stone-200">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="15" width="18" height="2" fill="currentColor" style={{ transformOrigin:"12px 8px", transform:"translateY(4px) rotate(45deg)" }} />
                <rect x="3" y="7" width="18" height="2" fill="currentColor" style={{ transformOrigin: "12px 16px", transform: "translateY(-4px) rotate(-45deg)" }} />
              </svg>
            </div>
            <Button variant="primary" className=" hidden md:inline-flex items-center">Contact Me</Button>
          </div>
        </div>
      </div>
    </div>
  </header>
};

export default Header;
