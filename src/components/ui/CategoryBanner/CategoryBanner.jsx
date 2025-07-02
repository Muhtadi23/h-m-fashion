import Image from 'next/image';
import React from 'react';

const CategoryBanner = ({ imageSrc }) => {
    return (
        <div>
            <Image
                src={imageSrc}
                alt="Category Banner"
                width={1920}
                height={40}
                className="w-full object-cover"
            />
        </div>
    );
};

export default CategoryBanner;