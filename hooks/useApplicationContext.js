import { useContext } from 'react'
import ApplicationContext from '../context/AplicationContext'

const useApplicationContext = () => {
  return useContext(ApplicationContext)
}

export default useApplicationContext
