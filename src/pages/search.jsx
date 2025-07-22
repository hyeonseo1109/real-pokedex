import { useSearchParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { getRegExp } from "korean-regexp"
import { selectPokemonByRegExp } from "../RTK/selector"
import { Card } from "../component/Card"

export default function Search() {
    const [searchParams] = useSearchParams()
    const param = searchParams.get(`pokemon`)
    const reg = getRegExp(param)
    const pokemon = useSelector(selectPokemonByRegExp(reg))
    console.log(pokemon)
    if (!pokemon) {
        return (
            <div>흠.. 포켓몬이 어디 숨었지?</div>
        )
    }
    return (
    <>
        {pokemon.map(el => <Card key={el.id} pokemon={el} />
            )}
    </>
    )
}