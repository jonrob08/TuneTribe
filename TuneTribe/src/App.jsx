import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Searchbar, Sidebar } from './components';
import { DiscoverArtists } from './pages';

const App = () => {
  return (
    <div className="relative flex">
      <Sidebar />
    </div>
  )
}

export default App