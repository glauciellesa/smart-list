import React from "react";
//https://unsplash.com/photos/${props.image}

/* https://unsplash.com/photos/yx3-a7ualMM     = apple
https://unsplash.com/photos/zLCR7RsxYGs    = pineaple
https://unsplash.com/photos/xnRg3xDcNnE    = strawberry
https://unsplash.com/photos/nibgG33H0F8  = orange
https://unsplash.com/photos/fczCr7MdE7U   = banana
*/

const List = () => {
  return <div>List</div>;
};

export default List;

// import React from "react";
// //https://unsplash.com/photos/${props.image}

// /* https://unsplash.com/photos/yx3-a7ualMM     = apple
// https://unsplash.com/photos/zLCR7RsxYGs    = pineaple
// https://unsplash.com/photos/xnRg3xDcNnE    = strawberry
// https://unsplash.com/photos/nibgG33H0F8  = orange
// https://unsplash.com/photos/fczCr7MdE7U   = banana

// */
// const List = ({ item, removeItem }) => {
//   return (
//     <div className="item" key={item.id}>
//       <div className="content">
//         <div className="category-image">
//           <img src={`path_to_${item.category}_image.png`} alt={item.category} />
//         </div>
//         <div>
//           <p>{item.text}</p>
//           <p>Quantity: {item.quantity}</p>
//           <button className='remove' onClick={() => removeItem(item.id)}>x</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default List;
