import axios from "axios";
import qs from "qs";
const ajax = axios.create({timeout: 30000, baseURL: '/api'}); // baseURL所有接口添加/api 配合proxy解决跨域问题

axios.interceptors.request.use((request) => {
  if (request.data) {
      request.data = qs.stringify(request.data);
      console.log(request);
  }
  if (token) {  // 每次发送请求之前判断是否存在token，如果存在，则统一在http请求的header都加上token，不用每次请求都手动添加了
          config.headers.Authorization = token;
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
     if (error.response) {
            switch (error.response.status) {
                case 401:
                    // 这里写清除token的代码
                    router.replace({
                        path: 'login',
                        query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
                    })
            }
    }
    return Promise.reject(error);
  });
export default ajax;
