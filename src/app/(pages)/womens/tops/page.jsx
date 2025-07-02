import CategoryBanner from '@/components/ui/CategoryBanner/CategoryBanner';
import ProductCard from '@/components/ui/ProductCard/ProductCard';
import React from 'react';

const page = () => {
    return (
        <div>
            <CategoryBanner imageSrc={"/women_sBanner.webp"} />

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4'>
                <ProductCard image={"/three1.jpg"} />
                <ProductCard image={"/three2.jpg"} />
                <ProductCard image={"/productWoman2.webp"} />
                <ProductCard image={"/productWoman3.webp"} />
            </div>

        </div>
    );
};

export default page;