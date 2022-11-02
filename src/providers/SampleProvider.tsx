import React from 'react';
import sampleService from '../services/sampleService';
import useSampleReducer from './hooks/useSampleReducer';

const SampleContext = React.createContext({} as any);

const SampleProvider = ({ children }: { children: JSX.Element }) => {
  const [state, dispatch] = useSampleReducer();

  return <SampleContext.Provider value={{
    state,
    effect: () => sampleService.logic(dispatch),
  }}>{children}</SampleContext.Provider>;
};

const useSampleContext = () => {
  return React.useContext(SampleContext);
};

export { useSampleContext, SampleProvider };
