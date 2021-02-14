import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


function Form() {
    return (
        <form>
            <TextField label="event Name" name="name" type="text" />
            <TextField label="distance" name="distance" type="text" />
            <TextField label="date" name="date" type="text" />
        </form>
    )
}

export default Form; 