import {URL} from "../constants";
import { iQuestionFormData } from "../types/QuestionForm";

export const createPoll = async (uId: string, title: string, pages: iQuestionFormData[]) => {
    try {
        await fetch(`${URL}/poll/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uId,
                title,
                pages
            })
        })
            .then(async res => {
                const data = await res.json();
                return data
            })
    } catch (e) {
        console.log(e)
    }
}

export const getPollsByUser = async (uId: string) => {
    try {
        const list = await fetch(`${URL}/poll/user/${uId}`)
            .then(res => res.json())
        return list
    } catch (e) {
        console.log(e)
    }
}

export const deletePollById = async (id: string) => {
    try {
        await fetch(`${URL}/poll/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id
            })
        })
            .then(async res => {
                const data = await res.json();
                console.log(data)
            })
    } catch (e) {
        console.log(e)
    }
}

export const getPollById = async (id: string) => {
    try {
        const data = await fetch(`${URL}/poll/${id}`)
            .then( res => res.json())
        return data
    } catch (e) {
        console.log(e)
    }
}

export const editPoll = async (id: string, title: string, pages: []) => {
    try {
        await fetch(`${URL}/poll/`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id,
                title,
                pages
            })
        })
        .then(async res => {
            const data = await res.json();
        })
    } catch (e) {
        console.log(e)
    }
}