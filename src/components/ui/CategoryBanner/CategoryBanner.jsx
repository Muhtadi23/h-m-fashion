'use client';
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';

// 🔄 Animation variant for zoom-in effect
const zoomInVariant = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { duration: 1, ease: 'easeOut' },
    },
};

const CategoryBanner = ({ imageSrc, bannerContent }) => {
    return (
        // 📦 Banner container with padding and gradient background
        <div className="bg-gradient-to-r from-gray-100 to-gray-300 py-16 px-6 sm:px-10 lg:px-20">
            <div className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto gap-10">

                {/* 📝 Banner Text Section */}
                <div className="flex-1 min-w-[280px] text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-800 leading-tight">
                        {bannerContent}
                    </h1>
                    <p className="mt-4 text-gray-600 text-base sm:text-lg">
                        Discover our latest category picks tailored for you.
                    </p>
                </div>

                {/* 🖼️ Image with Motion Zoom-in Animation */}
                <motion.div
                    className="flex-1 w-full max-w-md mx-auto sm:max-w-lg lg:max-w-xl"
                    variants={zoomInVariant}
                    initial="hidden"
                    animate="visible"
                >
                    <Image
                        src={imageSrc}
                        alt="Category Banner"
                        width={600}
                        height={700}
                        className="rounded-xl object-cover w-full h-auto"
                    />
                </motion.div>
            </div>
        </div>
    );
};

export default CategoryBanner;
