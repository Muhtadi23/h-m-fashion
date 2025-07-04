'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiMinus, FiPlus } from 'react-icons/fi';

/**
 * Product details page – tailor the dummy data (images & meta)
 * to come from your backend / CMS as needed.
 */
export default function ProductDetails() {
    /* ───────────────────────── dummy data */
    const images = [
        '/productMan1.webp',
        '/productMan1-close.webp',
        '/productMan1-back.webp',
        '/productMan1-side.webp',
    ];
    const [mainImageIdx, setMainImageIdx] = useState(0);
    const [qty, setQty] = useState(1);
    const [size, setSize] = useState('XS');
    const sizes = ['XS', 'S', 'M', 'L', 'XL', '2XL'];

    /* ───────────────────────── helpers */
    const changeQty = (delta) => setQty((q) => Math.max(1, q + delta));

    /* ───────────────────────── UI */
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* ─── Left column – images ─────────────────────────────── */}
            <div>
                <div className="relative w-full h-[550px] mb-4 overflow-hidden bg-gray-50">
                    <Image
                        src={images[mainImageIdx]}
                        alt="Product image"
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>

                {/* Thumbnails */}
                <div className="flex gap-4 overflow-x-auto pb-1">
                    {images.map((src, idx) => (
                        <button
                            key={src}
                            onClick={() => setMainImageIdx(idx)}
                            className={`relative w-24 h-24 border-2 ${mainImageIdx === idx
                                    ? 'border-black'
                                    : 'border-transparent hover:border-gray-300'
                                } flex-shrink-0`}
                        >
                            <Image src={src} alt="thumb" fill className="object-cover" />
                        </button>
                    ))}
                </div>
            </div>

            {/* ─── Right column – details ────────────────────────────── */}
            <div className="space-y-6 lg:pl-10">
                {/* Title & SKU */}
                <div>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                        Performance Polo | Arrow Wood
                    </h1>
                    <p className="mt-2 text-sm tracking-wider text-gray-500">
                        TR‑JL‑MP‑3007
                    </p>
                </div>

                {/* Pricing */}
                <div className="flex items-center gap-3">
                    <p className="line-through text-gray-400 text-lg">Tk 2,200</p>
                    <p className="text-2xl font-semibold">Tk1,760 BDT</p>
                    <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 uppercase">
                        Sale
                    </span>
                </div>
                <p className="text-sm">
                    <span className="underline">Shipping</span> calculated at checkout.
                </p>

                {/* Size selector */}
                <div>
                    <h3 className="font-medium mb-2">Size</h3>
                    <div className="flex flex-wrap gap-2">
                        {sizes.map((s) => (
                            <button
                                key={s}
                                onClick={() => setSize(s)}
                                className={`px-5 py-2 border rounded-full text-sm uppercase ${size === s
                                        ? 'bg-black text-white'
                                        : 'border-gray-300 hover:border-black'
                                    }`}
                            >
                                {s}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Color & material badges */}
                <div className="space-y-3">
                    <div>
                        <h3 className="font-medium mb-1">Color</h3>
                        <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm uppercase">
                            Arrow Wood
                        </span>
                    </div>
                    <div>
                        <h3 className="font-medium mb-1">Material</h3>
                        <span className="inline-block bg-black text-white px-4 py-1 rounded-full text-sm uppercase">
                            100% Polyester
                        </span>
                    </div>
                </div>

                {/* Quantity */}
                <div>
                    <h3 className="font-medium mb-2">
                        Quantity <span className="text-gray-500">({qty} in cart)</span>
                    </h3>
                    <div className="inline-flex items-center border">
                        <button
                            onClick={() => changeQty(-1)}
                            className="p-3 hover:bg-gray-100"
                        >
                            <FiMinus />
                        </button>
                        <span className="px-6 select-none">{qty}</span>
                        <button
                            onClick={() => changeQty(1)}
                            className="p-3 hover:bg-gray-100"
                        >
                            <FiPlus />
                        </button>
                    </div>
                </div>

                {/* Low stock note */}
                <p className="text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-orange-500 inline-block" />
                    Low stock: 3 left
                </p>

                {/* Action buttons */}
                <div className="space-y-3">
                    <button className="cursor-pointer w-full bg-gray-100 border border-black py-4 font-semibold hover:bg-gray-300 transition">
                        Add to cart
                    </button>
                    <button className="cursor-pointer w-full bg-black text-white py-4 font-semibold hover:bg-gray-700 transition">
                        Buy it now
                    </button>
                </div>

                {/* ─── Expanded description + extra sections ──────────── */}
                <div className="pt-6 border-t space-y-6">
                    {/* Description */}
                    <div>
                        <h3 className="font-semibold mb-3 text-lg uppercase">Description</h3>
                        <p className="text-gray-700 leading-relaxed">
                            Introducing the{' '}
                            <span className="font-semibold">Performance Polo Series</span>.<br />
                            The Performance Polo Series isn&apos;t just another polo. It&apos;s a
                            technologically advanced garment engineered to maximize your
                            potential. Crafted from premium, lightweight (weight to be
                            specified) 100% polyester pique knit, this polo wicks away sweat
                            like a champ, keeping you cool, dry, and comfortable even during
                            intense workouts.
                        </p>
                    </div>

                    {/* Key Features */}
                    <div>
                        <h3 className="font-bold mb-2">Key Features:</h3>
                        <ul className="list-disc space-y-2 pl-5 text-gray-700">
                            <li>
                                <strong>Sweat‑Activated Cooling:</strong> Our innovative fabric
                                utilizes moisture‑wicking technology to draw sweat away from your
                                body, creating a cooling effect that keeps you focused.
                            </li>
                            <li>
                                <strong>Rapid Dry:</strong> Never let sweat slow you down. The
                                Performance Polo dries in record time, so you can transition
                                seamlessly from workout to errands without feeling damp.
                            </li>
                            <li>
                                <strong>Fresh Performance:</strong> Say goodbye to odor.
                                Antimicrobial properties help prevent odor‑causing bacteria
                                growth.
                            </li>
                            <li>
                                <strong>Effortless Maintenance:</strong> Machine washable &
                                wrinkle‑resistant—perfect for low‑maintenance lifestyles.
                            </li>
                            <li>
                                <strong>Classic Style, Modern Performance:</strong> A timeless
                                design with a ribbed collar.
                            </li>
                        </ul>
                    </div>

                    {/* Note */}
                    <div>
                        <h3 className="font-bold mb-2 uppercase text-sm">Note:</h3>
                        <p className="text-gray-700">
                            Product color may vary slightly due to lighting sources and photo
                            equipment used during the photoshoot / graphical product display.
                        </p>
                    </div>

                    {/* Shipping Policy */}
                    <div>
                        <h3 className="font-bold mb-2 uppercase text-sm">
                            Shipping Policy:
                        </h3>
                        <p className="text-gray-700">
                            We&apos;re committed to delivering your order accurately, in good
                            condition, and on time. Deliveries inside Dhaka will arrive within
                            2‑3 business days and outside Dhaka within 5 days.
                        </p>
                    </div>

                    {/* Wash Instruction */}
                    <div>
                        <h3 className="font-bold mb-2 uppercase text-sm">
                            Wash Instruction:
                        </h3>
                        <p className="text-gray-700">
                            Wash in 30 °C with like colors, do not tumble dry, do not bleach.
                        </p>
                    </div>

                    {/* Size Chart image */}
                    <div className="pt-6">
                        <Image
                            src="/chart.webp" 
                            alt="Size Chart"
                            width={600}
                            height={300}
                            className="w-full h-auto"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
