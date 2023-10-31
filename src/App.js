import logo from './logo.svg';
import { dummyData } from './data';
import { useState, useEffect } from 'react'
import Header from './components/Header/Header';
import AllNews from './components/AllNews/AllNews';

import './App.css';

function App() {
  const [allNews, setAllNews] = useState([])

  useEffect(() => {
    setAllNews(dummyData.articles)
    console.log(allNews)
  }, [dummyData, allNews]);

  return (
    <div>
      <Header/>
      <AllNews allNews={allNews}/>

    </div>
  );
}

export default App;