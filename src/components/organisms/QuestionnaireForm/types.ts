export interface iQuestionnaireForm {
    fId: number,
    title: string,
    items: any[],
    isActive: boolean,
    updateResultPages: (id: string, items: []) => void
}