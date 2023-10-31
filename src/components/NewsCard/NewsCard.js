import './NewsCard.css'

const NewsCard = props => {
  return (
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
  )
}

export default NewsCard