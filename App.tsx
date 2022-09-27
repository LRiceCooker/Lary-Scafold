import React from 'react';
import MainProvider from './src/providers/MainProvider'
import Router from './src/router/Router'



const App = () => {

  return (
      <MainProvider>
        <Router/>
      </MainProvider>
  )
}

export default App