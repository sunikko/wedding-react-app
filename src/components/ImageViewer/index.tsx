import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import classNames from 'classnames/bind'

import styles from './ImageViewer.module.scss'
import './swiper.css'

import CloseIcon from '@assets/icons/close.svg'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  if (open === false) {
    return null
  }

  return (
    <div className={cx('dimmed')}>
      <CloseButton className={cx('icon-close')} onClose={onClose} />
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={src} alt="ImageViewer" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

function CloseButton({
  onClose,
  className,
}: {
  onClose: () => void
  className?: string
}) {
  return (
    <img src={CloseIcon} className={className} onClick={onClose} alt="Close" />
  )
}
export default ImageViewer
