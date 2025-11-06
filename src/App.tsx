import { useEffect, useState } from 'react'
import className from 'classnames/bind'
import styles from './App.module.scss'
import FullScrrenMessage from '@shared/FullScreenMessage'

import Heading from '@components/sections/Heading'
import Movie from '@components/sections/Movie'
import ImageGallery from '@components/sections/ImageGallery'

import { Wedding } from '@models/wedding'
import Intro from '@components/sections/Intro'
import Invitation from '@components/sections/Invitation'
import Calendar from '@components/sections/Calendar'
import Contact from '@components/sections/Contact'

const cx = className.bind(styles)
function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [showIntro, setShowIntro] = useState(true)

  // intro movie timeout
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  // 1. data fetching
  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('could not fetch data')
        }
        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log('Error', e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (showIntro) {
    // TODO: Replace with <IntroVideo /> component later (for intro animation or video)
    return <FullScrrenMessage type="loading" />
  }

  if (loading || !wedding) {
    return <FullScrrenMessage type="loading" />
  }
  if (error) {
    return <FullScrrenMessage type="error" />
  }

  const { date, galleryImages } = wedding

  if (!date) {
    console.error('no date', wedding)
    return <FullScrrenMessage type="error" />
  }

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Movie />
      <Intro
        groomName={wedding.groom.name}
        bridgeName={wedding.bride.name}
        date={date}
        locationName={wedding.location.name}
        message={wedding.message.intro}
      />
      <Invitation message={wedding.message.invitation} />
      <ImageGallery images={galleryImages} />
      <Calendar date={date} />
      <Contact />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
