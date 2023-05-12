import React, { createContext, useState } from 'react'

const ApplicationContext = createContext()

export const ApplicationContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  return (
    <ApplicationContext.Provider
      value={{
        user,
        setUser,
      }}
    >
      {console.log(user)}
      {children}
    </ApplicationContext.Provider>
  )
}

export const ApplicationContextConsumer = ApplicationContext.Consumer

export default ApplicationContext
