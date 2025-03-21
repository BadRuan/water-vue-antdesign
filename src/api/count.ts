import { $get } from '@/utils/requests'

export const getCount = async () => {
    let data = await $get('/api/count', '')
    return data.data
}
