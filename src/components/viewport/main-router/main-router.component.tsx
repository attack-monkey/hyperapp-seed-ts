import { Route } from "@hyperapp/router";
import { h } from "hyperapp";
import { HomeWrapper } from "./home/home-wrapper.component";
import { AboutWrapper } from "./about/about-wrapper.component";

export const MainRouter = () => (
    <div>
        <Route path="/" render={HomeWrapper}></Route>
        <Route path="/about" render={AboutWrapper}></Route>
    </div>
);