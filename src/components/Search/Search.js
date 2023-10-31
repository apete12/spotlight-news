import './Search.css'
import { useState } from 'react'

function Search({ setSearchInput, setSearchResults, allNews }) {
  const [searchValue, setSearchValue] = useState('');

  console.log(allNews)

  function handleChange(e) {
    setSearchValue(e.target.value);
  }

  function handleClick() {
    setSearchInput(searchValue);
  
    const filteredNews = allNews.filter(story => {
      const titleIncludesInput = story.title && story.title.toLowerCase().includes(searchValue.toLowerCase());
      const descriptionIncludesInput = story.description && story.description.toLowerCase().includes(searchValue.toLowerCase());
      return titleIncludesInput || descriptionIncludesInput;
    });
  
    setSearchResults(filteredNews);
  }

  function clearSearch() {
    setSearchValue('');
    setSearchResults([]);
    setSearchValue('');

  }
  

  return (
    <section className='search-wrapper'>
      <label htmlFor='search'></label>
      <input 
        id='search'
        className='input-field'
        type='text' 
        placeholder='Search..'
        value={searchValue}
        onChange={handleChange}
      />
      <button className='submit-search' onClick={handleClick}>Search</button>
      <button className='clear-search' onClick={clearSearch}>Clear Search Results</button>
    </section>
  )
}

export default Search;