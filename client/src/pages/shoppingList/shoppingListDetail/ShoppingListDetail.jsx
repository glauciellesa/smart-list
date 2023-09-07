import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import useProductsList from "../../../hooks/useProductList";

const ShoppingListDetail = () => {
  const { shoppingListId } = useParams();
  const { data, loading, error } = useProductsList(
    `shoppingLists/${shoppingListId}/products`
  );

  console.log(`shoppingLists/${shoppingListId}/producs`);
  console.log({ data });

  return (
    <StyledShoppingDetail>
      {error ? <div className="error">{error}</div> : null}
      {loading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <>
          {data.map((listProduct) => {
            console.log(listProduct);
            return <div>listttt</div>;
          })}
        </>
      )}
      <div>{shoppingListId}</div>
      <div>Lidstttt</div>
    </StyledShoppingDetail>
  );
};

export default ShoppingListDetail;

const StyledShoppingDetail = styled.div``;
