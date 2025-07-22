import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { selectPokemonById } from "../RTK/selector"
import FavoriteButton from "../component/FavoriteButton"
import FlipCard from "../component/FlipCard"



export default function Detail() {
    const { pokemonId } = useParams()
    const pokemon = useSelector(selectPokemonById(Number(pokemonId)))
    if (!pokemon) {
        return (
            <div>흠.. 포켓몬이 어디 숨었지?</div>
        )
    }
    return (
    <div className="flex flex-col justify-center items-center shadow-[0_0_15px_#3ea487] p-[30px] rounded-[10px] bg-white">
        <div className="text-[24px] mb-[10px] text-red-600 flex items-center">
            {pokemon.name}
            <FavoriteButton pokemonId={Number(pokemonId)} />
        </div>
        <div className="whitespace-pre-wrap text-center">
            {pokemon.description}
        </div>
        {/* <img className="w-[200px]"src={pokemon.front} /> */}
        <FlipCard front={pokemon.front} back={pokemon.back} />
        
    </div>)
}