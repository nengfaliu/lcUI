// 导入组件
import lcButton from './button/index'

// 组件列表
let components = [
    lcButton
]
// 全局install
const install = app =>{
    components.forEach(item=>{
        app.use(item)
    })
}
const lcUI = {
    install
}

// 用于按需导入
export { lcButton }
// 用于全局导入
export default lcUI