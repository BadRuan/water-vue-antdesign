<script setup lang="ts">
import { ref } from 'vue'
import { DownloadOutlined } from '@ant-design/icons-vue'
import { useRecentlyStore } from '@/store/recently'

const size = ref('large');
const recentlyStore = useRecentlyStore()
const { recently_data, get_recently } = recentlyStore

</script>

<template>
    <a-typography-title style="text-align: center">水位表</a-typography-title>

    <a-divider />

    <div style="background: #ececec; padding: 30px">
        <a-row :gutter="16">
            <a-col :span="8">
                <a-card title="三线水位记录情况登记表1" :bordered="false" style="width: 300px">
                    <p>1、 今日 8:00 水位</p>
                    <p>2、 昨日 8:00 水位</p>
                    <p>3、 上周同期 8:00 水位</p>
                    <p>4、 去年同期 8:00 水位</p>
                    <p>5、 今日昨日8:00 水位对比</p>
                    <a-divider />
                    <a-button type="primary" shape="round" href="/table/1" target="_blank" :size="size">
                        <template #icon>
                            <DownloadOutlined />
                        </template>
                        获取水位表格
                    </a-button>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="三线水位记录情况登记表2" :bordered="false" style="width: 300px">
                    <p>1、 当前整点时间对应水位</p>
                    <p>2、 4小时前整点时间对应水位</p>
                    <p>3、 8小时前整点时间对应水位</p>
                    <a-divider />
                    <a-button type="primary" shape="round" href="/table/2" target="_blank" :size="size">
                        <template #icon>
                            <DownloadOutlined />
                        </template>
                        获取水位表格
                    </a-button>
                </a-card>
            </a-col>
            <a-col :span="8">
                <a-card title="三线水位记录情况登记表3" :bordered="false" style="width: 300px">
                    <p>1、 当前整点时间对应水位</p>
                    <p>2、 4小时前整点时间对应水位</p>
                    <p>3、 8小时前整点时间对应水位</p>
                    <a-divider />
                    <a-button type="primary" shape="round" href="/table/2" target="_blank" :size="size">
                        <template #icon>
                            <DownloadOutlined />
                        </template>
                        获取水位表格
                    </a-button>
                </a-card>
            </a-col>
        </a-row>
        <a-divider />

        <a-typography-title :level="3">注意：</a-typography-title>

        <a-typography-paragraph>
            1、各测站水位数据具体更新时间间隔不一，5分钟、10分钟、20分钟一次情况均有，一般整点水位数据都有。
        </a-typography-paragraph>

        <a-typography-paragraph>
            2、安徽省水信息网站更新水位数据，需要等测站数据上传成功，所以数据晚几分钟获取到属于正常情况。
        </a-typography-paragraph>

        <a-typography-paragraph>
            3、水信息网站最新显示数据一般取的是最近的一条，比如 8:00 没有数据，就会使用 7:55 的数据显示。
        </a-typography-paragraph>

        <a-typography-paragraph>
            4、本站严格使用目标时间准确数据，有直接用，没有的就填写 0。
        </a-typography-paragraph>
    </div>

    <a-divider />

    <a-descriptions title="最新水位信息" bordered>
        <a-descriptions-item v-for="item in recently_data" :key="item.stcd" :label="item.name">最新水位：{{ item.current }}m
            （更新时间：{{ item.tm }}）</a-descriptions-item>
    </a-descriptions>
    <a-button type="link" @click="get_recently">点击更新最新状态</a-button>

</template>