import { ACTION_FIELDS } from '../actions/sampleAction';
import ActionType from '../../types/providers/states/ActionType';

const sampleReducer = (state: any, action: ActionType) => {
  switch (action.type) {
    case ACTION_FIELDS.ACTION_NAME.type:
      return {
        ...state,
        // do stuff
      };
    default:
      return state;
  }
};

export default sampleReducer;
