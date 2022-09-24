import { AnimationOnScroll } from 'react-animation-on-scroll'
import works from '../shared/works'
import { FaShareSquare, FaGithub } from 'react-icons/fa'

const Work = () => (
  <AnimationOnScroll
    animateIn='animate__fadeInUp'
    animateOut='animate__fadeOutUp'
    animateOnce={true}
    offset={400}
    className='work section'>
    <h2 id='work'>Some Things I've Built</h2>
    <div>
      {works.map((work, index) => (
        <AnimationOnScroll
          key={index}
          animateIn='animate__fadeInUp'
          animateOut='animate__fadeOutUp'
          animateOnce={true}
          // delay={200}
          delay={index===0?400:0}
          offset={30}
          className='box'>
          <div className=''>
            <p>{work.title}</p>
            <p>{work.description}</p>
            <ul className='techno'>
              {work.technologies.map((technology, index) => (
                <li key={index}>{technology}</li>
              ))}
            </ul>
            <ul className='links'>
              <li>
                <a
                  target='_blank'
                  href={work.repository}>
                  <FaGithub />
                </a>
              </li>
              <li>
                <a
                  target='_blank'
                  href={work.website}>
                  <FaShareSquare />
                </a>
              </li>
            </ul>
          </div>
          <div className="image-container">
            <div className='images'>
              {work.images.map((image, index) => (
                <img
                  className='img'
                  key={index}
                  src={image}
                  alt={work.title}
                />
              ))}
            </div>
          </div>
        </AnimationOnScroll>
      ))}
      <AnimationOnScroll
        animateIn='animate__fadeInUp'
        animateOut='animate__fadeOutUp'
        animateOnce={true}
        className=''>
        <p className='manymore'>many more to come</p>
        <p className='others'>others are contributed to the companies</p>
      </AnimationOnScroll>
    </div>
  </AnimationOnScroll>
)

export default Work