import { h } from "hyperapp";

interface Props {
    title: string
}

export const Page = ({title}: Props) => (
    <h1>{title}</h1>
);