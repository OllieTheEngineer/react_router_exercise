import React from 'react'
import { Link } from "react-router-dom"

function ColorsList({colors}) {
  const linkOfColors = Object.keys(colors).map(colorName => (
    <li key={colorName}>
      <Link to={`/colors/${colorName}`}>{colorName}</Link>
    </li>
  ));
  return (
    <div>
      <header>
        <h1>You have entered the Color Factory</h1>
        <p>Proceed at your own risk</p>
        <h2>
          <Link to="/colors/new"> Add a color</Link>
        </h2>
      </header>
      <div>
        <p>Please pick a color</p>
        <ul>{linkOfColors}</ul>
      </div>
      
    </div>
  )
}

export default ColorsList;