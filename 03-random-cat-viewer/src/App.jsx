import {useEffect, useState} from 'react'
import './App.css'

function App() {
  const [cat, setCat] = useState({})
  const [visible, setVisible] = useState(false)
  const [loader, setLoader] = useState(true)

  async function fetchCat(){
    setLoader(true); // Start loading
    const apiUrl = "https://api.freeapi.app/api/v1/public/cats/cat/random"
    const respone = await fetch(apiUrl)
    const result = await respone.json()
    const catData = result.data
    setCat(catData)
    console.log(result)
    setLoader(false) // end loading
  }

  function toggleVisible(){
    setVisible(prev => !prev)
  }

  useEffect(() => {
    fetchCat()
  },[])

  return (
    <main>
      <h1>Random Cat Viewer</h1>
      {loader ? <div className="loader"></div>
          :
          <div className="cat-container">
            <section>
              <p>{cat.name}</p>
              <p>{cat.description}</p>
              <button onClick={toggleVisible}>{visible ? "hide details" : "view more details" }</button>
              { visible &&
                  <div>
                    <p>Origin : {cat.origin}</p>
                    <p>Life span : {cat.life_span}</p>
                    <p>nick name : {cat.alt_names}</p>
                    <a href={cat.wikipedia_url} target="_blank">wikipedia page</a>
                  </div>
              }
            </section>
            <section>
              <img src={cat.image} alt=""/>
            </section>
          </div>
      }


      <button onClick={fetchCat} disabled={loader} hidden={loader}>{loader ? "" : "Next"}</button>
    </main>
  )
}

export default App
