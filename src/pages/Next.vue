<script setup lang="ts">
import { reactive } from 'vue'

const plans = reactive([
    "1、 统计计数: 显示功能使用次数, 如：访问次数，水位表使用次数",
    "2、 数据总览: 总及每年度水位条目数、各水文站点条目数等",
    "3、 功能优化: 点击下载表格后服务端的表格需要自动删除",
    "4、 功能优化: 根据按钮状态判断是否有水位数据",
])
</script>

<template>
    <a-typography-title style="text-align: center">
        下步计划
    </a-typography-title>

    <a-list size="large" bordered :data-source="plans">
        <template #renderItem="{ item }">
            <a-list-item>{{ item }}</a-list-item>
        </template>
        <template #header>
            <div>开发想法构思</div>
        </template>
        <template #footer>
            <div>具体开发视个人时间和精力安排</div>
        </template>
    </a-list>
</template>