import { dummyData } from './data';
import { removeNull } from './utils';
import { Routes, Route } from 'react-router-dom';

import { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import AllNews from './components/AllNews/AllNews';
import SingleStory from './components/SingleStory/SingleStory';

import './App.css';

function App() {
  const [allNews, setAllNews] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [singleStory, setSingleStory] = useState('')

  useEffect(() => {
    let filteredStories = removeNull(dummyData.articles)
    setAllNews(filteredStories)
  }, []);

  console.log(singleStory)
  return (
    <div>
      <Header setSearchInput={setSearchInput} setSearchResults={setSearchResults} allNews={allNews}/>
      <Routes>
      {searchResults.length > 0 ? (
         <Route path="/" element={<SearchResults searchResults={searchResults} searchInput={searchInput} setSingleStory={setSingleStory}/>}/>
      ) : (
        <Route path="/" element={<AllNews allNews={allNews} searchInput={searchInput} setSingleStory={setSingleStory}/>}/> 
      )}
        <Route path="/:title" element={<SingleStory singleStory={singleStory} allNews={allNews}/>}/> 
      </Routes>
    </div>
  );
}

export default App;
