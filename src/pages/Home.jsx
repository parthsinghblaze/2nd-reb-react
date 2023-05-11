import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "../redux/counterSlice";

function Home() {
  const dispatch = useDispatch();

  const { userName } = useSelector((state) => state.counter);
  return (
    <div className="container moveUpAnimation">
      <h1>Home Page</h1>
      <h3>My name is : {userName} </h3>
      <button onClick={() => dispatch(changeName())}>Change Name</button>
    </div>
  );
}

export default Home;
