/*
import {useState} from "react";

export default function useQuote() {
    const [currQuote, setCurrQuote] = useState('')
    const [author, setAuthor] = useState('')

    async function fetchQuote(){
        const randomPage = Math.floor(Math.random() * 30) + 1
        const apiUrl = `https://api.freeapi.app/api/v1/public/quotes?page=${randomPage}&limit=10`

        const response = await fetch(apiUrl)
        const data = await response.json()
        setCurrQuote(data)

    }

    return {currQuote, author}
}*/
