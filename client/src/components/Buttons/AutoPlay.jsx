import React, { useState } from "react";
import "../../css/navbar.css"

const AutoPlay = () =>{

  const [rate, setRate] = useState(-100);

  const startAutoPlay = () => {

  }

  const handleRateChange = () => {

  }

  return (
    <div className="autoplay">
      <button className="controls-btn autoplay" onClick={startAutoPlay}>{"\u25B6"}  AutoPlay</button>
      <span className="rate-label">Slow</span>
      <input type="range" value={rate} onChange={handleRateChange} step="50" min={-500} max={0} />
      <span className="rate-label">Fast</span>
    </div>
  )
}

export default AutoPlay
