import React from "react";
import "../../css/Cards.css"

const Cards = ({value, shown, style}) =>{
  if(shown){

  return (
    <div>
      Cards
    </div>
  )
}
return <div className="card facedown" style={style}/>;
}

export default Cards
