import { Trash } from "lucide-react";
import { useState } from "react";
import { styled } from "styled-components";

const ConfirmRemove = (props) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleCancel = () => {
    setSelectedOption("cancel");
  };

  const handleCreate = () => {
    setSelectedOption("create");
  };

  const onAction = async (id) => {
    props.handleModal(false);
  };
  return (
    <StyledConfirmRemove>
      <h2>Delete list?</h2>
      <div className="actions">
        <button className="btn_cancel" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn_create" onClick={handleCreate}>
          Create
        </button>
      </div>
    </StyledConfirmRemove>
  );
};

export default ConfirmRemove;

const StyledConfirmRemove = styled.div``;
