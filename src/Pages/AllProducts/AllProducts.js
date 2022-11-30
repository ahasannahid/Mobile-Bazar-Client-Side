import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Product from '../../Shared/Products/Product';

const AllProducts = () => {
    const products = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl font-bold text-center my-10'>All Mobile from Mobile Bazar</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    products.map(product => <Product
                    key={product._id}
                    product={product}
                    >
                    </Product>)
                }
            </div>
        </div>
    );
};

export default AllProducts;