export default{
    login(state,v){
        state.userInfo = v
    },
    Info(state,v){
        state.baseInfo = v
    }
}
// store.commit是修改数据