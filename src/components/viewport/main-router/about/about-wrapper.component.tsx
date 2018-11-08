import { h } from "hyperapp";
import { actions, Actions } from "../../../../actions/actions.map";
import { State } from "../../../../state/state";
import { loadedComponentsMap } from "../../../../lazy-component-loader/lazy-component-loader";

export const AboutWrapper = () => (state: State, actions: Actions) => {
    try{
        if (!state.loadedComponents['About']) {
            actions.loadComponent('About');
        }
    } catch (e) {
        console.error('Unable to load About component - ', e);
    }
    return (
        <div>
            { loadedComponentsMap['About'] ? loadedComponentsMap['About'] : '' }
        </div>
    );
}