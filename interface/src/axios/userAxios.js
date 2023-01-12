import axios from 'axios'
import Swal from 'sweetalert2'

const apiDomain = process.env.REACT_APP_API_DOMAIN || 'http://localhost:3000'
const URL = apiDomain + '/api/users'

const userLogin = async (data, cb) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL + '/login',
            data
        })
        cb(result.data)
    } catch (error) {
        console.log(error)
        Swal.fire({
            position: 'top-end',
            icon: 'error',
            title: error.response.data.message,
            showConfirmButton: false,
            timer: 1500
        })
    }
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