import Button from "@/components/Button";
import { FC } from "react";


/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const navItems = [
  {
    label: "Home",
    href: "#",
  },
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
const Footer: FC = () => {
  return (
    <footer className="bg-stone-900 text-white">
      <div className="container">
        <div className="section">
          <div className="flex items-center gap-3">
            <div className="size-3 rounded-full bg-green-400"></div>
            <span className="uppercase"> One spot availabe for next month</span>
          </div>
          <div className="grid md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-4xl md:text-7xl mt-8 font-extralight lg:text-8xl">Enough talk. Let&apos;s make something great together.</h2>
              <Button variant="secondary"
                className="mt-8"
                iconAfter={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>}
              >23236@iiitu.ac.in</Button>
            </div>
            <div>
              <nav className="flex flex-col gap-8 mt-16 md:items-end md:mt-0">
                {navItems.map(({ href, label }) => (
                  <a href={href} key={label}>
                    <Button variant="text" className="text-lg">{label}</Button>
                  </a>
                ))}
              </nav>
            </div>
          </div>
          
          
        </div>
        <p className="py-16 text-white text-sm">Copyright &copy; Mann Patel &bull; All right reserved</p>
      </div>
    </footer>
  )
};

export default Footer;
