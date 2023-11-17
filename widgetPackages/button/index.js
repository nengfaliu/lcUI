import lcButton from './index.vue'

// 注册
lcButton.install = app =>{
    app.component(lcButton.name, lcButton)
}

export default lcButton
