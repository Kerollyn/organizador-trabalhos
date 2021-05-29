import constants from './constants'
import jwt from 'jsonwebtoken'
import User from '../models/User'

const { TOKEN_STORAGE_KEY, BEARER_TOKEN_PREFIX } = constants

export const getAccessToken = () => localStorage.getItem( TOKEN_STORAGE_KEY )

const _getToken = () => getAccessToken()?.split(' ')?.pop()

export const setAccessToken = ( token ) => {
    const bearerToken = `${ BEARER_TOKEN_PREFIX } ${ token }`
    return localStorage.setItem( TOKEN_STORAGE_KEY, bearerToken )
}

export const getUser = () => {
    const token = _getToken()
    return new User(jwt.decode( token ))
}

export const validateToken = () => {
    const token = _getToken()
    if ( !token ) {
        return false
    }
    return true
}