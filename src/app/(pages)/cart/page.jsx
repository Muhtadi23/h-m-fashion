'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FiMinus, FiPlus, FiTrash } from 'react-icons/fi';
import { useState } from 'react';
import React from 'react';

const page = () => {
    const [cart, setCart] = useState([
        {
            id: 1,
            brand: 'TORR',
            name: 'Kids T-shirt',
            price: 1760,
            size: 'XS',
            color: 'ARROW WOOD',
            material: '100% POLYESTER',
            img: '/kids1.webp', // replace with your image path
            qty: 1,
        },
        {
            id: 2,
            brand: 'TORR',
            name: 'Three Piece',
            price: 1760,
            size: 'Free Size',
            color: 'Merun',
            material: '100% Cotton',
            img: '/three1.jpg', // replace with your image path
            qty: 5,
        },
        {
            id: 3,
            brand: 'TORR',
            name: 'Performance Polo | Arrow Wood',
            price: 1760,
            size: 'M',
            color: 'ARROW WOOD',
            material: '100% POLYESTER',
            img: '/productMan1.webp', // replace with your image path
            qty: 2,
        },
    ]);

    /* ───────────────────────── quantity helpers */
    const changeQty = (id, delta) =>
        setCart((p) =>
            p.map((item) =>
                item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
            )
        );
    const removeItem = (id) => setCart((p) => p.filter((item) => item.id !== id));
    const estimatedTotal = cart.reduce((t, i) => t + i.price * i.qty, 0);

    return (
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
            {/* top bar */}
            <div className="flex items-center justify-between mb-10">
                <h1 className="text-4xl md:text-5xl font-extrabold">Your cart</h1>
                <Link href="/" className="underline text-sm md:text-base hover:text-gray-700">
                    Continue shopping
                </Link>
            </div>

            {/* table headings */}
            <div className="hidden md:grid grid-cols-12 gap-4 text-xs font-medium text-gray-500 border-b pb-3 mb-6 uppercase tracking-widest">
                <span className="col-span-6">Product</span>
                <span className="col-span-3 text-center">Quantity</span>
                <span className="col-span-3 text-right">Total</span>
            </div>

            {/* cart rows */}
            {cart.map((item) => (
                <div key={item.id} className="grid grid-cols-12 gap-4 items-center py-6 border-b last:border-b-0">
                    {/* product image */}
                    <div className="col-span-3 md:col-span-2">
                        <Image src={item.img} width={150} height={150} className="rounded object-cover w-full" alt={item.name} />
                    </div>

                    {/* product details */}
                    <div className="col-span-9 md:col-span-4 space-y-1">
                        <p className="text-xs tracking-widest font-semibold uppercase text-gray-400">{item.brand}</p>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="font-medium">Tk {item.price.toLocaleString()}</p>
                        <p className="text-sm text-gray-600">Size: {item.size}</p>
                        <p className="text-sm text-gray-600">Color: {item.color}</p>
                        <p className="text-sm text-gray-600">Material: {item.material}</p>
                    </div>

                    {/* quantity selector */}
                    <div className="col-span-12 md:col-span-3 flex items-center justify-start md:justify-center mt-4 md:mt-0">
                        <div className="flex items-center border text-sm">
                            <button onClick={() => changeQty(item.id, -1)} className="px-3 py-2 hover:bg-gray-100">
                                <FiMinus />
                            </button>
                            <span className="px-5 select-none">{item.qty}</span>
                            <button onClick={() => changeQty(item.id, 1)} className="px-3 py-2 hover:bg-gray-100">
                                <FiPlus />
                            </button>
                        </div>
                        <button onClick={() => removeItem(item.id)} className="ml-4 text-gray-500 hover:text-red-600">
                            <FiTrash size={18} />
                        </button>
                    </div>

                    {/* line total */}
                    <div className="col-span-12 md:col-span-3 text-right font-semibold">Tk {(item.price * item.qty).toLocaleString()}</div>
                </div>
            ))}

            {/* footer */}
            <div className="flex flex-col md:flex-row gap-8 pt-10">
                {/* order note */}
                <div className="flex-1">
                    <label htmlFor="order-note" className="block mb-2 font-medium text-base md:text-lg">
                        Order special instructions
                    </label>
                    <textarea id="order-note" rows={6} className="w-full border p-4 resize-none" placeholder="Add a note to your order..." />
                </div>

                {/* summary */}
                <div className="w-full md:max-w-sm md:ml-auto space-y-4">
                    <div className="flex items-center justify-between text-lg font-semibold">
                        <span>Estimated total</span>
                        <span>Tk {estimatedTotal.toLocaleString()} BDT</span>
                    </div>
                    <p className="text-sm text-gray-500">
                        Taxes, Discounts and <span className="underline">shipping</span> calculated at checkout
                    </p>
                    <button className="w-full bg-black text-white py-4 font-semibold hover:bg-gray-800 transition">Check out</button>
                </div>
            </div>
        </div>
    );
};

export default page;