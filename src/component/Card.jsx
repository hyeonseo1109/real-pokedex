import { useNavigate } from "react-router-dom"
import styled from "styled-components"

const CardContainer = styled.section `
    width: 150px;
    /* border: 1px solid gray; */
    box-shadow: 0 0 15px #3ea487;
    display: flex;
    flex-direction: column ;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
    background-color: #ffffffcc;

    img {
        width: 120px;
    }

    &:hover {
        background-color: #fff;
        box-shadow: 0 0 25px #3ea487;
    }

`

export const Card = ( {pokemon} ) => {
    const navigate = useNavigate()
    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            <img src={pokemon.front} />
            <div>{pokemon.name}</div>
        </CardContainer>
    )
}