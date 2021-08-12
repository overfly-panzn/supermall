import axios from "axios";
export function request(config) {
  //创建axios实例
  const instance = axios.create({
    baseURL:'http://123.207.32.32:8000',
    timeout:5000
  })
  //axios拦截器
  //请求拦截
  instance.interceptors.request.use(config=>{
    console.log(config);
    //1.比如config中的一些信息不符合服务器要求
    //2.比如每次网络请求时，都希望在页面中显示一个请求/加载的图标
    //3.某些网络请求（比如：登录(token)，没有token则重定向登录页面），必须携带一些特殊信息
    return config //必须返回config否则会被拦截
  },error => {
    console.log(error);
  })
  //响应拦截
  instance.interceptors.response.use(res=>{
    console.log(res);
    return res.data //必须返回res.data否则会被拦截
  },err=>{
    console.log(err);
  })

  //返回的本身就是Promise
  return instance(config)
}
