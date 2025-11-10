import Section from '@shared/Section'
import classNames from 'classnames/bind'
import styles from './Movie.module.scss'

const cx = classNames.bind(styles)

function Movie() {
  return (
    <Section className={cx('container')}>
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="https://sunikko.github.io/gh-pages/main.png"
      >
        <source
          src="https://sunikko.github.io/gh-pages/main.mp4"
          type="video/mp4"
        />
      </video>
    </Section>
  )
}
export default Movie
