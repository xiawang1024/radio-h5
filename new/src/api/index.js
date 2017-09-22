import axios from 'axios'
import Qs from 'qs'

const postData = (name, mobile, company, position, origin, openId) => axios.post('http://a.weixin.hndt.com/user/add',

    // Qs.stringify({
    //     name,
    //     mobile,
    //     company,
    //     position,
    //     origin,
    //     openid
    // })
    {
        name,
        mobile,
        company,
        position,
        origin,
        openId
    }
)

export {
    postData
}