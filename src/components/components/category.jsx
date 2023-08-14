import React from "react";

function Category(probs) {
  return (
    <>
      <button
        type="button"
        className="btn btn-light my-2 rounded-pill"
        onClick={probs.filter}
      >
        {probs.category}
      </button>
    </>
  );
}

export default Category;

//   <button type="button" class="btn btn-light my-2 rounded-pill ">
//     Button
//   </button>
