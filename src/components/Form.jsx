import React, { useState } from "react";
import Empty_page from "./Empty_page";
import { MdDelete } from "react-icons/md";

function Form() {
  const [itemName, setItemName] = useState("");
  const [itemDueDate, setItemDueDate] = useState("");
  const [todoItems, setTodoItems] = useState([]);

  const handleOnChange = (event) => {
    if (event.target.id === "exampleFormControlInput1") {
      setItemName(event.target.value);
    } else if (event.target.id === "enterdate") {
      setItemDueDate(event.target.value);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (itemName.trim() === "" || itemDueDate.trim() === "") {
      alert("Please enter both item name and due date.");
      return;
    }

    const newItem = {
      name: itemName,
      dueDate: itemDueDate,
    };

    setTodoItems([...todoItems, newItem]);

    setItemName("");
    setItemDueDate("");
  };

  const handleDelete = (index) => {
    const updatedItems = [...todoItems];
    updatedItems.splice(index, 1);
    setTodoItems(updatedItems);
  };
  const renderTodoItems = () => {
    return todoItems.map((item, index) => (
      <div className="row text-center p-4 fw-semibold" key={index}>
        <div className="col-sm-5 p-1">{item.name}</div>
        <div className="col-sm-5 p-1">{item.dueDate}</div>
        <div className="col">
          <button
            className="btn btn-danger"
            onClick={() => handleDelete(index)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    ));
  };

  return (
    <>
      <div className="container text-center border border-2 border-dark my-2 rounded">
        <form
          className="row border-bottom border-2 border-dark"
          onSubmit={handleSubmit}
        >
          <div className="col-sm-5 p-4">
            <label htmlFor="exampleFormControlInput1" className="fw-semibold">
              Enter the text
            </label>
            <input
              type="text"
              className="mx-1 p-1 border border-2 border-dark rounded"
              id="exampleFormControlInput1"
              placeholder=""
              value={itemName}
              onChange={handleOnChange}
            />
          </div>
          <div className="col-sm-5 p-4">
            <label htmlFor="enterdate" className="form-label fw-semibold">
              Enter Date
            </label>
            <input
              type="date"
              className="mx-1 border border-2 border-dark p-1 rounded"
              id="enterdate"
              value={itemDueDate}
              onChange={handleOnChange}
            />
          </div>
          <div className="col p-4">
            <button type="submit" className="btn btn-success">
              ADD
            </button>
          </div>
        </form>
        {todoItems.length === 0 && <Empty_page />}
        <div className="mb-2">{renderTodoItems()}</div>
      </div>
    </>
  );
}

export default Form;
