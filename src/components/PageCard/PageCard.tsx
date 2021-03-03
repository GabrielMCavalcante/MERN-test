import React from "react"
import { Link } from "react-router-dom"
import { getRandomColor } from "../../util/getRandomColor"
import "./PageCard.css"

interface PageCardProps {
  name: string;
}

const PageCard: React.FC<PageCardProps> = ({ name }) => {  
  return (
    <Link to={`/${name}`} className="page-card">
      <div className="card-visual">
        <span style={{ backgroundColor: getRandomColor() }}>{name.charAt(0)}</span>
      </div>
      <span className="page-name">Page for: {name}</span>
    </Link>
  )
}

export default PageCard