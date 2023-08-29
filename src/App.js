import logo from './logo.svg';
import './App.css';
import {addToCart} from "./redux/action"
import {useDispatch} from "react-redux"
function App() {
  const dispatch = useDispatch();
 const product = {
    name: "Paste",
    price: 100,
    type: "household",
    color: "white"

  }
  return (
    <div className="App">
      <button onClick={()=> dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}

export default App;
