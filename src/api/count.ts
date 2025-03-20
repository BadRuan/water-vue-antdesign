import { $get } from '@/utils/requests'

export const getCount = async () => {
    let data = await $get('count', '')
    return data.data
}
