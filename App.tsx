import { useNavigation } from '@react-navigation/native';
import React from 'react';
import MainProvider from './src/providers/MainProvider'
import Router from './src/router/Router'
import launchUrlResolver from './src/router/urlResolver';



const App = () => {

  return (
      <MainProvider>
        <Router/>
      </MainProvider>
  )
}

export default App