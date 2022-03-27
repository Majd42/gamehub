import { Typography, CircularProgress } from '@mui/material';
import React, { useEffect, useState } from 'react'
import Content from './component/Content/Content';
import {AppContext} from './contexts/AppContext'
import Navbar from './component/Navbar/Navbar';
import Settings from './component/Settings/Settings';
import { BrowserRouter, Route, Routes } from 'react-router-dom';




const App = () => {

  const [games, setGames] = useState([]);
  const [sortby, setSortby] = useState('all');
  const [theme, setTheme] = useState('secondary')

  const fetchAPI = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '820fbd7c1bmshe7fb75413baef00p1be6cbjsn5eb5fd7d987a'
      } 
    };
    
    fetch('https://free-to-play-games-database.p.rapidapi.com/api/games', options)
      .then(response => response.json())
      .then(response => {
        
        setGames(response)
      }
        )
      .catch(err => console.error(err));
  }

  const fetchByPlatform = () => {
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '820fbd7c1bmshe7fb75413baef00p1be6cbjsn5eb5fd7d987a'
      }
    };
    
    fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?platform=${sortby}`, options)
      .then(response => response.json())
      .then(response => (
        setGames(response)
      ))
      .catch(err => console.error(err));
  }
  
  
  useEffect(fetchByPlatform,[sortby])

  if(games.length ===0){
    return <CircularProgress />
  }

  return (
    <>
    <BrowserRouter>
      <AppContext.Provider value={{games, sortby, setSortby, theme, setTheme}}>
        <Navbar />

          <Routes>
            
              <Route path='/' element={<Content />} />
              <Route path='/settings' element={<Settings />} />
            
          </Routes>
        </AppContext.Provider>
      
    </BrowserRouter>
    
   
    
      
      
      
    
  
    
    </>

  )
}

export default App