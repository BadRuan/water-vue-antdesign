import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getCount } from '@/api/count.ts'


export const useCountStore = defineStore('count', () => {
    const total_count = ref(0)
    const this_year_count = ref(0)
    const visits = ref(0)
    const downloads = ref(0)

    const clickDownload = () => {
        downloads.value += 1
    }
    const loadData = async () => {
        const count = await getCount()
        total_count.value = count.total_count
        this_year_count.value = count.this_year_count
    }

    return {
        total_count, this_year_count, visits, downloads, clickDownload, loadData
    }
})
