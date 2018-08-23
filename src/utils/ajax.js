import axios from 'axios'
import config from '../config'

//当创建实例的时候配置默认配置
const ajax = axios.create({
    baseURL: config.service.serviceUrl
});

/**
 * Get请求
 * @param  {String}  url    请求Url
 * @param  {Object}  params 可选，参数对象
 * @return {Promise}        Promise对象
 */
const get = (url, params) => {
    let oUrl = url
    if (params) {
        const temp = []
        for (let [key, val] of Object.entries(params)) {
            temp.push(`${key}=${val}`)
        }
        const delim = oUrl.indexOf('?') >= 0 ? '&' : '?'
        oUrl = oUrl + delim + temp.join('&');
    }

    return ajax.get(oUrl).then(res => {
        return res.data
    })
}

/**
 * Post请求
 * @param  {String}  url    请求Url
 * @param  {Object}  params 参数对象
 * @return {Promise}        Promise对象
 */
const post = (url, params) => ajax.post(url, params).then(res => {
    return res.data
})

export default {
    get,
    post
}
