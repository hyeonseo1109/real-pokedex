import { useSelector } from "react-redux"
import { selectFavoritePokemons } from "../RTK/selector"
import { Card } from "../component/Card"

export default function Favorite() {
    const pokemon = useSelector(selectFavoritePokemons)
    if (!pokemon) {
        return (
            <div>흠.. 포켓몬이 어디 숨었지?</div>
        )
    }
    return (
    <>
        {pokemon.map(el => <Card key={el.id} pokemon={el} />
        )}
    </>)
}