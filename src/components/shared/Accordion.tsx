import classNames from 'classnames/bind'
import styles from './Accordion.module.scss'
import { IoIosArrowDown } from 'react-icons/io'
import { PropsWithChildren, useState } from 'react'

const cx = classNames.bind(styles)

interface AccordionProps {
  label: string
}
function Accordion({ label, children }: PropsWithChildren<AccordionProps>) {
  const [expanded, setExpanded] = useState(false)

  const handleToggle = () => {
    setExpanded((prev) => !prev)
  }

  return (
    <div
      className={cx(['wrap-accoridon', { open: expanded }])}
      onClick={handleToggle}
    >
      <div className={cx('wrap-header')}>
        <span>{label}</span>
        <IoIosArrowDown className={cx('ico-arrow-down')} />
      </div>
      <div className={cx('wrap-content')}>{children}</div>
    </div>
  )
}
export default Accordion
