import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import styles from './ImageViewer.module.scss'
import classNames from 'classnames/bind'
import './swiper.css'

const cx = classNames.bind(styles)

function ImageViewer({ images }: { images: string[] }) {
  return (
    <div className={cx('dimmed')}>
      <Swiper spaceBetween={20} slidesPerView={1} loop={true}>
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
export default ImageViewer
