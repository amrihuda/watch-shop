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

const userGetById = async (cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL + '/user',
            headers: { 'user_token': localStorage.getItem('user_token') },
        })
        cb(result.data)
    } catch (error) {
        console.log(error)
    }
}

const userPost = async (data, cb) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL,
            data
        })
        cb(result.data)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
    } catch (error) {
        console.log(error)
    }
}

const userPut = async (data, cb) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + '/user/update',
            headers: {
                'Content-Type': 'multipart/form-data',
                'user_token': localStorage.getItem('user_token')
            },
            data
        })
        cb(result.data)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Your work has been saved',
            showConfirmButton: false,
            timer: 1500
        })
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

export {
    userLogin, userPost, userPut, userGetById
}