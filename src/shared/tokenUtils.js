import constants from './constants'

const { TOKEN_STORAGE_KEY, BEARER_TOKEN_PREFIX } = constants

export const getAccessToken = () => localStorage.getItem( TOKEN_STORAGE_KEY )

export const setAccessToken = ( token ) => {
    const bearerToken = `${ BEARER_TOKEN_PREFIX } ${ token }`
    return localStorage.setItem( TOKEN_STORAGE_KEY, bearerToken )
}
