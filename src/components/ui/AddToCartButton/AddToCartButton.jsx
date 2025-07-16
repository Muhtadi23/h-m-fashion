import React from 'react';

const AddToCartButton = () => {
    return (
        <button
            className="
                            w-full
                            bg-gray-200 hover:bg-gray-300
                            text-gray-700 text-xs font-medium
                            hover:font-semibold
                            px-4 py-2
                            rounded-full
                            transition-transform duration-300
                            transform hover:scale-105 hover:shadow-md
                            cursor-pointer
                        "
        >
            ADD TO CART
        </button>
    );
};

export default AddToCartButton;