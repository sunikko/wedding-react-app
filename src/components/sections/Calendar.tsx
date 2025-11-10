import { parseISO, format } from 'date-fns'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import { enGB } from 'date-fns/locale'
import { DayPicker } from 'react-day-picker'

import 'react-day-picker/dist/style.css'
import './Calendar.daypicker.scss'
import styles from './Calendar.module.scss'

const cx = classNames.bind(styles)

function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-date')}>
            {format(weddingDate, 'yyyy.MM.dd')}
          </span>
          <span className={cx('txt-time')}>
            {format(weddingDate, 'h aaa eeee', { locale: enGB })}
          </span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <DayPicker
          mode="single"
          locale={enGB}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}
export default Calendar
