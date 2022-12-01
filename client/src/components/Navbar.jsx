import React from "react"
import NewGame from "./Buttons/NewGame"
import Draw from "./Buttons/Draw"
import "../css/navbar.css";

const Navbar = () =>{
  return (
    <nav id="navbar" className="navbar nav-wrapper red darken-4">
      <NewGame />
      <Draw />
    </nav>
  )
}

export default Navbar
