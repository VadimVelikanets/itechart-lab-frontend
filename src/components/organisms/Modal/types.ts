export interface iModal {
    children?: JSX.Element,
    isOpen?: boolean,
    onClose?: ()=> void,
    className?: string
}