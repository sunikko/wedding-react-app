import styles from './Invitation.module.scss'
import classNames from 'classnames/bind'
import Section from '@shared/Section'
import Text from '@shared/Text'
import { MdOutlineLocalPostOffice } from 'react-icons/md'

const cx = classNames.bind(styles)

function Invitation({ message }: { message: string }) {
  return (
    <Section className={cx('container')}>
      <MdOutlineLocalPostOffice className={cx('ico-post')} />
      <Text>{message}</Text>
    </Section>
  )
}
export default Invitation
