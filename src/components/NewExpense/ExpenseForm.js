import React, { useState } from "react";
import "./ExpenseForm.css";

function ExpenseForm(props) {
  const [inputTitle, setInputTitle] = useState("");
  const [inputAmount, setInputAmount] = useState("");
  const [inputDate, setInputDate] = useState("");

  function titleChangeHandler(event) {
    setInputTitle(event.target.value);
  }

  function amountChangeHandler(event) {
    setInputAmount(event.target.value);
  }

  function dateChangeHandler(event) {
    setInputDate(event.target.value);
  }
  function submitHandler(event) {
    event.preventDefault();

    const expenseData = {
      title: inputTitle,
      amount: inputAmount,
      date: new Date(inputDate),
    };
    props.onSaveExpenseData(expenseData);
    setInputTitle("");
    setInputAmount("");
    setInputDate("");
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={inputTitle} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            value={inputAmount}
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            value={inputDate}
            type="date"
            min="2024/01/01"
            max="2025/12/31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}

export default ExpenseForm;
