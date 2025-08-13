import Image from 'next/image';
import React from 'react';
import { Star, ShoppingBag, Heart } from 'lucide-react';
import AddToCartButton from '../AddToCartButton/AddToCartButton';

const ProductCard = ({ image, image2 }) => {
    return (
        <div className="group relative w-full max-w-[320px] sm:max-w-[340px] md:max-w-[360px] lg:max-w-[380px] xl:max-w-[400px] mx-auto">
            {/* Main Card Container */}
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-white via-gray-50 to-white border border-gray-100/50 transition-all duration-500 hover:shadow-2xl hover:shadow-black/10 hover:-translate-y-2 hover:border-gray-200/80">

                {/* Wishlist Button */}
                <button className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 hover:bg-white hover:scale-110 hover:shadow-lg opacity-0 group-hover:opacity-100">
                    <Heart className="w-4 h-4 text-gray-600 hover:text-red-500 transition-colors duration-300" />
                </button>

                {/* Product Image with Enhanced Hover */}
                <div className="relative w-full aspect-[3/4] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    {image && (
                        <Image
                            src={image}
                            alt="Main Image"
                            fill
                            className="object-cover transition-all duration-700 group-hover:opacity-0 group-hover:scale-105"
                            priority
                        />
                    )}
                    {image2 && (
                        <Image
                            src={image2}
                            alt="Hover Image"
                            fill
                            className="object-cover absolute top-0 left-0 opacity-0 scale-105 transition-all duration-700 group-hover:opacity-100 group-hover:scale-100"
                            priority
                        />
                    )}

                </div>

                {/* Product Info */}
                <div className="px-6 py-5 text-center relative">
                    {/* Product Name */}
                    <h3 className="text-gray-800 font-semibold text-base mb-2 leading-tight transition-colors duration-300 group-hover:text-gray-900">
                        Red Bandeau Maxi Dress
                    </h3>

                    {/* Rating */}
                    <div className="flex justify-center items-center gap-1 mb-3">
                        {[...Array(5)].map((_, i) => (
                            <Star
                                key={i}
                                className="w-4 h-4 fill-amber-400 text-amber-400 transition-all duration-300 hover:scale-110"
                            />
                        ))}
                        <span className="text-xs text-gray-500 ml-2">(4.8)</span>
                    </div>

                    {/* Price */}
                    <div className="mb-4">
                        <p className="text-gray-900 text-xl font-bold">£9.00</p>
                        <p className="text-gray-400 text-sm line-through">£15.00</p>
                    </div>

                    {/* Add to Cart Button */}
                    <AddToCartButton />
                </div>

                {/* Sale Badge */}
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                    40% OFF
                </div>

                {/* Shine Effect */}
                {/* <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div> */}
            </div>

            {/* Enhanced Shadow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-gray-900/5 to-gray-900/10 -z-10 transform scale-95 opacity-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500" />
        </div>
    );
};

export default ProductCard;