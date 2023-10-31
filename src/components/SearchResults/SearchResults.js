import './SearchResults.css';
import NewsCard from '../NewsCard/NewsCard';

function SearchResults({ searchResults, searchInput }) {
  console.log(searchResults)

  const newsToRender = searchResults.map(story => {
    return (
      <NewsCard
        key={story.id}
        title={story.title}
        description={story.description}
        source={story.source.name}
        author={story.author}
        image={story.urlToImage}
        date={story.publishedAt}
      />
    );
  });

  return (
    <div className="filtered-news">
      <h1 className='filtered-news-header'>Search Results:</h1>
      <h2 className='filter'>filter: {searchInput}</h2>
      <div className="filtered-news-stories-wrapper">
        {newsToRender}
      </div>
    </div>
  );
}

export default SearchResults;
