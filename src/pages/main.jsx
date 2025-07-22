import { useSelector } from "react-redux"
import { Card } from "../component/Card"


export default function Main() {
    const pokemonData = useSelector(state => state.pokemon.data)
    if (!pokemonData) {
        return (
            <div>흠.. 포켓몬이 어디 숨었지?</div>
        )
    }
    return (
    <>
        {pokemonData.map(el => <Card key={el.id} pokemon={el} />
        )}
    </>
    )
}
