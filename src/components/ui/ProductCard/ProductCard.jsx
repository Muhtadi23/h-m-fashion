import Image from 'next/image';
import React from 'react';
import { FiShoppingCart } from 'react-icons/fi';

const ProductCard = ({ image, image2 }) => {
    return (
        <div
            className="
                w-full
                max-w-[320px]
                sm:max-w-[340px]
                md:max-w-[360px]
                lg:max-w-[380px]
                xl:max-w-[400px]
                mx-auto
                shadow-lg overflow-hidden
            "
        >
            {/* ---------- Image Wrapper ----------- */}
            <div className="relative w-full aspect-[3/4] overflow-hidden group cursor-pointer">
                {/* Default Image */}
                {image && (
                    <Image
                        src={image}
                        alt="Default Image"
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover transition-opacity duration-300 group-hover:opacity-0"
                        priority
                    />
                )}

                {image2 && (
                    <Image
                        src={image2}
                        alt="Hover Image"
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover absolute top-0 left-0 transition-opacity duration-300 opacity-0 group-hover:opacity-100"
                        priority
                    />
                )}
            </div>

            {/* ---------- Title & Price ----------- */}
            <div className="px-4 py-3 md:px-6 md:py-4 text-center">
                <h3 className="text-sm md:text-base font-medium leading-tight">
                    Women&apos;s Co‑Ord Set&nbsp;|&nbsp;Dark&nbsp;Brown
                </h3>
                <p className="mt-1 text-lg md:text-xl font-semibold">
                    Tk&nbsp;2,475
                </p>
            </div>

            {/* ---------- CTA Button ----------- */}
            <button
                type="button"
                className="
                    w-full
                    border border-gray-300
                    flex items-center justify-center gap-2
                    px-4 py-3 md:px-6 md:py-4
                    text-sm md:text-base
                    hover:bg-gray-200 transition-colors
                "
            >
                <FiShoppingCart className="text-base md:text-lg" />
                Choose options
            </button>
        </div>
    );
};

export default ProductCard;
