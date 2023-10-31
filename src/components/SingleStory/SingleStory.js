import './SingleStory.css'
import { Link } from 'react-router-dom'
import externalLink from '../../assets/external-link.png'
import returnIcon from '../../assets/return.png'


const SingleStory = ({ singleStory, allNews }) => {

    const singleStoryDetails = allNews.find(story => story.title == singleStory);

    const publishedDate = new Date(singleStoryDetails.publishedAt);
    const formattedDate = `${publishedDate.toLocaleString('en-US', { month: 'long' })} ${publishedDate.getDate()}, ${publishedDate.getFullYear()} ${publishedDate.toLocaleTimeString()} UTC`;
    
    singleStoryDetails.publishedAt = formattedDate;
    

  return (
    singleStory && (
      <div className='single-story-page'>
        <div className='return-container'>
            <Link to={`/`} className='return-link'><span class="ext"><img viewbox="0 0 20 20" width="15" aria-hidden="true" focusable="false" src={returnIcon} alt="" className='return-icon'/></span>Return to All Stories</Link>
        </div>
        <div className='single-story-container'>
          <div className='img-container'>
            <img src={singleStoryDetails.urlToImage} />
          </div>
          <div className='details-container'>
            <h2>{singleStoryDetails.title}</h2>
            <h3>{singleStoryDetails.description}</h3>
            <h3>Article Published: {singleStoryDetails.publishedAt}</h3>
            <a
              href={singleStoryDetails.url}
              target='_blank'
              rel='noopener noreferrer'
            >
              Link to Full Article
              <span class="ext"><span class="element-invisible">(link goes to external website)</span><img viewbox="0 0 20 20" width="15" aria-hidden="true" focusable="false" src={externalLink} alt="" className='external-icon'/> </span>
            </a>
          </div>
        </div>
      </div>
    )
  )
}

export default SingleStory
