import React from 'react'
import { Route, Routes } from 'react-router-dom';
import { Searchbar, Sidebar } from './components';
import { DiscoverArtists } from './pages';

const App = () => {
  return (
    <div className="relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col bg-gradient-to-br from-black to-[#121286]">
        <Searchbar />

        <div className="px-6 h-[calc(100vh-72px)] overflow-y-scroll hide-scrollbar flex xl:flex-row flex-col-reverse">
          <div className="flex-1 h-fit pb-40">
            <Routes>
              <Route path="/" element={<DiscoverArtists />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App