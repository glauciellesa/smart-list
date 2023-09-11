import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import useProductsList from "../../../hooks/useProductList";
import CardProduct from "../../../components/CardProduct";
import AddProductList from "../../../components/addProductList";

const ShoppingListDetail = () => {
  const { shoppingListId } = useParams();
  const { data, loading, error } = useProductsList(
    `shoppingLists/${shoppingListId}/products`
  );

  return (
    <StyledShoppingDetail>
      {error ? <div className="error">{error}</div> : null}
      {loading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <>
          <h2 className="list_title">Shopping List</h2>
          <div className="addProduct">
            <AddProductList />
          </div>
          <div className="product_list">
            {data.map((listProduct) => {
              console.log(listProduct);
              return (
                <>
                  <CardProduct
                    key={listProduct.product_id}
                    productName={listProduct.product.product_name}
                    productImg={listProduct.product.image}
                    productQnt={listProduct.quantity}
                    /* productCategory={listProduct.product.category_id} */
                  />
                </>
              );
            })}
          </div>
        </>
      )}
    </StyledShoppingDetail>
  );
};

export default ShoppingListDetail;

const StyledShoppingDetail = styled.div`
  .list_title {
    font-size: 1.8rem;
    font-weight: 700;
    color: #704869;
    padding: 0 0 1rem 1rem;
  }

  .product_list {
    min-height: 15rem;
    // background-color: #ed6e5a10;
  }
`;
