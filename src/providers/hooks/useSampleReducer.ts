import React from 'react';

import sampleReducer from '../reducers/sampleReducer';

import type ActionType from '../../types/providers/states/ActionType';

const initialState = {
  data: "data"
};

const useSampleReducer = (): [state: any, dispatch: React.Dispatch<ActionType>] => {
  const [state, dispatch] = React.useReducer(sampleReducer, initialState);

  return [state, dispatch];
};

export default useSampleReducer;
