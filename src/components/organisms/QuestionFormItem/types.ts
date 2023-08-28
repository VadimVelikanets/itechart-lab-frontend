import {formType, optionItem} from "../../types/QuestionForm";

export interface iQuestionFormItem {
    name: string,
    type: formType,
    options?: optionItem[],
    onDeleteItem: (id: string) => void,
    id: string
}