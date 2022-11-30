import React from "react"
import NewGame from "./Buttons/NewGame"
import AutoPlay from "./Buttons/AutoPlay"
import Deal from "./Buttons/Deal"
import "../css/navbar.css";

const Navbar = () =>{
  return (
    <nav id="navbar" className="navbar nav-wrapper red darken-4">
      <NewGame />
      <AutoPlay />
      <Deal />
    </nav>
  )
}

export default Navbar
