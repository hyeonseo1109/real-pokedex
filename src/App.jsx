import { useDispatch } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Routes, Route } from 'react-router-dom'
import Detail from './pages/detail'
import Main from './pages/main'
import Search from './pages/search'
import Favorite from './pages/favorite'

function App() {
  const dispatch = useDispatch()

  useEffect( ()=> {
    dispatch(fetchMultiplePokemonById(151))
  }, [])

  return (
    <>
      <h1 className='text-[40px]'>포켓몬 도감</h1>
      <nav>
        <Link to={'/'}>메인</Link>
        <Link to={'/detail'}>상세정보</Link>
        <Link to={'/search'}>검색</Link>
        <Link to={'/favorite'}>찜목록</Link>
      </nav>
      <main className='flex justify-center flex-wrap gap-[20px] pt-[20px]'>
        <Routes>
          <Route path={'/'} element={ <Main />} />
          <Route path={'/detail/:pokemonId'} element={ <Detail />} />
          <Route path={'/search'} element={ <Search />} />
          <Route path={'/favorite'} element={ <Favorite />} />
        </Routes>
      </main>
    </>
  )
}

export default App
