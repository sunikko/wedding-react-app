import classNames from 'classnames/bind'
import styles from './Contact.module.scss'

import Accordion from '@components/shared/Accordion'

const cx = classNames.bind(styles)

function Contact() {
  return (
    <section title="Contact & Honeymoon Fund">
      * Your presence is the greatest gift of all, but if you wish to give a
      gift, you can find our honeymoon fund below. Contact.
      <Accordion label="groom">groom children</Accordion>
      <Accordion label="bride">bride children</Accordion>
    </section>
  )
}

export default Contact
