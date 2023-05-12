import AxiosWrapper from './axiosWrapper'
import { useState } from 'react'

const useGet = (path) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const execute = () => {
    setLoading(true)
    AxiosWrapper.get(path)
      .then((response) => {
        setData(response.data)
        setError(null)
        setLoading(false)
      })
      .catch((error) => {
        setData(null)
        setError(error)
        setLoading(false)
      })
  }

  return { data, loading, error, execute }
}

export default useGet
