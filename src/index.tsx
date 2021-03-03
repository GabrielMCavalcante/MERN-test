import dotenv from "dotenv"
import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import reportWebVitals from "./reportWebVitals"
dotenv.config()

const app = (
  <App />
)

console.log(process.env.REACT_APP_API_URL)

ReactDOM.render(app, document.getElementById("root"))
reportWebVitals()