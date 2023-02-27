import {reqCategoryList} from "@/api"
//search模块的仓库
const state = {
    categoryList: []
};
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    }
};
const actions = {
    //通过api里面的接口函数调用，向服务器请求，获取服务器的数据
    async categoryList({commit}) {
        let result = await reqCategoryList();
        console.log(result);
        if(result.data.code == 200) {
            commit('CATEGORYLIST');
        }
    }
};
const getters = {};

export default {
    state,
    mutations,
    actions,
    getters
}