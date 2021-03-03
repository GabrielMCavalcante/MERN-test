import axios, { AxiosInstance } from "axios"

let axiosInstance: AxiosInstance
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