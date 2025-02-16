import React, { useState } from "react";

import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  // const clickHandler = () => {
  //   setTitle("Updated!");
  //   console.log(title);
  // }
  const clickHandler = () => {
    let newTitle = prompt("Enter new title:");
    if (newTitle.length > 0) {
      setTitle(newTitle);
      console.log(newTitle);
    } else {
      alert("Error, try again.");
    }
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
};

export default ExpenseItem;
