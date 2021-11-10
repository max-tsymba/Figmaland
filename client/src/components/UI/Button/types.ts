export interface IButton {
    isButton: boolean,
    text: string,
    url?: string,
    className?: string,
    type?: "button" | "reset" | "submit",
}