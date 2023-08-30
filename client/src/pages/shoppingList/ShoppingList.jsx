import { useLoaderData } from "react-router-dom";

const ShoppingList = () => {
  const products = useLoaderData();
  console.log(products);

  return (
    <>
      <h1>list</h1>

      <div>tes</div>
    </>
  );
};

export default ShoppingList;
