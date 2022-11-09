import React from "react";

function FunctionClick() {
  function clickHandler() {
    console.log("button clicked");
    alert("button clicked");
  }

  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  );
}

export default FunctionClick;
