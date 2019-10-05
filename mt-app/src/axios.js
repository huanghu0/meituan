import axios from 'axios'
axios.defaults.baseURL = 'https://open.duyiedu.com'
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
//   console.log(config)
  config.params = {
    //代表前面的params保留下来然后后面拼接上appkey
    ...config.params,
    appkey: 'zhuobian_1553777096855'
  }
  return config
}, function (error) {
// 对请求错误做些什么
  return Promise.reject(error)
})

export default axios