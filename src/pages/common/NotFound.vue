<template>
    <a-result status="404" title="404" sub-title="对不起, 你访问的页面不存在.">
        <template #extra>
            <a-button @click="route.go(-1)" type="primary">回到首页</a-button>
        </template>
    </a-result>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router'

const route = useRouter()
</script>