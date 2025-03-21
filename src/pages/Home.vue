<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useCountStore } from '@/store/count.ts'

const countStore = useCountStore()
const { total_count, this_year_count, visits, downloads } = storeToRefs(countStore)

countStore.loadData()
</script>

<template>
    <a-typography-title style="text-align: center">鸠江水位小助手</a-typography-title>

    <a-divider />

    <a-typography-title :level="2">起源</a-typography-title>
    <a-typography-paragraph>
        传统水位数据发布依赖人工查询记录，耗时耗力，且数据易摘抄错误，又或者达到相应水位而忘记标注对应颜色情况时有发生，尤其是在防汛夜班期间。
    </a-typography-paragraph>
    
    <a-typography-title :level="2">诞生</a-typography-title>
    <a-typography-paragraph>
        「鸠江水位小助手」应防汛值班工作需求而生，以<a-typography-text mark>自动水位数据提取</a-typography-text>+<a-typography-text
            mark>自动表格生成</a-typography-text>为核心，优化水位发布流程，助力实现​“鸠江区防汛水位报表秒级输出”​的效率飞跃。
    </a-typography-paragraph>
    <a-typography-paragraph>
        让防汛值班工作人员得到<a-typography-text strong>更好</a-typography-text>的用户体验。
    </a-typography-paragraph>

    <a-divider />

    <a-typography-title :level="2">意义</a-typography-title>
    <a-typography-paragraph>
        2024年明显提升鸠江区水务局防汛值班水位发布响应<a-typography-text mark>效率</a-typography-text>。
    </a-typography-paragraph>

    <a-divider />

    <a-typography-title :level="2">特点</a-typography-title>
    <a-typography-paragraph>
        「鸠江水位小助手平台」以​“<a-typography-text strong>精准、可靠</a-typography-text>”​为核心，让每个水位数据价值极致释放。
    </a-typography-paragraph>

    <a-divider>站点数据</a-divider>

    <a-row>
        <a-col :span="6">
            <a-statistic title="现有水位数据" :value="total_count" style="margin-right: 50px" />
        </a-col>
        <a-col :span="6">
            <a-statistic title="今年水位数据" :value="this_year_count" />
        </a-col>
        <a-col :span="6">
            <a-statistic title="站点访问数" :value="visits" />
        </a-col>
        <a-col :span="6">
            <a-statistic title="水位表下载数" :value="downloads" />
        </a-col>
    </a-row>


</template>