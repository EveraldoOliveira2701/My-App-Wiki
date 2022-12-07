import React from "react";

import { InputContainer } from "./stylesIn";

function Input({value, onChange}) {
    return(
        <InputContainer>
            <input value={value} onChange={onChange}/>
        </InputContainer>
    )
}
export default Input