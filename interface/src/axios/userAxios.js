import axios from 'axios'

const apiDomain = process.env.API_DOMAIN || 'http://localhost:3000'
const URL = apiDomain + '/api/users'

const userLogin = (data) => {
    return axios({
        method: 'POST',
        url: URL + '/login',
        data
    })
}

const userPost = (data) => {
    return axios({
        method: 'POST',
        url: URL,
        data
    })
}

const userPut = (data) => {
    return axios({
        method: 'PUT',
        url: URL,
        data
    })
}

const userDelete = (data) => {
    return axios({
        method: 'DELETE',
        url: URL,
        data
    })
}

export {
    userLogin, userPost, userPut, userDelete
}