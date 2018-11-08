import { State } from '../state/state';
import { Actions } from '../actions/actions.map';
import { iu } from 'iu-ts';

export const components: { [key: string]: any } = {
    Home: import('../components/viewport/main-router/home/home.component'),
    About: import('../components/viewport/main-router/about/about.component')
};

export const loadedComponentsMap: { [key: string]: any } = {};

export const loadComponent = (componentName: string) => (state: State, actions: Actions) => {
    console.log('loading component');
    components[componentName].then(
        (componentFile: any) => {
            actions.setComponent({ name: componentName, componentFile: componentFile})
        }
    );
}

export const setComponent = (value: {name: string, componentFile: any}) => (state: State) => {
    console.log('setting component');
    const component = value.componentFile[value.name];
    loadedComponentsMap[value.name] = component;
    return iu(state, 'loadedComponents/' + value.name, true);
}