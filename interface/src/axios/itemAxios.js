import axios from 'axios'
import Swal from 'sweetalert2'

const apiDomain = process.env.REACT_APP_API_DOMAIN || 'http://localhost:3000'
const URL = apiDomain + '/api/items/'

const itemGet = async (cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL
        })
        cb(result.data)
    } catch (error) {
        console.log(error)
    }
}

const itemGetById = async (id, cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL + 'item/' + id
        })
        cb(result.data)
    } catch (error) {
        console.log(error)
    }
}

const itemPost = async (data, cb) => {
    let result = await axios({
        method: 'POST',
        url: URL,
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
}

const itemPut = async (id, data, cb) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + id,
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
    }
}

const itemDelete = async (id, cb) => {
    try {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            let res = await axios({
                method: 'DELETE',
                url: URL + id,
                headers: { 'user_token': localStorage.getItem('user_token') }
            })
            cb(res.data)
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
            }
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    itemGet, itemGetById, itemPost, itemPut, itemDelete
}