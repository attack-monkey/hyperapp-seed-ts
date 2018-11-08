import { State } from "../state/state";
import { location, LocationActions } from "@hyperapp/router";
import { loadComponent, setComponent } from "../lazy-component-loader/lazy-component-loader";

export interface Actions {
    location: LocationActions,
    loadComponent: (value: string) => (state: State, actions: Actions) => void,
    setComponent: ({ name, componentFile}: {name: string, componentFile: any}) => (state: State) =>  any
}

export const actions: Actions = {
    location: location.actions,
    loadComponent: loadComponent,
    setComponent: setComponent
}