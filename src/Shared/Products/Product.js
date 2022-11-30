import React from 'react';

const Product = ({ product }) => {
    const { name, Price, Condition, phone, category, location, description, purchase_year, photo } = product;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl my-5">
            <figure><img src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div>
                    <p>{description}</p>
                </div>
                <div className='flex'>
                    <p>price: ${Price}</p>
                    <p>Condition:{Condition}</p>
                    <p>Category:{category}</p>
                </div>
                <div className='flex font-bold'>
                    <p>Phone: {phone}</p>
                    <p>Phone: {location}</p>
                </div>
                <p>Purchase Year: {purchase_year}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Product;