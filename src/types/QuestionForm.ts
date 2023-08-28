export enum formType {
    radio="radio", checkbox="checkbox", text="text", range="range", file="file", rating="rating"
}

export interface optionItem {
    id: string,
    title: string
}

export interface iQuestionFormData {
    id: number,
    title: string,
    items: {
        id: string,
        name: string
        type: string,
        options?: optionItem[],
        value?: string | number
    }[]
}