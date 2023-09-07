import React, { useEffect } from "react";
import shoppingListService from "../../../service/shoppingListService";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import productShoppingList from "../../../service/productShoppingList";

const ShoppingListDetail = () => {
  const { shoppingListId } = useParams();
  console.log(shoppingListId);

  useEffect(() => {
    productShoppingList.getProductFromLists(
      `shoppingLists/${shoppingListId}/products`
    );
  }, [shoppingListId]);

  return (
    <StyledShoppingDetail>
      {/* {shoppingListService.getShoppingList.map((listProduct) => {
        console.log(listProduct);
        return <div>listttt</div>;
      })} */}
      <div>{shoppingListId}</div>
      <div>Lidstttt</div>
    </StyledShoppingDetail>
  );
};

export default ShoppingListDetail;

const StyledShoppingDetail = styled.div``;
