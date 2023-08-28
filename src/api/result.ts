import {URL} from "../constants";

export const submitResult = async ({uId, pId, title, pages}) => {
    try {
        await fetch(`${URL}/result/create`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uId,
                pId,
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

export const checkUserResult = async (pId: string, uId: string) => {
    try {
        const check = await fetch(`${URL}/result/check`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                uId,
                pId
            })
        })
        .then( res => res.json())
        return check
    } catch (e) {
        console.log(e)
    }
}    

export const countResultsByPoll = async (pId: string) => {
    try {
        const response = await fetch(`${URL}/result/count/${pId}`);
        const count = await response.json();
        return count
    } catch (e) {
        console.log(e)
    }
}    