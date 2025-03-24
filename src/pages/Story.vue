<script setup lang="ts">
import { useStoryStore } from '@/store/story'

const storyStore = useStoryStore()
const { storys } = storyStore

</script>

<template>
    <div class="full-container">
        <a-typography-title class="centered-title" :level="1">开发历程</a-typography-title>
        <a-divider />

        <a-list item-layout="horizontal" :data-source="storys">
            <template #renderItem="{ item }">
                <a-list-item>
                    <a-list-item-meta :description="item.content">
                        <template #title>
                            RuanFumin on {{ item.event_time }}
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