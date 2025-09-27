import React from 'react';

const Categories = ({ CategoryName, CategoryImage }) => {
    return (
        <div>
            <Image src={CategoryImage} alt="Categories" />
            <h2>{CategoryName}</h2>
        </div>
    );
};

export default Categories;