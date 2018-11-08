import { Actions } from "../../actions/actions.map";
import { State } from "../../state/state";
import { h } from "hyperapp";
import { Navbar } from "./navbar/navbar.component";
import { MainRouter } from "./main-router/main-router.component";

export const view = (state: State, actions: Actions) => (
    <div>
        <Navbar></Navbar>
        <MainRouter></MainRouter>
    </div>
);