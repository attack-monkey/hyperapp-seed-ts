import { h } from "hyperapp";
import { Link } from "@hyperapp/router";

export const Navbar = () => (
    <div>
        <Link to="/">home</Link> | 
        <Link to="/about">about</Link>
    </div>
)