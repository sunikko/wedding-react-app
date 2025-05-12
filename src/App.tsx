import { useEffect, useState } from 'react'
import className from 'classnames/bind'
import styles from './App.module.scss'
import FullScrrenMessage from './components/shared/FullScreenMessage'

const cx = className.bind(styles)
function App() {
  const [wedding, setWedding] = useState(null)
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
  return <div className={cx('container')}>{JSON.stringify(wedding)}</div>
}

export default App
