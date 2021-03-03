import React, { useEffect, useState } from "react"
import "./Dashboard.css"
import CreatePageModal from "../../components/CreatePageModal/CreatePageModal"
import api from "../../services/api"
import PageCard from "../../components/PageCard/PageCard"
import Spinner from "../../components/Spinner/Spinner"

function App() {
  const [availableCards, setAvailableCards] = useState<JSX.Element[]>([])
  const [showModal, setShowModal] = useState(false)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    async function fetchPages() {
      const response = await (await api.get("/pages")).data

      const pages = response.data as { _id: string, name: string, shareLink: string }[]

      const cardList: JSX.Element[] = []
      for (const page of pages) {
        cardList.push(
          <PageCard key={page._id} name={page.name} shareLink={page.shareLink}/>
        )
      }
      setAvailableCards([...cardList])
      setLoading(false)
    }

    fetchPages()
  }, [])

  return (
    <div className="Dashboard">
      <header>
        <h2>Welcome, <strong>Josue</strong>!</h2>

        <button onClick={() => setShowModal(true)}>Create new page</button>
      </header>

      {showModal && <CreatePageModal onCloseModal={() => setShowModal(false)} />}

      <div className="content">
        <p>Pages available: {availableCards.length}</p>

        {
          loading
            ? <div className="loading"><Spinner big={true}/></div>
            : (
              <div className="pages-grid">
                {availableCards}
              </div>
            )
        }
      </div>

    </div>
  )
}

export default App