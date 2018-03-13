import axios from "axios";
import qs from "qs";
const ajax = axios.create({timeout: 30000, baseURL: 'http://localhost:8081/'});

axios.interceptors.request.use((request) => {
  if (request.data) {
      request.data = qs.stringify(request.data);
      console.log(request);
  }
  return request;
});
ajax.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    // if (response.data.code == -1 || response.data.code == 500) {
    //
    // } else if (response.data.code == 401) {
    //     //去登录
    //     Cookies.remove('user');
    //     Cookies.remove('password');
    //     location.reload();
    // }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });
export default ajax;
