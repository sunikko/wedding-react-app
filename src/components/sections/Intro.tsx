import classNames from 'classnames/bind'
import Section from '@shared/Section'

import { FaHeart } from 'react-icons/fa'
import { GiFlowerTwirl } from 'react-icons/gi'

import styles from './Intro.module.scss'
import { format, parseISO } from 'date-fns'
import { enGB } from 'date-fns/locale'
import Text from '@shared/Text'

const cx = classNames.bind(styles)

interface IntroProps {
  groomName: string
  bridgeName: string
  date: string
  locationName: string
  message: string
}
function Intro({
  groomName,
  bridgeName,
  date,
  locationName,
  message,
}: IntroProps) {
  return (
    <Section className={cx('container')}>
      <div className={cx('wrap-persons')}>
        <span className={cx('person')}>{groomName}</span>
        <FaHeart className={cx('ico-heart')} />
        <span className={cx('person')}>{bridgeName}</span>
      </div>
      <div className={cx('wrap-location')}>
        <div className={cx('date')}>
          {format(parseISO(date), 'EEEE, d MMMM yyyy', { locale: enGB })}
        </div>
        <div className={cx('location')}>{locationName}</div>
      </div>

      <GiFlowerTwirl className={cx('ico-flower')} />
      <Text>{message}</Text>
    </Section>
  )
}
export default Intro
