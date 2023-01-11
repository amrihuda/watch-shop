import axios from 'axios'

const apiDomain = process.env.API_DOMAIN || 'http://localhost:3000'
const URL = apiDomain + '/api/brands/'

const brandGet = async (cb) => {
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

const brandGetById = async (id, cb) => {
    try {
        let result = await axios({
            method: 'GET',
            url: URL + 'brand/' + id
        })
        cb(result.data)
    } catch (error) {
        console.log(error)
    }
}

const brandPost = async (data, cb) => {
    try {
        let result = await axios({
            method: 'POST',
            url: URL,
            data
        })
        cb(result.data)
    } catch (error) {
        console.log(error)
    }
}

const brandPut = async (id, data, cb) => {
    try {
        let result = await axios({
            method: 'PUT',
            url: URL + id,
            data
        })
        cb(result.data)
    } catch (error) {
        console.log(error)
    }
}

const brandDelete = async (id, cb) => {
    try {
        let result = await axios({
            method: 'DELETE',
            url: URL + id
        })
        cb(result.data)
    } catch (error) {
        console.log(error)
    }
}

export {
    brandGet, brandGetById, brandPost, brandPut, brandDelete
}