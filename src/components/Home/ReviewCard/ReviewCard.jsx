import React from "react";
import Rating from "react-rating";
import { FaStar, FaRegStar } from "react-icons/fa";

const ReviewCard = ({ parentReview }) => {
  const { id, name, review, rating, img  } = parentReview;
  return (
    <div className="card w-full bg-base-100 shadow-xl p-4 rounded-lg">
      <figure>
        <img
          src={img}
          alt="parent"
          className="rounded-full w-[100%] h-[100%] border-4 border-[#f39c12]"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-center text-2xl mt-3 mb-2">
            {name}
        </h2>
        <p>
            {review}
        </p>
        <div className="card-actions justify-start mt-3">
            <span> 
            <Rating
                placeholderRating={rating}
                emptySymbol={ < FaRegStar /> }
                placeholderSymbol={< FaStar />}
                fullSymbol={< FaStar />}
                className="text-[#f39c12]"
            />    
            </span>
            <span className="ml-2 font-medium">{rating}</span>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
