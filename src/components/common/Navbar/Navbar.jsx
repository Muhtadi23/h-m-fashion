// 'use client';

// import { useState } from 'react';
// import Link from 'next/link';
// import { FiMenu, FiX } from 'react-icons/fi';
// import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
// import { IoMdArrowDropdown } from 'react-icons/io';

// const navItems = [
//     { label: 'HOME', href: '/' },
//     { label: 'PRODUCTS', href: '/products' },
//     { label: 'SHOES', href: '/shoes' },
//     {
//         label: "MEN'S",
//         key: 'mens',
//         items: [
//             { label: 'T‑Shirts', href: '/mens/t-shirts' },
//             { label: 'Shirts', href: '/mens/shirts' },
//             { label: 'Pants', href: '/mens/pants' },
//             { label: 'Jeans', href: '/mens/jeans' },
//             { label: 'Jackets', href: '/mens/jackets' },
//             { label: 'Accessories', href: '/mens/accessories' },
//         ],
//     },
//     {
//         label: "WOMEN'S",
//         key: 'womens',
//         items: [
//             { label: 'Dresses', href: '/womens/dresses' },
//             { label: 'Tops', href: '/womens/tops' },
//             { label: 'Bottoms', href: '/womens/bottoms' },
//             { label: 'Outerwear', href: '/womens/outerwear' },
//             { label: 'Lingerie', href: '/womens/lingerie' },
//             { label: 'Accessories', href: '/womens/accessories' },
//         ],
//     },
//     {
//         label: "KID'S",
//         key: 'kids',
//         items: [
//             {
//                 label: 'Boys',
//                 key: "boys",
//                 href: '/kids/boys',
//                 items: [
//                     { label: "Boys Shirts", href: '/boys/shirts' },
//                     { label: "Boys Pants", href: '/boys/pants' }
//                 ]
//             },
//             {
//                 label: 'Girls',
//                 key: "girls",
//                 href: '/kids/girls',
//                 items: [
//                     { label: "Girls Tops", href: '/girls/tops' },
//                     { label: "Girls Skirts", href: '/girls/skirts' },
//                 ]
//             },
//         ],
//     },
// ];

// export default function Navbar() {
//     const [menuOpen, setMenuOpen] = useState(false);
//     const [openDropdown, setOpenDropdown] = useState(null);

//     const toggleDropdown = (key) => {
//         setOpenDropdown((prev) => (prev === key ? null : key));
//     };

//     const renderDropdownItems = (items) => {
//         return (
//             <div className="absolute left-0 mt-2 bg-white shadow-md z-20 whitespace-nowrap">
//                 {items.map((item) => (
//                     <div key={item.label} className="relative group">
//                         <Link
//                             href={item.href || '#'}
//                             className="block px-4 py-2 hover:bg-gray-100"
//                         >
//                             {item.label}
//                         </Link>
//                         {item.items && (
//                             <div className="absolute left-full top-0 mt-0 bg-white border shadow-md py-2 hidden group-hover:block z-30">
//                                 {renderDropdownItems(item.items)}
//                             </div>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     const renderMobileItems = (items) => {
//         return (
//             <div className="pl-4 mt-1 space-y-1">
//                 {items.map((item) => (
//                     <div key={item.label}>
//                         {item.items ? (
//                             <details className="group">
//                                 <summary className="cursor-pointer py-1 flex items-center justify-between">
//                                     {item.label} <IoMdArrowDropdown className="ml-1" />
//                                 </summary>
//                                 {renderMobileItems(item.items)}
//                             </details>
//                         ) : (
//                             <Link href={item.href} className="block py-1 text-sm text-gray-700">
//                                 {item.label}
//                             </Link>
//                         )}
//                     </div>
//                 ))}
//             </div>
//         );
//     };

//     return (
//         <header className="w-full">
//             <div className="mx-auto py-2 flex items-center justify-between">
//                 {/* Hamburger menu for mobile */}
//                 <button
//                     onClick={() => setMenuOpen(!menuOpen)}
//                     className="lg:hidden text-2xl"
//                 >
//                     {menuOpen ? <FiX /> : <FiMenu />}
//                 </button>

//                 {/* Logo */}
//                 <Link href="/" className="flex items-center gap-2">
//                     <span className="sm:text-lg lg:text-2xl font-semibold tracking-wide">
                      
//                     </span>
//                 </Link>

//                 {/* Desktop Navigation */}
//                 <nav className="hidden lg:flex gap-6 items-center relative">
//                     {navItems.map((item) =>
//                         item.items ? (
//                             <div key={item.key} className="relative">
//                                 <button
//                                     onClick={() => toggleDropdown(item.key)}
//                                     className="flex items-center gap-1"
//                                 >
//                                     {item.label} <IoMdArrowDropdown />
//                                 </button>
//                                 {openDropdown === item.key && renderDropdownItems(item.items)}
//                             </div>
//                         ) : (
//                             <Link key={item.href} href={item.href}>
//                                 {item.label}
//                             </Link>
//                         )
//                     )}
//                 </nav>

//                 {/* Icons */}
//                 <div className="flex items-center gap-4 text-lg">
//                     <FaSearch className="cursor-pointer" />
//                     <FaUser className="hidden sm:inline cursor-pointer" />
//                     <FaShoppingBag className="cursor-pointer" />
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {menuOpen && (
//                 <div className="lg:hidden px-4 pb-4 space-y-2">
//                     {navItems.map((item) => (
//                         <div key={item.label}>
//                             {item.items ? (
//                                 <details className="group">
//                                     <summary className="cursor-pointer py-2 font-medium flex items-center justify-between">
//                                         {item.label} <IoMdArrowDropdown className="ml-2" />
//                                     </summary>
//                                     {renderMobileItems(item.items)}
//                                 </details>
//                             ) : (
//                                 <Link href={item.href} className="block py-2">
//                                     {item.label}
//                                 </Link>
//                             )}
//                         </div>
//                     ))}
//                 </div>
//             )}
//         </header>
//     );
// }
