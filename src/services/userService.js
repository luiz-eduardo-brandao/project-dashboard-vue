import HTTPClient from '@/configuration/axios'

export default {
    login: async payload => {
        const { data } = await HTTPClient.post('/user/login', payload)
        return data
    },
    verifyToken: async token => {
        const { data } = await HTTPClient.post('/user/verify', {
            headers: {
                Authorization: token
            }
        })
        
        return data
    }
}