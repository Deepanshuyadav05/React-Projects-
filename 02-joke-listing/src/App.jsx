import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [joke, setJoke] = useState([])
  const [page, setPage] = useState(1)

  async function fetchJoke() {
    try {
      const apiUrl = `https://api.freeapi.app/api/v1/public/randomjokes?page=${page}&limit=10`
      const response = await fetch(apiUrl)
      const result = await response.json()
      const jokeArr = result.data.data
      setJoke(jokeArr)
    } catch (error) {
      console.log(error)
    }
  }

  function handleNextPage() {
    setPage(prev => Math.min(147, prev + 1));  //just in case disable btn not work
  }

  function handlePrevPage() {
    setPage(prev => Math.max(1, prev - 1))  //just in case disable btn not work
  }

  useEffect(() => {
    fetchJoke()
  }, [page]) // Refetch when page changes

  return (
      <main className="app-container">
        <header>
          <h1>The Daily Chuckle</h1>
        </header>

        <section className="joke-grid">
          {joke.map((item) => (
              <div className="joke-card" key={item.id}>
                <p>{item.content}</p>
              </div>
          ))}
        </section>

        <section className="pagination-wrapper">
          <button
              className="nav-btn prevBtn"
              onClick={handlePrevPage}
              disabled={page === 1}
          >
            Prev
          </button>
          <span className="currPg">Page {page} of 147</span>
          <button
              className="nav-btn nextBtn"
              onClick={handleNextPage}
              disabled={page === 147}
          >
            Next
          </button>
        </section>
      </main>
  )
}

export default App