import axios from 'axios'
import config from '../config'

//当创建实例的时候配置默认配置
const ajax = axios.create({
    baseURL: config.service.serviceUrl
});

const get = url => ajax.get(url).then(res => {
    return res.data
})

const post = (url, params) => ajax.post(url, params).then(res => {
    return res.data
})

export default {
    get,
    post
}
