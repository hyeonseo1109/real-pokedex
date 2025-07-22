import { createAsyncThunk } from "@reduxjs/toolkit";
//createSlice: 리덕스의 상태+리듀서+액션 을 한꺼번에 정의함.
//createAsyncThunk: 비동기 작업 처리


export const fetchMultiplePokemonById = createAsyncThunk(
    'pokemon/fetchMultiplePokemonById',
    async (maxPokemonId, thunkAPI) => {
        const numberArray = Array.from( 
            {length: maxPokemonId}, 
            (_, i) => i +1 )
        
            const fetchAPI = async (pokemonId) => {
                try {
                    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`)
                    if (!response.ok) throw new Error('Network error');
                    const data = await response.json()

                    const pokemonData = {
                        id: pokemonId,
                        name: data.names.find(el => el.language.name=== 'ko').name,
                        description: data.flavor_text_entries.find(el=>el.language.name==='ko').flavor_text,
                        front:`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
                        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
                    }
                    return pokemonData;
                } catch (e) {
                console.error("포켓몬 가져오기 실패:", e);
                return {
                    id: pokemonId,
                    name: "오잉?",
                    description: "포켓몬이 어디 숨었지?",
                    front: "",
                    back: "",
                }
            }
        };
        try {
            const result = await Promise.all(numberArray.map( (el) => fetchAPI(el)));
            return result;
        } catch (e) {
            console.error(`포켓몬 가져오기 실패`, e);
            return thunkAPI.rejectWithValue("전체 포켓몬 데이터를 불러오는 데 실패했습니다.");
        }
    }
)