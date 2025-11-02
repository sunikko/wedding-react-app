import classname from 'classnames/bind'
import { useState } from 'react'
import styles from './ImageGallery.module.scss'
import Section from '@shared/Section'
import ImageViewer from '@components/ImageViewer'

const cx = classname.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)

  const open = selectedIdx > -1

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }
  return (
    <>
      <Section title="photobox">
        <ul className={cx('wrap-images')}>
          {images.map((imgSrc, idx) => (
            <li
              key={idx}
              className={cx('wrap-image')}
              onClick={() => {
                handleSelectedImage(idx)
              }}
            >
              <img src={imgSrc} alt={`Gallery image ${idx + 1}`} />
            </li>
          ))}
        </ul>
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
