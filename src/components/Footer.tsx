import React from 'react'
import { AnimationOnScroll } from 'react-animation-on-scroll'
import info from '../shared/info'
import '../styles/sass/components/_footer.scss'

const Footer = (): React.ReactElement => (
  <footer>
    <AnimationOnScroll
      animateIn='animate__fadeInUp'
      animateOut='animate__fadeOutUp'
      animateOnce={true}
      delay={200}
      className='footer'
      offset={30}>
      <h4>Design & Built by {info.user.fullName}</h4>
      <a href={`mailto:${info.user.email}`}>{info.user.email}</a>
      <a href={`tel:${info.user.phone}`}>{info.user.phone}</a>
    </AnimationOnScroll>
  </footer>
)

export default Footer