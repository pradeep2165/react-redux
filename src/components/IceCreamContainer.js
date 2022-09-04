import React from "react";
import { buyIceCream } from "../redux";
import { connect } from "react-redux";

function IceCreamCountainer(props) {
  return (
    <div>
      <h1>Number of icecream {props.numOfIceCreams}</h1>
      <button onClick={props.buyIceCream}>Buy IceCream</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.numOfIceCreams,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamCountainer);
