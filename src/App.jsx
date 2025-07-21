import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { fetchMultiplePokemonById } from './RTK/thunk'

function App() {
  const dispatch = useDispatch()
  const pokemonData = useSelector(state => state.pokemo)
  console.log(pokemonData)
  useEffect( ()=> {
    dispatch(fetchMultiplePokemonById(151))
  }, [])
  
  return (
    <>
    </>
  )
}

export default App
