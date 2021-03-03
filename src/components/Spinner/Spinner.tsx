import React from "react"
import "./Spinner.css"

interface SpinnerProps {
  big?: boolean
}

const Spinner: React.FC<SpinnerProps> = ({ big }) => {
  return <div className={["spinner", big && "big"].join(" ")}/>
}

export default Spinner