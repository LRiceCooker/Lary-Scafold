import type ActionPayloadType from '../../types/providers/states/ActionPayloadType';

const useAction = (action: { type: string }, payload?: ActionPayloadType) => {
  return { ...action, payload };
};

export default useAction;
