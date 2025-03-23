import { $get } from '@/utils/requests'

export const getRecently = async () => {
    let data = await $get('/api/recently', '')
    return data.data
}
