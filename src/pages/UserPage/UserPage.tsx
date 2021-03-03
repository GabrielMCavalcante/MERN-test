import React from "react"
import { useParams } from "react-router-dom"
import "./UserPage.css"

const UserPage: React.FC = () => {
  const { name } = useParams<{ name: string }>()

  console.log(name)

  const onShareClick = () => {
    // TODO: deep linking to app
    // If user does not have app installed,
    // redirect to [development] instragam's install page
    // else redirect to app for this page
  }

  return (
    <div className="user-page">
      <h2>This page is for {name}</h2>

      <button onClick={onShareClick}>Share</button>
    </div>
  )
}

export default UserPage