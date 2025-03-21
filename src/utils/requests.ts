import axios from 'axios'

const instance = axios.create({
    baseURL: '.',
    timeout: 2000
})

export const $get = async (url: string, params: any) => {
    let { data } = await instance.get(url, { params })
    return data
}