import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { StoryInter } from '@/model'
import { getStory } from '@/api/story'

export const useStoryStore = defineStore('story', () => {
    const storys = ref<StoryInter[]>([])
    const get_story = async () => {
        storys.value = await getStory()
    }
    return { storys, get_story }
}) 