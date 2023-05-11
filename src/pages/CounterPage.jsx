import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/counterSlice";

function CounterPage() {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState(0);
  const { number } = useSelector((state) => state.counter);
  return (
    <div className="container py-5 moveUpAnimation">
      <h4>Current Counter Number : {number} </h4>
      <input
        type="text"
        placeholder="Enter any number"
        value={formValue}
        onChange={(e) => setFormValue(e.target.value)}
      />
      <hr />
      <button
        className="btn btn-danger"
        onClick={() => dispatch(increment(formValue))}
      >
        +
      </button>
      <button className="btn btn-primary" onClick={() => dispatch(decrement())}>
        -
      </button>
    </div>
  );
}

export default CounterPage;
