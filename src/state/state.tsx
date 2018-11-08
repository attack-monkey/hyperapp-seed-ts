import { location } from '@hyperapp/router';

export interface State {
  location: any,
  loadedComponents: { [key: string]: boolean }
}

export const state: State = {
  location: location.state,
  loadedComponents: {}
}