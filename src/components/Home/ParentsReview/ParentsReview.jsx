import React, { useEffect, useState } from "react";
import ReviewCard from "../ReviewCard/ReviewCard";

const ParentsReview = () => {
    const [parentsReview, setParentsReview] = useState([]);
    useEffect(() => {
        fetch('parentsReview.json')
        .then(res => res.json())
        .then(data => setParentsReview(data))
    }, [])

    return (
    <div>
      <div className="text-center">
        <h4 className="mx-auto text-center p-2 rounded font-semibold text-[#f39c12] bg-slate-600 w-[100px]">
          Review
        </h4>
        <h2 className="text-3xl font-semibold mt-4 mb-3">
          Honourable Parents Review
        </h2>
        <p>
          Parent reviews typically refer to the opinions and assessments <br />{" "}
          provided by parents or guardians regarding various products, services,
          or experiences.
        </p>
      </div>
      <div className="flex justify-center gap-6 mt-12">
        {
            parentsReview.map(parentReview => <ReviewCard
                key={parentReview.id}
                parentReview={parentReview}
            />)
        }
      </div>
    </div>
  );
};

export default ParentsReview;
