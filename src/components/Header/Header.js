import './Header.css';
import Search from '../Search/Search'

function Header({setSearchInput, setSearchResults, allNews}) {
  
  return (
    <header className="header">
        <h1 className='app-title'>News Spotlight</h1>
        <Search setSearchInput={setSearchInput} setSearchResults={setSearchResults} allNews={allNews}/>
    </header>
  );
}

export default Header;
