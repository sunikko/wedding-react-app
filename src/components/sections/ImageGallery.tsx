import classname from 'classnames/bind'
import styles from './ImageGallery.module.scss'
import Section from '@shared/Section'

const cx = classname.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  return (
    <Section title="photobox">
      <ul className={cx('wrap-images')}>
        {images.map((imgSrc, idx) => (
          <li key={idx} className={cx('wrap-image')}>
            <img src={imgSrc} alt={`Gallery image ${idx + 1}`} />
          </li>
        ))}
      </ul>
    </Section>
  )
}

export default ImageGallery
