import React from "react"
import { useParams, useHistory } from "react-router-dom"
import { capitalize } from "../../util/stringCapitalize"
import "./UserPage.css"

const UserPage: React.FC = () => {
  const { name } = useParams<{ name: string }>()
  const { shareLink } = useHistory().location.state as {shareLink: string}

  const onShareClick = () => {
    window.location.href = shareLink
  }

  return (
    <div className="user-page">
      <h2>This page is for {capitalize(name)}</h2>

      <button onClick={onShareClick}>Share</button>
    </div>
  )
}

export default UserPage