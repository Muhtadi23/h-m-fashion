'use client';
import React, { useState } from 'react';
import { ShoppingBag } from 'lucide-react';

const AddToCartButton = () => {
    return (
        <button className="w-full bg-main-gray hover:bg-secondary-gray text-white font-medium px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] flex items-center justify-center gap-2 group/btn">
            <ShoppingBag className="w-4 h-4 transition-transform duration-300 group-hover/btn:scale-110" />
            <span>Add to Cart</span>
        </button>
    );
};

export default AddToCartButton;
