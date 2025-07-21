import { createAsyncThunk } from "@reduxjs/toolkit";
//createSlice: 리덕스의 상태+리듀서+액션 을 한꺼번에 정의함.
//createAsyncThunk: 비동기 작업 처리


export const fetchMultiplePokemonById = createAsyncThunk(
    'pokemon/fetchMultiplePokemonById',
    async (maxPokemonId) => {
        const numberArray = Array.from( 
            {length: maxPokemonId}, 
            (_, i) => i +1 )
        
            const fetchAPI = async (pokemonId) => {
                const reponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
                const data = await reponse.json()

                const pokemonData = {
                    id: pokemonId,
                    name: data.names.find(el => el.language.name=== 'ko').name,
                    description: data.flavor_text_entries.find(el=>el.language.name==='ko').flavor_text,
                    front:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
                    back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
                }
                return pokemonData
            }
            return await Promise.all(numberArray.map( (el) => fetchAPI(el)))
    }
)