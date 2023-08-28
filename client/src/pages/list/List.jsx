import React from "react";
//https://unsplash.com/photos/${props.image}

/* https://unsplash.com/photos/yx3-a7ualMM     = apple
https://unsplash.com/photos/zLCR7RsxYGs    = pineaple
https://unsplash.com/photos/xnRg3xDcNnE    = strawberry
https://unsplash.com/photos/nibgG33H0F8  = orange
https://unsplash.com/photos/fczCr7MdE7U   = banana

*/
const List = ({ list, removeItem }) => {
  return (
    <div className="item" key={list.id}>
      <div className="content">
        <div className="category-image">
          <img src={`path_to_${list.category}_image.png`} alt={list.category} />
        </div>
        <div>
          <button className='remove' onClick={() => removeItem(list.id)}>x</button>
        </div>
      </div>
    </div>
  );
};

export default List;
