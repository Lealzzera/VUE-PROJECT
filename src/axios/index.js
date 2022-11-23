import axios from 'axios'
import store from '@/store'

const HTTP = axios.create({
    baseURL: 'https://sishml.mp.rs.gov.br/svc/siscont/api',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    }
})

const HTTPLOGIN = axios.create({
    baseURL: 'https://sishml.mp.rs.gov.br/svc/siscont/api',
    headers: {
        Accept: '*/*',
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache'
    }
})

const setHeadersAuthorization = () => {
    HTTP.defaults.headers.common[
        'Authorization'
    ] = `Bearer ${store.getters.getToken}`
}

const setHeadersAuthorizationFirstLogin = () => {
    HTTPLOGIN.defaults.headers.common[
        'Authorization'
    ] = `Bearer ${store.getters.getTokenSession}`
}

export const ApiService = {
    get(path_name) {
        setHeadersAuthorization()
        return HTTP.get(path_name)
    },
    post(path_name, data, config) {
        setHeadersAuthorization()
        return HTTP.post(path_name, data, config)
    },
    update(path_name, id = '', data) {
        setHeadersAuthorization()
        return HTTP.put(`${path_name}/${id}`, data)
    },
    delete(path_name, id) {
        setHeadersAuthorization()
        return HTTP.delete(`${path_name}/${id}`)
    },
}