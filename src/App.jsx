import {useEffect, useState} from 'react'
import './App.css'


function App() {

    const [currQuote, setCurrQuote] = useState('')
    const [loader, setLoader] = useState(true)

    async function fetchQuote(){
        setLoader(true);
        const randomPage = Math.floor(Math.random() * 30) + 1
        try {
            const apiUrl = `https://api.freeapi.app/api/v1/public/quotes?page=${randomPage}&limit=10`

            const response = await fetch(apiUrl)
            const result = await response.json()
            const quoteArr = result.data.data
            const randomIndex = Math.floor(Math.random() * quoteArr.length)
            console.log(result.data.data)
            setCurrQuote(quoteArr[randomIndex])
        } catch (error) {
            console.log(error)
        } finally {
            console.log("finally executed")
            setLoader(false)
        }


    }

    useEffect(() => {
        fetchQuote()
    }, [])

  return (
      <div className="app-container">
        <h1 className="main-heading">Quote Generator</h1>

          {loader ? <p className="loader"></p> : null}
          {loader ? null :
              <div className="quote-wrapper">
                <p className="quote-text">{currQuote.content}</p>
                <p className="author">-{currQuote.author}</p>
                <button onClick={fetchQuote} className="next-btn">Next Quote</button>
              </div>
          }



        <p className="footer">Quotes don't work until u do</p>
      </div>
  )
}

export default App