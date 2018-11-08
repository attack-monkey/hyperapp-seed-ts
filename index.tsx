import { loadPolyfills } from "./src/utils/polyfills/load-polyfills";
import { app } from "hyperapp";
import { state } from "./src/state/state";
import { actions } from "./src/actions/actions.map";
import { location } from "@hyperapp/router";
import { view } from "./src/components/viewport/viewport.component";


loadPolyfills();

const main: any = app(state, actions, view, document.getElementById('app'));
const unsubscribe = location.subscribe(main.location);


