//当前这个模块：api统一管理
import request from './request'

//三级联动接口
// /api/product/getBaseCategoryList() get 无参数

export const reqCategoryList = ()=> {
    //发请求: axios发请求返回结果Promise对象
    return request({url: '/product/getBaseCategoryList', method: 'get'});
}