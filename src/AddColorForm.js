import React, { useState }from 'react';
import { useHistory } from "react-router-dom";

function AddColorForm({newColor}) {

    const [ colorForm, setColorForm ] = useState({name: "", hex: "#f8faf7"});
    const history = useHistory();

    // updates the form based on color entered
    function handleChange(evt){
        evt.persist();
        changeForm(form => ({...form, [evt.target.name]: evt.target.value}));
    }
    // submits the form 
    function handleSubmit(evt){
        evt.preventDefault();
        newColor({[colorForm.name]: colorForm.hex});
        history.push("/colors");

    }

    const {hex, name} = colorForm;

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlfor="name"> Name of color</label>
                <input
                    name="name"
                    id="name"
                    placeeholder="Enter a new Color"
                    onChange={handleChange}
                    value={name}
                />
            </div>
            <div>
                <label htmlfor="hex"> Color</label>
                <input
                    type="color"
                    id="hex"
                    name="hex"
                    onChange={handleChange}
                    value={hex}
                />
            </div>
            <input type="submit" value="Add color"/>
        </form>
    </div>
  )
}

export default AddColorForm;