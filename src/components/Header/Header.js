import './Header.css';
import Search from '../Search/Search'

function Header({setSearchInput, setSearchResults, allNews, setSearchActive}) {
  
  return (
    <header className="header">
        <h1 className='app-title'>News Spotlight</h1>
        <Search setSearchInput={setSearchInput} setSearchResults={setSearchResults} allNews={allNews} setSearchActive={setSearchActive}/>
    </header>
  );
}

export default Header;
