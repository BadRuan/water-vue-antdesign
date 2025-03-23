import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { RecentlyWaterInter } from '@/model'
import { getRecently } from '@/api/recently'

export const useRecentlyStore = defineStore('recently', () => {
    const recently_data = ref<RecentlyWaterInter[]>([])
    const get_recently = async () => {
        recently_data.value = await getRecently()
    }
    return { recently_data, get_recently }
}) 