import './AllNews.css';
import NewsCard from '../NewsCard/NewsCard';

function AllNews({allNews, setSingleStory}) {

    const newsToRender = allNews.map(story => {
      const publishedDate = new Date(story.publishedAt);
      const formattedDate = `${publishedDate.toLocaleString('en-US', { month: 'long' })} ${publishedDate.getDate()}, ${publishedDate.getFullYear()} ${publishedDate.toLocaleTimeString()} UTC`;
    
      story.publishedAt = formattedDate;

        return (
          <NewsCard
            key={story.id}
            title={story.title}
            source={story.source.name}
            author={story.author}
            image={story.urlToImage}
            date={story.publishedAt}
            setSingleStory={setSingleStory}
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