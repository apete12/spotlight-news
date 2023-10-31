import { dummyData } from './data';
import { removeNull } from './utils';

import { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import SearchResults from './components/SearchResults/SearchResults';
import AllNews from './components/AllNews/AllNews';

import './App.css';

function App() {
  const [allNews, setAllNews] = useState([])
  const [searchResults, setSearchResults] = useState([])
  const [searchInput, setSearchInput] = useState('')

  useEffect(() => {
    let filteredStories = removeNull(dummyData.articles)
    console.log(filteredStories)
    setAllNews(filteredStories)
  }, []);

  return (
    <div>
      <Header setSearchInput={setSearchInput} setSearchResults={setSearchResults} allNews={allNews}/>
      {searchResults.length > 0 ? (
        <SearchResults searchResults={searchResults} searchInput={searchInput}/>
      ) : (
        <AllNews allNews={allNews} searchInput={searchInput} />
      )}
    </div>
  );
}

export default App;
