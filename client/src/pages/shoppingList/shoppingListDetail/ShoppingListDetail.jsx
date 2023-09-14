import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import useProductsList from "src/hooks/useProductList";
import CardProductInList from "src/components/CardProductInList";
import AddProductList from "src/components/AddProductList";
import emptyCartImage from "src/img/additemsimg.png"; // Import your empty cart image

const ShoppingListDetail = () => {
  const { shoppingListId } = useParams();
  const { data, loading, error } = useProductsList(
    `shoppingLists/${shoppingListId}/products`
  );

  const handleDeleteItem = (idDeletedItem) => {
    console.log(idDeletedItem);
  };

  const displayItems = () => {
    if (data.length > 0) {
      return (
        <div className="product_list">
          <ul>
            {data.map((listProduct) => {
              return (
                <CardProductInList
                  key={listProduct.id}
                  idProductFromList={listProduct.id}
                  shoppingListId={shoppingListId}
                  productName={listProduct.product.product_name}
                  productImg={listProduct.product.image}
                  productQnt={listProduct.quantity}
                  onDelete={handleDeleteItem}
                  /* productCategory={listProduct.product.category_id} */
                />
              );
            })}
          </ul>
        </div>
      );
    } else {
      return (
        <div className="emptyList">
          <img
            src={emptyCartImage}
            alt="Empty Cart"
            className="empty-cart-image"
          />
        </div>
      );
    }
  };

  return (
    <StyledShoppingDetail>
      {error ? <div className="error">{error}</div> : null}
      {loading ? (
        <p className="loading"> Loading... </p>
      ) : (
        <>
          <h2 className="list_title">Shopping List</h2>
          <div className="addProduct">
            <AddProductList shoppingListId={shoppingListId} />
          </div>
          {displayItems()}
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
  .emptyList img {
    width: 100%;
  }

  @media (min-width: 600px) {
    .emptyList {
      display: flex;
      justify-content: center;
    }

    .emptyList img {
      width: 60%;
    }
  }
`;
