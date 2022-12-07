import React from "react";
import { ItemContainer } from "./stylesRepo";

function ItemRepo({repo, handleRemoveRepo}) {
    const handleRemove = () => {
        handleRemoveRepo(repo.id)
    }
    return(
        <ItemContainer onClick={handleRemove}>
            <h3> {repo.name} </h3>
            <p>  {repo.full_name} </p>
            <a href={repo.html_url} rel='noreferrer' target="_blank">Status Repositório.</a><br />
            <a href="#" rel='noreferrer' className="remover">Remover</a>
            <hr />
        </ItemContainer>

    )
}
export default ItemRepo;