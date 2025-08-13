'use client';
import Image from 'next/image';
import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

const CategoryBanner = ({ imageSrc, bannerContent }) => {
    return (
        <div className="relative h-[70vh] overflow-hidden bg-white">
            <div className="relative z-10 flex items-center justify-center h-full py-12 px-6 sm:px-10 lg:px-20">
                <div className="flex flex-col-reverse lg:flex-row items-center justify-between max-w-7xl mx-auto gap-12">

                    {/* Text Section */}
                    <div className="flex-1 min-w-[320px] text-center lg:text-left space-y-6">
                        {/* Label */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm">
                            <Sparkles className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium text-gray-700">New Collection</span>
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight text-main-gray">
                            {bannerContent}
                        </h1>

                        {/* Description */}
                        <p className="text-lg sm:text-xl text-secondary-gray leading-relaxed max-w-2xl">
                            Discover our meticulously curated collection designed to elevate your style and inspire your journey.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <button className="px-8 py-4 bg-purple-600 text-white font-semibold rounded-full shadow hover:bg-purple-700 transition-all duration-300 flex items-center gap-2">
                                Explore Collection
                                <ArrowRight className="w-5 h-5" />
                            </button>
                            <button className="px-8 py-4 bg-white text-gray-800 font-semibold rounded-full border border-gray-200 hover:bg-gray-100 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="flex-1 w-full max-w-sm mx-auto lg:max-w-md relative">
                        <div className="relative overflow-hidden rounded-3xl shadow-lg">
                            <Image
                                src={imageSrc}
                                alt="Category Banner"
                                width={600}
                                height={700}
                                priority
                                className="object-cover w-full h-full"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryBanner;
