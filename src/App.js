import { useSelector } from "react-redux";

function App() {

  const { number, userName } = useSelector((state) =>  state.counter);
  useSelector((state) => console.log(state));
  return (
    <div className="container">
      <h1>Hey Redux</h1>
      <h1>{number}</h1>
    </div>
  );
}

export default App;
