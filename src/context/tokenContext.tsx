import React from 'react'
import { createContext } from 'react'

const tokenContext = createContext({token:'3c4a75c60ab27c385698962f1c76f654'});

interface PropsType {
    children: React.ReactNode
}

function tokenProvider(props: PropsType) {
  return (
    <tokenContext.Provider value={{token:'3c4a75c60ab27c385698962f1c76f654'}}>
        {props.children}
    </tokenContext.Provider>
  )
}

export default tokenContext