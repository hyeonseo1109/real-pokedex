import { useDispatch } from 'react-redux'
import './App.css'
import { useEffect } from 'react'
import { fetchMultiplePokemonById } from './RTK/thunk'
import { Link, Routes, Route, useNavigate } from 'react-router-dom'
import Detail from './pages/detail'
import Main from './pages/main'
import Search from './pages/search'
import Favorite from './pages/favorite'


function App() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect( ()=> {
    dispatch(fetchMultiplePokemonById(151))
  }, [])

  return (
    <>
      {/* <h1 className='text-[40px]'>포켓몬 도감</h1> */}
      <img className='h-[200px] mx-auto my-[50px]' src='/logo.png' />
      <nav className='flex justify-center gap-[20px]'>
        <Link to={'/'}>메인</Link>
        <Link to={'/favorite'}>찜목록</Link>
        <div>
          <input onChange={(e)=> navigate(`/search?pokemon=${e.target.value}`)} className='w-[120px] border-b border-[darkgray] px-2'/>
          <span>🔍</span>
        </div>
      </nav>
      <main className='flex justify-center flex-wrap gap-[20px] pt-[20px]'>
        <Routes>
          <Route path={'/'} element={ <Main />} />
          <Route path={'/detail/:pokemonId'} element={ <Detail />} />
          <Route path={'/search'} element={ <Search />} />
          <Route path={'/favorite'} element={ <Favorite />} />
        </Routes>
      </main>
      <img className="w-[400px] mx-auto my-[50px]"src='/jammanbo.PNG'/>
    </>
  )
}

export default App
