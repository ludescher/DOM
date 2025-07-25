import TRecursiveElementObject from "./TRecursiveElementObject";

type TElementChild =
    | Readonly<TRecursiveElementObject>
    | HTMLElement
    | Node
    | string;

export default TElementChild;