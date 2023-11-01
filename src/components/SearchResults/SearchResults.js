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
    <div className="filtered-news-page">
      <h1 className='filtered-news-header'>Search Results: '{searchInput}'</h1>
      {searchResults.length > 0 ? (
        <div className="filtered-news-stories-wrapper">
          {newsToRender}
        </div>
      ) : (
        <div className="no-results-container">
          <h2 className='no-results'>No stories match your search.</h2>
        </div>

      )}
    </div>
  );
}

export default SearchResults;