<script setup lang="ts">
import { ref, reactive } from 'vue'

const activities = reactive([
    {
        content: '项目初步构思',
        datetime: '2024-04-28',
    },
    {
        content: '支持一键生成水位表',
        datetime: '2024-05-02',
    },
    {
        content: '支持三线水位自动标注对应颜色',
        datetime: '2024-05-06',
    },
    {
        content: '项目调整为Web版本, 解决部分电脑客户端无法运行程序问题。',
        datetime: '2024-06-23',
    },
    {
        content: '更新界面，更加美观。',
        datetime: '2024-06-24',
    },
    {
        content: '支持每2小时、每1小时高频次发布需求。',
        datetime: '2024-06-29',
    },
    {
        content: '支持根据当前时间自动对比昨日/今日8时水位。',
        datetime: '2024-07-04',
    },
    {
        content: '支持隐藏不需要显示的数据列。',
        datetime: '2024-07-05',
    },
    {
        content: '大道至简，仅留使用功能。',
        datetime: '2024-09-21',
    },
    {
        content: '针对水信息网站反爬技术迭代，原有爬虫失效情况，重构爬虫，已完成',
        datetime: '2025-02-16',
    },
    {
        content: '完成Fastapi后端项目重构',
        datetime: '2025-02-18',
    }
])

</script>

<template>
    <div class="full-container">
        <a-typography-title class="centered-title" :level="1">开发历程</a-typography-title>
        <a-divider />

        <a-list item-layout="horizontal" :data-source="activities">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-list-item-meta
                        :description="item.content">
                        <template #title>
                            RuanFumin on {{ item.datetime }}
                        </template>
                        <template #avatar>
                            <a-avatar src="https://joeschmoe.io/api/v1/random" />
                        </template>
                    </a-list-item-meta>
                </a-list-item>
            </template>
        </a-list>
    </div>
</template>

<style scoped>
.full-container {
    /* 使用 Flex 布局实现垂直居中 */
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    padding: var(--ant-spacing-xl);
}

.centered-title {
    /* 文字水平居中 */
    text-align: center;
    /* 可选：添加垂直间距 */
    margin-bottom: var(--ant-spacing-xl);
}


/* 关键样式：按钮居中不拉伸 */
.pure-center-button {
    /* 1. 强制宽度自适应内容 */
    display: inline-block !important;
    width: auto !important;

    /* 2. 居中处理 */
    margin-left: auto !important;
    margin-right: auto !important;

    /* 3. 防止 Ant Design 默认拉伸 */
    white-space: nowrap;
}

/* 响应式处理：移动端适配 */
@media (max-width: 768px) {
    .centered-title {
        font-size: calc(1.5rem + 1vw);
        /* 字号随视窗变化 */
    }

    .timeline-container {
        padding: 0 16px;
    }
}
</style>