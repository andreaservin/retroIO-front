import { useRouter } from 'next/router'
import LoginForm from '../../components/common/LoginForm'
import Loading from '../../components/common/Loading'
import useLogin from '../../hooks/useLogin'
import { useEffect } from 'react'

const Login = () => {
  const { execute: login, data, loading, error } = useLogin()
  const router = useRouter()

  const handleSubmit = (user) => {
    const { email, password } = user
    login(email, password)
  }

  useEffect(() => {
    if (!loading && (error == null) && !(data == null)) {
      router.push('/')
    }
  }, [data, error, loading, router])

  return (
    <>
      {loading && <Loading />}
      {error && <div>Error al hacer login: {error}</div>}
      <LoginForm onSubmit={handleSubmit} />
    </>
  )
}

export default Login
