<template>
    <a-typography-title style="text-align: center">鸠江水位小助手</a-typography-title>
    <a-divider />
    <a-typography-title :level="2">介绍</a-typography-title>

    <a-typography-paragraph>
        传统水位数据采集依赖人工查询记录，存在数据滞后、误差率二大难题。
    </a-typography-paragraph>

    <a-typography-paragraph>
        「鸠江水位小助手平台」应运而生，以<a-typography-text mark>自动化数据提取</a-typography-text>+<a-typography-text
            mark>智能表格生成</a-typography-text>为核心，重构水位发布全流程，助力实现​“数据分钟级更新、报表秒级输出”​的效率飞跃。
    </a-typography-paragraph>
    <a-typography-paragraph>
        让使用者专注于<a-typography-text strong>更好的用户体验</a-typography-text>。
    </a-typography-paragraph>
    <a-divider />
    <a-typography-title :level="3">应用价值</a-typography-title>
    <a-typography-paragraph>
        2024年鸠江区水务局防汛值班，水位发布响应<a-typography-text mark>效率</a-typography-text>提升。
    </a-typography-paragraph>
    <a-divider />
    <a-typography-title :level="3">开启效率纪元</a-typography-title>
    <a-typography-paragraph>
        「鸠江水位小助手平台」以​“<a-typography-text strong>精准、智能、可靠</a-typography-text>”​为核心，让每个水位数据价值被极致释放。
    </a-typography-paragraph>


    <a-divider />

    <a-row>
        <a-col :span="6">
            <a-statistic title="所有水位数据" :value="843195" style="margin-right: 50px" />
        </a-col>
        <a-col :span="6">
            <a-statistic title="今年水位数据" :value="112893" />
        </a-col>
        <a-col :span="6">
            <a-statistic title="站点访问数" :value="112893" />
        </a-col>
        <a-col :span="6">
            <a-statistic title="下载次数" :value="112893" />
        </a-col>
    </a-row>

</template>