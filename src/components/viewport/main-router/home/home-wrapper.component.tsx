import { h } from "hyperapp";
import { actions, Actions } from "../../../../actions/actions.map";
import { State } from "../../../../state/state";
import { loadedComponentsMap } from "../../../../lazy-component-loader/lazy-component-loader";

export const HomeWrapper = () => (state: State, actions: Actions) => {
    try{
        if (!state.loadedComponents['Home']) {
            actions.loadComponent('Home');
        }
    } catch (e) {
        console.error('Unable to load Home component - ', e);
    }
    return (
        <div>
            { loadedComponentsMap['Home'] ? loadedComponentsMap['Home'] : '' }
        </div>
    );
}