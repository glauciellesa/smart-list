import React, { useState } from 'react';
import ListForm from './ListForm';
import List from './List';
import items from '../../../data/items.json';

const EditList = () => {
  const initialCategories = [
    'fruits',
    'vegetables',
    'dairy',
    'seasoning and condiments',
    'breads and pasta',
    'proteins',
    'household',
    'health and beauty',
    'drinks'
  ];

  const [listItems, setListItems] = useState(items);

  const addItem = (text, category) => {
    if (typeof text === 'string') {
      const existingItem = listItems.find(
        (item) => item.text === text && item.category === category
      );
    
      if (existingItem) {
        const updatedItems = listItems.map((item) =>
          item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setListItems(updatedItems);
      } else {
        const newItem = {
          id: Math.floor(Math.random() * 10000),
          text,
          category,
          quantity: 1,
        };
        setListItems([...listItems, newItem]);
      }
    } else {
      console.log('Invalid text property:', text);
      // Handle the case where text is not a string
    }
  };

  const removeItem = (id) => {
    const newItems = listItems.filter((item) => item.id !== id);
    setListItems(newItems);
  };

  return (
    <div>
      <h1>Smart List App</h1>
      <ListForm addItem={addItem} categories={initialCategories} />
      <div className="create-list">
        {/* Display the items from the JSON file as examples */}
        {listItems.length === 0 && (
          <div>
            <p>Example Items:</p>
            {items.map((item) => (
              <p key={item.id}>{item.text}</p>
            ))}
          </div>
        )}
        {/* Display the added items */}
        {listItems.map((item) => (
          <List key={item.id} item={item} removeItem={removeItem} />
        ))}
      </div>
    </div>
  );
};

export default EditList;

// import React, { useState } from 'react';
// import ListForm from './ListForm';
// import List from './List';
// import items from '../../../data/items.json';

// const EditList = () => {
//   const initialCategories = [
//     'fruits',
//     'vegetables',
//     'dairy',
//     'seasoning and condiments',
//     'breads and pasta',
//     'proteins',
//     'household',
//     'health and beauty',
//     'drinks'
//   ];

//  console.log('items', items);

//   const [listItems, setListItems] = useState(items);

//   const addItem = (text, category) => {
//     if (typeof text === 'string') {
//       const existingItem = listItems.find(
//         (item) => item.text === text && item.category === category
//       );
    
//       if (existingItem) {
//         const updatedItems = listItems.map((item) =>
//           item.id === existingItem.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//         setListItems(updatedItems);
//       } else {
//         const newItem = {
//           id: Math.floor(Math.random() * 10000),
//           text,
//           category,
//           quantity: 1,
//         };
//         setListItems([...listItems, newItem]);
//       }
//     } else {
//       console.log('Invalid text property:', text);
//       // Handle the case where text is not a string
//     }
//   };

//   const removeItem = (id) => {
//     const newItems = listItems.filter((item) => item.id !== id);
//     setListItems(newItems);
//   };

//   return (
//     <div>
//       <h1>Smart List App</h1>
//       <ListForm addItem={addItem} categories={initialCategories} />
//       <div className="create-list">
//         {listItems.map((item) => (
//           <List key={item.id} item={item} removeItem={removeItem} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EditList;

