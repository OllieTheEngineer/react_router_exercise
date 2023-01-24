import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import ColorsList from './ColorsList';
import AddColorForm from './AddColorForm';
import ColorPage from './ColorPage';


function Routes() {

  const homePageColors = JSON.parse(localStorage.getItem("colors")) || {
    magenta: "#FF00FF",
    orange: "#FFA500",
    emerald: "#50C879"
  };

  const [ colors, updateColors ] = useState(homePageColors);

  useEffect (
    () => localStorage.getItem("colors", JSON.stringify(colors)),
    [colors]
  );

  function handleAddColor(newColors) {
    updateColors(previousColor => ({...previousColor, ...newColors}));
  };

  function currentColor(props){
    const { color } = props.match.params;
    const hex = colors[color];
    return <ColorPage {...props} hex={hex} color={color}/>;
  }

  return (
    <BrowserRouter>
    <Switch>
    <Route exact path="/colors" >
      <ColorsList colors={colors}/> 
    </Route>
    <Route exact path="/colors/:name" >
      <AddColorForm addColor={handleAddColor}/> 
    </Route>
    <Route path="/colors/:color" current={currentColor} />
    <Redirect to="/colors" />
  </Switch>
  </BrowserRouter>
  );
}

export default Routes;