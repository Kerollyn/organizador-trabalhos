import axios from 'axios'
import {getAccessToken} from '../shared/tokenUtils'

const BASE_URL = 'https://heroku-org-trabalhos-api.herokuapp.com'

const getDefaultOptions = () => ( {
    headers: {
        Authorization: getAccessToken()
    }
} )

export default class ClassworkApi {
    static async uploadClasswork( classwork, file ) {
        if( !file ) {
            throw new Error( 'Nenhum arquivo foi selecionado para upload.' )
        }
        const url = `${BASE_URL}/classworks`

        const formData = new FormData()
            .append('file', file, file.name)
            .append('title', classwork.title)
            .append('subject', classwork.subject)
            .append('professorName', classwork.professor)
            .append('status', classwork.status)
            .append('deadline', classwork.deadline)
        
        const response = await axios.post( url, formData, getDefaultOptions() )

        return response.data
    }

    static async updateClasswork( classwork, file ) {
        const { id } = classwork
        const url = `${BASE_URL}/classworks/${id}`
        const classworkAsString = JSON.stringify(classwork)
        const formData = new FormData()
        formData.append('classwork', String(classworkAsString))
        if ( file ) {
            formData.append('file', file, file.name)
        }
        try {
            const response = await axios.patch( url, formData, getDefaultOptions() )
            return response.data
        } catch ( err ) {
        }

    }
}