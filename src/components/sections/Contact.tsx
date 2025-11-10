import classNames from 'classnames/bind'
import styles from './Contact.module.scss'

import Accordion from '@components/shared/Accordion'

import { Person, Wedding } from '@/models/wedding'
import { FaPhone, FaRegCopy } from 'react-icons/fa'
import { RiRefund2Fill } from 'react-icons/ri'

const cx = classNames.bind(styles)

function Contact({
  groom,
  bride,
}: {
  groom: Wedding['groom']
  bride: Wedding['bride']
}) {
  return (
    <section title="Contact & Honeymoon Fund">
      * Your presence is the greatest gift of all, but if you wish to give a
      gift, you can find our honeymoon fund below. Contact.
      <Accordion label="groom">
        <ContactInfo
          name={groom.name}
          account={groom.account}
          phoneNumber={groom.phoneNumber}
        />
        <ContactInfo
          name={groom.parents[0].name}
          account={groom.parents[0].account}
          phoneNumber={groom.parents[0].phoneNumber}
        />
        <ContactInfo
          name={groom.parents[1].name}
          account={groom.parents[1].account}
          phoneNumber={groom.parents[1].phoneNumber}
        />
      </Accordion>
      <Accordion label="bride">
        <ContactInfo
          name={bride.name}
          account={bride.account}
          phoneNumber={bride.phoneNumber}
        />
        <ContactInfo
          name={bride.parents[0].name}
          account={bride.parents[0].account}
          phoneNumber={bride.parents[0].phoneNumber}
        />
        <ContactInfo
          name={bride.parents[1].name}
          account={bride.parents[1].account}
          phoneNumber={bride.parents[1].phoneNumber}
        />
      </Accordion>
    </section>
  )
}

function ContactInfo({ name, account, phoneNumber }: Person) {
  return (
    <div className={cx('wrap-contact')}>
      <div className={cx('wrap-contact-info')}>
        <span>{`${account.bankName} | ${account.accountNumber}`}</span>
        <span>{name}</span>
      </div>
      <ul className={cx('wrap-buttons')}>
        <li>
          <a href={`tel: ${phoneNumber}`} className={cx('button')}>
            <FaPhone aria-label="call" />
          </a>
        </li>
        <li>
          <button
            className={cx('button')}
            onClick={() => {
              navigator.clipboard.writeText(
                `${account.bankName} ${account.accountNumber}`,
              )
              alert('Copied to clipboard')
            }}
          >
            <FaRegCopy aria-label="Copy Account Info" />
          </button>
        </li>
        {account.fundLink != null ? (
          <li>
            <a
              href={account.fundLink}
              className={cx('button')}
              target="_blank"
              rel="noreferrer"
            >
              <RiRefund2Fill aria-label="Honeymoon Fund" />
            </a>
          </li>
        ) : null}
      </ul>
    </div>
  )
}

export default Contact
