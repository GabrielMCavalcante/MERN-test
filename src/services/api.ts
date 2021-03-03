import axios from "axios"

let axiosInstance
if (process.env.NODE_ENV === 'development') {
  axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_API_URL
  })
} else {
  axiosInstance = axios.create({
    baseURL: process.env.API_URL
  })
}

export default axiosInstance