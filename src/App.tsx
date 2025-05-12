import { useEffect, useState } from 'react'
import className from 'classnames/bind'
import styles from './App.module.scss'
import FullScrrenMessage from '@shared/FullScreenMessage'

import Heading from './components/sections/Heading'
import Movie from './components/sections/Movie'

import { Wedding } from '@models/wedding'

const cx = className.bind(styles)
function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

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

  if (loading) {
    return <FullScrrenMessage type="loading" />
  }
  if (error) {
    return <FullScrrenMessage type="error" />
  }

  if (!wedding) {
    return <FullScrrenMessage type="error" />
  }
  const { date } = wedding

  return (
    <div className={cx('container')}>
      <Heading date={date} />
      <Movie />
      {JSON.stringify(wedding)}
    </div>
  )
}

export default App
