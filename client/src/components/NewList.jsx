import React, { useState } from "react";
import { styled } from "styled-components";
import { useAddNewList } from "src/hooks/useAddNewList";
import shoppingListService from "src/service/shoppingListService";

const NewList = (props) => {
  const [listName, setListName] = useState("");
  const { addNewList, error, isLoading } = useAddNewList();

  const handleChange = (e) => {
    setListName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewList("shoppingLists", listName);
    shoppingListService.getShoppingLists("shoppingLists");
    setListName("");
    props.handleModal(false);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    props.handleModal(false);
  };

  return (
    <StyledNewList>
      <h2 className="title">Create list</h2>
      <form className="newList_form" action="">
        <input
          type="text"
          onChange={handleChange}
          placeholder="Name your list"
          value={listName}
        />
        <div>
          <button className="btn_cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button className="btn_create" onClick={handleSubmit}>
            Create
          </button>
        </div>
      </form>
      {error ? <div className="error">{error}</div> : null}
    </StyledNewList>
  );
};

export default NewList;

const StyledNewList = styled.div`
  .title {
    color: #704869;
    font-size: 2rem;
    font-weight: 700;
    padding-bottom: 1rem;
  }

  .newList_form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .newList_form div {
    justify-content: flex-end;
    display: flex;
    gap: 1rem;
    padding: 1rem 0;
  }

  .newList_form input {
    font-size: 1rem;
    border: 1px solid #704869;
    background-color: #fffef9;
    padding: 0.5rem;
    border-radius: 3px;
  }
`;
