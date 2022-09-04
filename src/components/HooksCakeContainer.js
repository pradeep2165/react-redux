import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, buyIceCream } from "../redux";

function HooksCakeContainer() {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Num of cakes {numOfCakes}</h2>
      <button onClick={() => dispatch(buyCake())}>Buy cake</button>

      <h2>Num of icecream {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy icecream</button>
    </div>
  );
}

export default HooksCakeContainer;
