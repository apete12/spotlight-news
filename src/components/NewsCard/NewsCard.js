import './NewsCard.css'
import { Link } from 'react-router-dom'

const NewsCard = props => {
    
  return (
    <Link
      to={`/${props.title}`}
      onClick={() => props.setSingleStory(props.title)}
    >
    <div className='news-card-wrapper'>
      <div className='news-card' key={props.id}>
        <div className='image-container'>
          <img src={props.image} alt={props.altText} />
        </div>
        <div className='story-info-wrapper'>
          <h2>{props.title}</h2>
          <h3>{props.date}</h3>
        </div>
      </div>
    </div>
  </Link>
  )
}

export default NewsCard
