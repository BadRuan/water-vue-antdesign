import { $get } from '@/utils/requests'

export const getStory = async () => {
    let data = await $get('/api/story', '')
    return data.data
}
