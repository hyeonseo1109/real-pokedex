import { useNavigate} from "react-router-dom"
import { memo, useState } from "react"
import styled from "styled-components"
import FavoriteButton from "./FavoriteButton"

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
    transition: 0.15s;

    img {
        width: 120px;
    }

    &:hover {
        background-color: #fff;
        box-shadow: 0 0 25px #3ea487;
        transform: scale(1.03);
        transition: 0.15s;
    }

`

export const Card = memo(( {pokemon} ) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const navigate = useNavigate()
    return (
        <CardContainer onClick={() => navigate(`/detail/${pokemon.id}`)}>
            {isImageLoading ? <div className="w-[120px] h-[120px] leading-[120px] text-center">로딩 중...</div> : null}
            <img onLoad={()=> setIsImageLoading(false)} 
                src={pokemon.front} 
                style={{display: isImageLoading ? 'none' : 'block' }}/>
            <div className="flex items-center gap-[5px]">
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id}/>
            </div>
        </CardContainer>
    )
})