import axios from "axios"

let axiosInstance = axios.create({
  baseURL: "https://mern-test-server.herokuapp.com"
})

export default axiosInstance