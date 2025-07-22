import { useNavigate} from "react-router-dom"
import { memo, useState } from "react"
import FavoriteButton from "./FavoriteButton"


export const Card = memo(( {pokemon} ) => {
    const [isImageLoading, setIsImageLoading] = useState(true);
    const navigate = useNavigate()
    return (
        <section onClick={() => navigate(`/detail/${pokemon.id}`)}
        className="
            flex flex-col justify-center items-center gap-[10px] pb-[10px] rounded-[10px] w-[150px]
            shadow-[0_0_15px_#3ea487]  bg-[#ffffffcc] 
            transition-transform duration-150 
            hover:bg-white hover:shadow-[0_0_25px_#3ea487] hover:scale-[1.03]
        "
        >
            {isImageLoading ? <div className="w-[120px] h-[120px] leading-[120px] text-center">로딩 중...</div> : null}
            <img onLoad={()=> setIsImageLoading(false)} 
                src={pokemon.front} 
                style={{display: isImageLoading ? 'none' : 'block' }}/>
            <div className="flex items-center gap-[5px]">
                {pokemon.name}
                <FavoriteButton pokemonId={pokemon.id}/>
            </div>
        </section>
    )
})