'use client';
import React, { useState, useEffect, useRef } from 'react';
import { IoMdArrowDropdown } from 'react-icons/io';
import Link from 'next/link';

const DropdownItem = ({ item, closeParent }) => {
    const [openSubmenu, setOpenSubmenu] = useState(false);
    const dropdownRef = useRef(null);

    const toggleSubmenu = () => setOpenSubmenu((prev) => !prev);

    // Close on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setOpenSubmenu(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    if (item.children) {
        return (
            <div
                ref={dropdownRef}
                className="relative"
            >
                {/* Trigger */}
                <div
                    className="flex items-center justify-between gap-1 cursor-pointer hover:text-black transition-colors"
                    onClick={toggleSubmenu}
                >
                    <span>{item.title}</span>
                    <IoMdArrowDropdown
                        className={`transition-transform duration-200 ${openSubmenu ? 'rotate-180' : ''
                            }`}
                        size={14}
                    />
                </div>

                {/* Submenu */}
                {openSubmenu && (
                    <div className="absolute mt-2 ml-4 space-y-1 bg-white w-[200px] py-2 px-6 z-30 shadow-lg">
                        {item.children.map((child, index) => (
                            <DropdownItem key={index} item={child} closeParent={() => setOpenSubmenu(false)} />
                        ))}
                    </div>
                )}
            </div>
        );
    } else {
        return (
            <div className="">
                <Link
                    href={item.href}
                    className="block text-sm  hover:text-black hover:font-medium transition-colors"
                    onClick={() => {
                        if (closeParent) closeParent(); // Close parent dropdown
                    }}
                >
                    {item.title}
                </Link>
            </div>
        );
    }
};

export default DropdownItem;
