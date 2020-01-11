import React from "react";
import {useApplicationContext} from './application-context';

function Input(){
    const {setFont} = useApplicationContext();
    const handleChange = ({ target : {value} }) => {
        setFont(value);
    }
    return < input placeholder="fontsize" onChange={handleChange}/>;
}
export default Input;