// import { useDispatch, useSelector } from "react-redux";
// import { favoriteSlice } from "../RTK/slice";

// export default function FavoriteButton({ pokemonId }) {
//     const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
//     const dispatch = useDispatch()
    
//     return (
//         <button onClick={(e) => {
//             e.stopPropagation()
//             dispatch(isFavorite ? favoriteSlice.actions.removeFromFavorite({pokemonId}) : favoriteSlice.actions.addToFavorite({pokemonId}))
//         }}
//             className={`bg-transparent ${isFavorite ? "text-[#1cd2ba]" : 'text-[#aaa]'}`} >
//             {isFavorite ? '♥︎' : '♡'}
//         </button>
//     )
// }

import { useDispatch, useSelector } from "react-redux";
import { favoriteSlice } from "../RTK/slice";

export default function FavoriteButton({ pokemonId }) {
    const isFavorite = useSelector(state => state.favorite.some((item => item === pokemonId)))
    const dispatch = useDispatch()
    const handleClick = (e) => {
        e.stopPropagation()
        if (isFavorite) dispatch(favoriteSlice.actions.removeFromFavorite({pokemonId}))
        else dispatch(favoriteSlice.actions.addToFavorite({pokemonId}))
        }

    return (
        <button onClick={(e) => {handleClick(e)}}
            className={`bg-transparent ${isFavorite ? "text-[#1cd2ba]" : 'text-[#aaa]'}`} >
            {isFavorite ? '♥︎' : '♡'}
        </button>
    )
}