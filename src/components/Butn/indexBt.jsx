import React from "react";

import { ButtonContainer } from "./stylesBt";

function Button({onClick}) {
    return(
        <ButtonContainer onClick={onClick}>
            Buscar
        </ButtonContainer>
    )
}
export default Button