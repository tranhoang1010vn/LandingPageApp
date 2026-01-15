import Image from "next/image";
import Link from "next/link";

const sections = [
  {
    title: "All pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Features", href: "/features" },
      { name: "Pricing", href: "/pricing" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "Careers", href: "/careers" },
      { name: "Press", href: "/press" },
      { name: "Blog", href: "/blog" },
      { name: "Partners", href: "/partners" },
      { name: "Terms", href: "/terms" },
      { name: "Privacy", href: "/privacy" },
    ],
  },
  {
    title: "Developers",
    links: [
      { name: "Documentation", href: "/docs" },
      { name: "API Reference", href: "/api" },
      { name: "Status", href: "/status" },
      { name: "Github", href: "https://github.com/bekturaslan/syntro-astro" },
      { name: "Changelog", href: "/changelog" },
    ],
  },
  {
    title: "Support",
    links: [
      { name: "Help Center", href: "/help" },
      { name: "Community", href: "/community" },
      { name: "Contact Support", href: "/support" },
      { name: "Live Chat", href: "/chat" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-50 via-white to-blue-100 border-base-200 mt-20">
      <div className="px-6 md:px-12 lg:px-24 py-20 max-w-7xl mx-auto">


        <div className="pt-12 mt-12 border-t border-base-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Công ty cổ phần Nước sạch Quảng Ninh - Quawaco
           
          </p>
          <p>Development by P. CN</p>
        </div>
      </div>
    </footer>
  );
}
