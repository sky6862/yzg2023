import request from '../utils/request'

// 登录
export const login = (data)=>request.post("/users/checkLogin",data)

// 账号列表
export const getAccountList =  (data)=>{
   return request.get("/users/list",{params:data});
}