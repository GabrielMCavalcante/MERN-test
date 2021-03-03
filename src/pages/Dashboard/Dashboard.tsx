import React, { useEffect, useState } from "react"
import "./Dashboard.css"
import CreatePageModal from "../../components/CreatePageModal/CreatePageModal"
import PageCard from "../../components/PageCard/PageCard"

function App() {
  const [availableCards, setAvailableCards] = useState<JSX.Element[]>([])
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    const cardList: JSX.Element[] = []
    for (let i = 0; i < 100; i++) {
      cardList.push(
        <PageCard key={i} name={`Test ${i+1}`}/>
      )
    }
    setAvailableCards([...cardList])
  }, [])

  return (
    <div className="Dashboard">
      <header>
        <h2>Welcome, <strong>Josue</strong>!</h2>
      
        <button onClick={() => setShowModal(true)}>Create new page</button>
      </header>

      {showModal && <CreatePageModal onCloseModal={() => setShowModal(false)}/>}

      <div className="content">
        <p>Pages available: {availableCards.length}</p>

        <div className="pages-grid">
          {availableCards}
        </div>
      </div>

    </div>
  )
}

export default App