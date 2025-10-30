import { publicationsData } from '../data/publications'
import './Publications.css'

const Publications = () => {
  return (
    <section id="publications" className="publications-section">
      <h2 className="section-title">Publications</h2>
      {publicationsData.map((pub, index) => (
        <div key={index} className="publication">
          <a href={pub.link} target="_blank" rel="noopener noreferrer" className="publication-title">
            {pub.title}
          </a>
          <br />
          <span className="publication-authors" dangerouslySetInnerHTML={{ __html: pub.authors }} />
          <br />
          <span className="publication-venue">{pub.venue}, {pub.year}</span>
        </div>
      ))}
    </section>
  )
}

export default Publications
