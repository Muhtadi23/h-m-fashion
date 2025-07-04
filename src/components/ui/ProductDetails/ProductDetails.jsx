"use client";

import Image from 'next/image';
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const ProductDetails = () => {
    const [quantity, setQuantity] = useState(1);
    const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];
    const [selectedSize, setSelectedSize] = useState('XS');

    const handleQuantity = (type) => {
        setQuantity((prev) => (type === 'inc' ? prev + 1 : Math.max(prev - 1, 1)));
    };

    return (
        <div className="max-w-7xl mx-auto p-4 grid md:grid-cols-2 gap-8">
            {/* Image */}
            <div>
                <Image
                    src="/product-shirt.png"
                    alt="Performance Polo"
                    width={500}
                    height={500}
                    className="rounded"
                />
                <div className="flex gap-2 mt-4">
                    {[1, 2, 3, 4].map((_, i) => (
                        <div key={i} className="w-16 h-16 bg-gray-100 rounded"></div>
                    ))}
                </div>
            </div>

            {/* Details */}
            <div>
                <h1 className="text-3xl font-bold mb-2">Performance Polo | Arrow Wood</h1>
                <p className="text-gray-600 mb-1">TR-JL-MP-3007</p>
                <div className="flex items-center gap-2 mb-4">
                    <p className="text-xl font-semibold text-red-600">Tk1,760 BDT</p>
                    <p className="text-sm line-through text-gray-500">Tk 2,200</p>
                    <span className="text-xs bg-red-500 text-white px-2 py-0.5 rounded">Sale</span>
                </div>

                {/* Sizes */}
                <div className="mb-4">
                    <p className="font-medium mb-2">Size</p>
                    <div className="flex flex-wrap gap-2">
                        {sizes.map((size) => (
                            <button
                                key={size}
                                className={`px-4 py-1 border rounded-full text-sm ${selectedSize === size
                                        ? 'bg-black text-white'
                                        : 'bg-white text-black'
                                    }`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color & Material */}
                <div className="mb-4">
                    <p className="font-medium mb-1">Color</p>
                    <p className="bg-black text-white inline-block px-3 py-1 rounded-full text-sm">ARROW WOOD</p>
                </div>
                <div className="mb-4">
                    <p className="font-medium mb-1">Material</p>
                    <p className="bg-black text-white inline-block px-3 py-1 rounded-full text-sm">100% POLYESTER</p>
                </div>

                {/* Quantity */}
                <div className="mb-4">
                    <p className="font-medium mb-2">Quantity (1 in cart)</p>
                    <div className="flex items-center gap-2">
                        <button
                            onClick={() => handleQuantity('dec')}
                            className="border border-gray-300 rounded px-2 py-1 hover:bg-gray-100"
                        >
                            <Minus size={16} />
                        </button>
                        <span>{quantity}</span>
                        <button
                            onClick={() => handleQuantity('inc')}
                            className="border border-gray-300 rounded px-2 py-1 hover:bg-gray-100"
                        >
                            <Plus size={16} />
                        </button>
                    </div>
                    <p className="text-sm text-orange-500 mt-2">Low stock: 3 left</p>
                </div>
            </div>

            {/* Key Features */}
            <div className="md:col-span-2 mt-8">
                <h2 className="text-lg font-bold mb-4">Key Features:</h2>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-2">
                    <li>Sweat-Activated Cooling: Fabric draws sweat away to keep you cool.</li>
                    <li>Rapid Dry: Dries fast for seamless transitions throughout your day.</li>
                    <li>Fresh Performance: Antimicrobial to fight odor-causing bacteria.</li>
                    <li>Effortless Maintenance: Machine washable and wrinkle-resistant.</li>
                    <li>Classic Style: Ribbed collar and timeless look.</li>
                </ul>
            </div>

            {/* Notes */}
            <div className="md:col-span-2 mt-6 text-sm text-gray-700 space-y-4">
                <div>
                    <p className="font-bold">NOTE:</p>
                    <p>Product color may vary slightly due to lighting and equipment used during photoshoot.</p>
                </div>

                <div>
                    <p className="font-bold">SHIPPING POLICY:</p>
                    <p>Inside Dhaka: 2–3 business days. Outside Dhaka: 5 business days.</p>
                </div>

                <div>
                    <p className="font-bold">WASH INSTRUCTION:</p>
                    <p>Wash in 30°C with like colors. Do not tumble dry. Do not bleach.</p>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;