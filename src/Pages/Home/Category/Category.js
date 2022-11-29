import React, { useEffect, useState } from 'react';
import iphone from '../../../Assets/iphone.jpg'


const Category = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/category')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div className='mt-10'>
            <h1 className='my-10 text-3xl text-primary font-bold text-center'>All Type of Mobile Category</h1>
            <div className='grid grid-cols-3'>
                {
                    categories.map(category => <div className="card w-96 bg-secondary-500 shadow-xl image-full">
                        <div className="card-body ">
                            <h2 className="card-title">{category.category}</h2>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">View ALL</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Category;