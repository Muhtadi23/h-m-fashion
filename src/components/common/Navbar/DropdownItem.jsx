'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const DropdownItem = ({ item, mobile = false, isNested = false }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);

    // Close on outside click (desktop only)
    useEffect(() => {
        if (mobile) return;
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handler);
        return () => document.removeEventListener('mousedown', handler);
    }, [mobile]);

    if (item.children) {
        return (
            <div ref={ref} className="relative font-semibold">
                {/* Trigger */}
                <div
                    onClick={() => setOpen(!open)}
                    className={`flex items-center justify-between font-semibold gap-1 cursor-pointer ${mobile
                            ? 'py-2 font-semibold text-gray-700 hover:text-black'
                            : 'hover:text-black transition'
                        }`}
                >
                    {item.label || item.title}
                    <ChevronDown
                        className={`transition-transform duration-300 font-semibold${open ? 'rotate-180' : ''}`}
                        size={16}
                    />
                </div>

                {/* Desktop Dropdown */}
                {!mobile && (
                    <AnimatePresence>
                        {open && (
                            <motion.div
                                initial={{ opacity: 0, y: isNested ? 0 : 10, x: isNested ? 10 : 0 }}
                                animate={{ opacity: 1, y: 0, x: 0 }}
                                exit={{ opacity: 0, y: isNested ? 0 : 10, x: isNested ? 10 : 0 }}
                                transition={{ duration: 0.2 }}
                                className={`absolute bg-gray-400 ${isNested
                                        ? 'left-full top-0 ml-2' // beside parent
                                        : 'left-0 mt-2' // below parent
                                    } bg-white shadow-lg py-3 px-4 min-w-[200px] z-40`}
                            >
                                {item.children.map((child, idx) => (
                                    <DropdownItem key={idx} item={child} isNested />
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                )}

                {/* Mobile Dropdown (collapsible under parent) */}
                {mobile && open && (
                    <div className="pl-4 mt-2 border-l border-gray-200 font-semibold space-y-2">
                        {item.children.map((child, idx) => (
                            <DropdownItem key={idx} item={child} mobile isNested />
                        ))}
                    </div>
                )}
            </div>
        );
    }

    return (
        <Link
            href={item.href}
            className={`block font-semibold ${mobile
                    ? 'py-2 font-semibold text-gray-600 hover:text-black'
                    : 'py-1 font-semibold text-gray-600 hover:text-black transition'
                }`}
        >
            {item.label || item.title}
        </Link>
    );
};

export default DropdownItem;
