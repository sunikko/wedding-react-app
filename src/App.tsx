import { useEffect, useState } from 'react'
import className from 'classnames/bind'
import styles from './App.module.scss'
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
    return 'Loading...'
  }
  if (error) {
    return 'Error'
  }
  return <div className={cx('container')}>{JSON.stringify(wedding)}</div>
}

export default App
