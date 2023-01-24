import React from 'react'
import { Link } from "react-router-dom"

function ColorPage({hex, color, history}) {

    if(!hex){
        history.push("/colors");
    }

  return (
    <div>
       <h2> This is color {color}.</h2> 
       <p> Do you love it? </p>
       <Link to="/"> Let's go back to homepage</Link>
    </div>
  )
}

export default ColorPage;