import Image from 'next/image';
import React from 'react';
import { FiStar } from 'react-icons/fi';

const ProductCard = ({ image, image2 }) => {
    return (
        <div className="w-full
                max-w-[320px]
                sm:max-w-[340px]
                md:max-w-[360px]
                lg:max-w-[380px]
                xl:max-w-[400px] mx-auto rounded-lg overflow-hidden ">
            {/* ---------- Product Image with Hover Swap ---------- */}
            <div className="relative w-full aspect-[3/4] group">
                {image && (
                    <Image
                        src={image}
                        alt="Main Image"
                        fill
                        className="object-cover rounded-lg group-hover:opacity-0 transition-opacity duration-300"
                        priority
                    />
                )}
                {image2 && (
                    <Image
                        src={image2}
                        alt="Hover Image"
                        fill
                        className="object-cover rounded-lg absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        priority
                    />
                )}
            </div>

            {/* ---------- Info ---------- */}
            <div className="px-4 py-3 text-center">
                <h3 className="text-gray-900 font-medium text-sm">
                    Red Bandeau Maxi Dress
                </h3>

                <div className="flex justify-center items-center mt-1 text-yellow-500 text-sm">
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                    <FiStar />
                </div>

                <p className="text-gray-900 text-lg font-bold mt-1">£9.00</p>

                {/* ---------- Button ---------- */}
                <div className="mt-3 inline-block w-full">
                    <button
                        className="
                            w-full
                            bg-gray-200 hover:bg-gray-300
                            text-gray-700 text-xs font-medium
                            px-4 py-2
                            rounded-full
                            transition-transform duration-300
                            transform hover:scale-105 hover:shadow-md
                            cursor-pointer
                        "
                    >
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;


// import Image from 'next/image';
// import React from 'react';
// import { FiShoppingCart } from 'react-icons/fi';

// const ProductCard = ({ image, image2 }) => {
//     return (
//         <div
//             className="
//                 w-full
//                 max-w-[320px]
//                 sm:max-w-[340px]
//                 md:max-w-[360px]
//                 lg:max-w-[380px]
//                 xl:max-w-[400px]
//                 mx-auto
//                 rounded-2xl
//                 overflow-hidden
//                 shadow-md
//                 bg-white
//             "
//         >
//             {/* ---------- Image Wrapper ----------- */}
//             <div className="relative w-full aspect-[3/4] overflow-hidden group">
//                 {image && (
//                     <Image
//                         src={image}
//                         alt="Default Image"
//                         fill
//                         sizes="(max-width: 768px) 100vw, 320px"
//                         className="object-cover group-hover:opacity-0"
//                         priority
//                     />
//                 )}

//                 {image2 && (
//                     <Image
//                         src={image2}
//                         alt="Hover Image"
//                         fill
//                         sizes="(max-width: 768px) 100vw, 320px"
//                         className="object-cover absolute top-0 left-0 opacity-0 group-hover:opacity-100"
//                         priority
//                     />
//                 )}
//             </div>

//             {/* ---------- Title & Price ----------- */}
//             <div className="px-5 py-4 text-center">
//                 <h3 className="text-base md:text-lg font-semibold text-gray-800">
//                     Women&apos;s Co‑Ord Set&nbsp;|&nbsp;Dark&nbsp;Brown
//                 </h3>
//                 <p className="mt-2 text-xl font-bold text-gray-900">
//                     Tk&nbsp;2,475
//                 </p>
//             </div>

//             {/* ---------- CTA Button ----------- */}
//             <button
//                 type="button"
//                 className="
//                     w-full
//                     border-t border-gray-200
//                     flex items-center justify-center gap-2
//                     px-6 py-4
//                     text-sm md:text-base
//                     font-medium
//                     text-gray-700
//                     bg-white
//                 "
//             >
//                 <FiShoppingCart className="text-base md:text-lg" />
//                 Choose options
//             </button>
//         </div>
//     );
// };

// export default ProductCard;