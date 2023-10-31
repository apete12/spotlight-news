import './AllNews.css';
import NewsCard from '../NewsCard/NewsCard';

function AllNews({allNews}) {

    const newsToRender = allNews.map(story => {
        return (
          <NewsCard
            key={story.id}
            title={story.title}
            source={story.source.name}
            author={story.author}
            image={story.urlToImage}
            date={story.publishedAt}
          />
        )
      })
  
  return (
    <div className="all-news">
        <h1 className='all-news-header'>All News Stories</h1>
      <div className="all-news-wrapper">
        {newsToRender}
     </div>
    </div>

  )
}

export default AllNews;