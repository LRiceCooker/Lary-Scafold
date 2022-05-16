import React from 'react';
import MainProvider from './src/providers/MainProvider'
import Router from './src/router/Router'
import HomeScreen from './src/screens/HomeScreen'

import {Text} from 'react-native'
import { LaryProvider } from './src/lary';

const App = () => {
  return (
      <MainProvider>
        <Router/>
      </MainProvider>
  )
}

export default App