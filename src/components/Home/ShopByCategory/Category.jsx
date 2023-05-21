import React from 'react';
import Rating from 'react-rating';
import { FaStar, FaRegStar } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Category = ({category}) => {
    const {_id, name, price, rating, img} = category;
    
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <div className=''>
                    <p><span className='mr-3'>Price:</span>${price}</p>
                    <p className='mt-3'>
                    <Rating
                        placeholderRating={rating}
                        emptySymbol={ < FaRegStar /> }
                        placeholderSymbol={< FaStar />}
                        fullSymbol={< FaStar />}
                        className="text-[#f39c12]"
                    />
                        <span className='ml-2'>
                            {rating}
                        </span>
                    </p>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`/checkout/${_id}`}>
                        <button className="btn btn-warning">View Details</button>
                    </Link>
                </div>
            </div>
</div>
    );
};

export default Category;