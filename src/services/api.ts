import axios from "axios"

let axiosInstance = axios.create({
  baseURL: "https://mern-test-server.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
})

export default axiosInstance