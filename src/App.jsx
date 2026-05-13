import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="app-container">
        <h1 className="main-heading">Quote Generator</h1>

        <div className="quote-wrapper">
          <p className="quote-text">"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, sunt!"</p>
          <p className="author">- Author Name</p>
          <button className="next-btn">Next Quote</button>
        </div>

        <p className="footer">Created by Deepanshu</p>
      </div>
  )
}

export default App