export default{
    login(state,v){
        state.userInfo = v
    },
    Info(state,v){
        state.baseInfo = v
    },
    message(state,v){
        state.number = v
    }
}
// store.commit是修改数据