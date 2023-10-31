import { dummyData } from './data';
import { removeNull } from './utils';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react'

import {fetchStories} from './api-calls'

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
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    
  }, []);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStories()
        let filteredStories = removeNull(data.articles)

        setAllNews(filteredStories)
        console.log(allNews)

      } catch (error) {
        setError(`${error.message}`);
      }
      setIsLoading(false);
    };
  
    fetchData();
  }, []);


  return allNews && (
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
