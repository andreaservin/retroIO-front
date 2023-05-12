import AxiosWrapper from './axiosWrapper'
import { useCallback, useState } from 'react'
import useApplicationContext from '../hooks/useApplicationContext'

const useLogin = () => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { setUser } = useApplicationContext()

  const handleUpdateUser = useCallback(
    (user) => {
      setUser(user)
    },
    [setUser]
  )

  const execute = (email, password) => {
    setError(null)
    setLoading(true)
    AxiosWrapper.post('/users/login', { email, password })
      .then((response) => {
        setData(response.data)
        setError(null)
        setLoading(false)
        AxiosWrapper.defaults.headers.common.Authorization = `Bearer ${response.data.toString()}`
        handleUpdateUser(response.data)
      })
      .catch((error) => {
        console.log('LOGIN ERROR!!!', error)
        setData(null)
        setError(error.response.data.message)
        setLoading(false)
      })
  }

  return { data, loading, error, execute }
}

export default useLogin
