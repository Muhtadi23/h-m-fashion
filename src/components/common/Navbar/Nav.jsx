'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FiMenu, FiX } from 'react-icons/fi';
import { FaSearch, FaUser, FaShoppingBag } from 'react-icons/fa';
import DropdownItem from './DropdownItem';


const navItems = [
    { title: 'Home', href: '/' },
    { title: 'Products', href: '/products' },
    { title: 'Shoes', href: '/shoes' },
    {
        title: 'Mens',
        children: [
            { title: 'T-Shirts', href: '/mens/t-shirts' },
            { title: 'Shirts', href: '/mens/shirts' },
        ],
    },
    {
        title: 'Womens',
        children: [
            { title: 'Dresses', href: '/womens/dresses' },
            { title: 'Tops', href: '/womens/tops' },
        ],
    },
    {
        title: 'Kids',
        children: [
            {
                title: 'Boys',
                children: [
                    { title: 'T-Shirts', href: '/kids/boys/t-shirts' },
                    { title: 'Shirts', href: '/kids/boys/shirts' },
                ],
            },
            {
                title: 'Girls',
                children: [
                    { title: 'Dresses', href: '/kids/girls/dresses' },
                    { title: 'Tops', href: '/kids/girls/tops' },
                ],
            },
        ],
    },

];

const Nav = () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="w-full relative z-50">
            <div className="px-2 py-2 lg:px-10 flex items-center justify-between relative">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-2xl text-gray-800"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* Logo */}
                <div className="">
                    <Link href="/" className="sm:text-lg lg:text-2xl font-semibold tracking-wide">
                        H.M.Friends & Fashion
                    </Link>
                </div>

                {/* Desktop Navigation */}
                <nav className="hidden lg:flex gap-8 items-center text-sm uppercase">
                    {navItems.map((item, index) => (
                        <DropdownItem key={index} item={item} isMobile={false} />
                    ))}
                </nav>

                {/* Icons */}
                <div className="flex items-center gap-4 text-xl text-gray-700">
                    <Link href="/cart"><FaShoppingBag className="cursor-pointer" /></Link>
                    <FaSearch className="cursor-pointer" />
                    <Link href=""><FaUser className="hidden sm:inline cursor-pointer" /></Link>

                </div>
            </div>

            {/* Mobile Navigation */}
            {menuOpen && (
                <nav className="lg:hidden mt-2 px-4 space-y-2 pb-4 text-sm text-gray-800">
                    {navItems.map((item, index) => (
                        <DropdownItem key={index} item={item} isMobile={true} />
                    ))}
                </nav>
            )}
        </div>
    );
};

export default Nav;