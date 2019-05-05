/* eslint-disable */
import axios from "axios"
// API 接口域名配置
const config = {
  "development": 'https://www.apiopen.top',
  "production": 'https://www.456.com'
}

// 创建实例
var service = axios.create({
  baseURL: config[process.env.NODE_ENV],
  timeout: 5000 // 请求超时时间
})


// 请求拦截
service.interceptors.request.use(config => {
  // 发送请求前
  // console.log("=========发送请求前")
  // console.log(config)
  // 每个请求里面都会携带身份uid / token
  switch (config.method) {
    case 'get':
      config.params['key'] = '00d91e8e0cca2b76f515926a36db68f5'
      break;
    case 'post':
      config.data['key'] = '00d91e8e0cca2b76f515926a36db68f5'
      break;
  }
  return config

}, error => {
  // 请求错误
  return Promise.reject(error);
})


// 响应拦截
service.interceptors.response.use(response => {
  //响应的数据处理
  // console.log("=========响应的数据处理")
  // console.log(response)
  const res = response.data
  switch (res.code) {
    case 200:
      return res
      break;
    case 404:
      console.log(404)
      return res
      break;
    case 500:
      console.log(500)
      return res
      break;
  }
}, error => {
  // 响应错误的处理
  return Promise.reject(error);
})

export default service
