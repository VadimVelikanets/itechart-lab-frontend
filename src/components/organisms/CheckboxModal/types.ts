export interface optionItem {
    id: string,
    title: string
}
export interface iCheckboxModal {
    onAddCheckboxList: (list: optionItem[]) => void
}