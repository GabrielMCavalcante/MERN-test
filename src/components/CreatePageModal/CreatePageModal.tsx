import React, { useState } from "react"
import { useHistory } from "react-router"
import Spinner from "../Spinner/Spinner"

import "./CreatePageModal.css"

interface CreatePageModalProps {
  onCloseModal: () => void
}

const CreatePageModal: React.FC<CreatePageModalProps> = ({ onCloseModal }) => {
  const [pageName, setPageName] = useState("")
  const [loading, setLoading] = useState(false)
  const [feedback, setFeedback] = useState("")
  const history = useHistory()

  const onCreatePageSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    if (pageName.length === 0) {
      setLoading(false)
      setFeedback("Page name must not be empty")
    } else if (pageName.length < 4) {
      setLoading(false)
      setFeedback("Page name must be at least 4 characters long")
    } else if (pageName.length > 20) {
      setLoading(false)
      setFeedback("Page name must not exceed 20 characters")
    } else {
      // proceed to creation on database
      
      history.replace("/" + pageName.toString())
    }
  }

  const modal = (
    <div className="modal">
      <header>
        <h2>Page creation</h2>
        <span onClick={onCloseModal}>X</span>
      </header>

      <form onSubmit={onCreatePageSubmit}>
        <label htmlFor="pageName">Name of new page:</label>
        <input
          id="pageName"
          type="text"
          value={pageName}
          onChange={e => setPageName(e.target.value)}
          required
        />

        {feedback && <p className="feedback">{feedback}</p>}
        
        <button
          type="submit"
          disabled={loading}
        >
          {loading ? <Spinner /> : "Create page"}
        </button>
      </form>
    </div>
  )

  return (
    <>
      <div className="backdrop" />
      {modal}
    </>
  )
}

export default CreatePageModal