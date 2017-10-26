import axios from 'axios'
import Qs from 'qs'

const postData = (name, mobile, company, position, origin, openId) => axios.post('http://a.weixin.hndt.com/user/add', {
    name,
    mobile,
    company,
    position,
    origin,
    openId
})

const checkOpenId = (openId) => axios.get('http://a.weixin.hndt.com/user/check/?openid=' + openId)

export {
    postData,
    checkOpenId
}