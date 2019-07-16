import axios from 'axios'

const request = axios.create({
  baseURL: 'http://ttapi.research.itcast.cn'
})
/**
 * 拦截器
 */
// Add a request interceptor
request.interceptors.request.use(function (config) {
  // Do something before request is sent
  return config
}, function (error) {
  // Do something with request error
  return Promise.reject(error)
})

// Add a response interceptor
request.interceptors.response.use(function (response) {
  // Do something with response data
  return response.data.data || response.data
  // 如果响应结果对象中有 data ，则直接返回这个data数据
  // 如果响应结果对象中没有data，则不做任何处理，直接原样返回
}, function (error) {
  // Do something with response error
  return Promise.reject(error)
})

export default request
