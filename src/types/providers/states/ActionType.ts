import ActionPayloadType from './ActionPayloadType';

export default interface ActionType {
  type: string;
  payload?: ActionPayloadType;
}
