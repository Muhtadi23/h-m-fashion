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
                rounded-2xl
                overflow-hidden
                shadow-md
                bg-white
            "
        >
            {/* ---------- Image Wrapper ----------- */}
            <div className="relative w-full aspect-[3/4] overflow-hidden group">
                {image && (
                    <Image
                        src={image}
                        alt="Default Image"
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover group-hover:opacity-0"
                        priority
                    />
                )}

                {image2 && (
                    <Image
                        src={image2}
                        alt="Hover Image"
                        fill
                        sizes="(max-width: 768px) 100vw, 320px"
                        className="object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100"
                        priority
                    />
                )}
            </div>

            {/* ---------- Title & Price ----------- */}
            <div className="px-5 py-4 text-center">
                <h3 className="text-base md:text-lg font-semibold text-gray-800">
                    Women&apos;s Co‑Ord Set&nbsp;|&nbsp;Dark&nbsp;Brown
                </h3>
                <p className="mt-2 text-xl font-bold text-gray-900">
                    Tk&nbsp;2,475
                </p>
            </div>

            {/* ---------- CTA Button ----------- */}
            <button
                type="button"
                className="
                    w-full
                    border-t border-gray-200
                    flex items-center justify-center gap-2
                    px-6 py-4
                    text-sm md:text-base
                    font-medium
                    text-gray-700
                    bg-white
                "
            >
                <FiShoppingCart className="text-base md:text-lg" />
                Choose options
            </button>
        </div>
    );
};

export default ProductCard;
