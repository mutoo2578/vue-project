<script setup lang="ts">
interface Tree {
  label: string
  children?: Tree[]
}
import { ref, onMounted, onBeforeUnmount } from 'vue'

// 页面加载进度条控制
const loading = ref(true)
const progress = ref(0)

// 模拟页面加载过程，2秒内完成
const simulateLoading = () => {
  const duration = 2000 // 2秒
  const startTime = Date.now()

  const timer = setInterval(() => {
    const elapsed = Date.now() - startTime
    const percentage = Math.min((elapsed / duration) * 100, 100)
    progress.value = percentage

    if (percentage >= 100) {
      clearInterval(timer)
      // 加载完成后立即隐藏
      loading.value = false
    }
  }, 50) // 更高的更新频率，使动画更平滑

  return timer
}

let loadingTimer: number | null = null

onMounted(() => {
  // 页面加载时显示进度条
  loading.value = true
  progress.value = 0
  loadingTimer = simulateLoading()
})

onBeforeUnmount(() => {
  // 清理定时器
  if (loadingTimer) {
    clearInterval(loadingTimer)
  }
})

const active = ref(0)
const tabs = [
  { label: '项目管理', shape: 'trap-1' },
  { label: '图纸管理', shape: 'trap-2' },
  { label: '工程资料', shape: 'trap-3' },
  { label: '焊接资源', shape: 'trap-4' },
  { label: '工时管理', shape: 'trap-5' },
  { label: '模块六', shape: 'trap-6' },
]

interface Tree {
  id: number | string
  label: string
  children?: Tree[]
}

const handleNodeClick = (data: Tree) => {
  console.log(data)
}

const data: Tree[] = [
  {
    id: '1',
    label: 'Level one 1',
    children: [
      {
        id: '1-1',
        label: 'Level two 1-1',
      },
    ],
  },
  {
    id: '2',
    label: 'Level one 2',
    children: [
      {
        id: '2-1',
        label: 'Level two 2-1',
      },
      {
        id: '2-2',
        label: 'Level two 2-2',
      },
    ],
  },
  {
    id: '3',
    label: 'Level one 3',
    children: [
      {
        id: '3-1',
        label: 'Level two 3-1',
      },
      {
        id: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            id: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
const data2: Tree[] = [
  {
    id: '1',
    label: '进行中（80）',
    children: [
      {
        id: '1-1',
        label: '国标（40）',
      },
      {
        id: '1-1',
        label: '国标（40）',
      },
      {
        id: '1-1',
        label: '国标（40）',
      },
      {
        id: '1-1',
        label: '国标（40）',
      },
      {
        id: '1-1',
        label: '国标（40）',
      },
    ],
  },
  {
    id: '2',
    label: '进行中（80）',
  },
  {
    id: '3',
    label: '进行中（80）',
  },
]
const defaultProps = {
  children: 'children',
  label: 'label',
}

const defaultExpandedKeys = ref(['1', '2', '3', '3-2'])

const items = ref([
  { title: '项目总数', count: 9400, image: '/img/t1.svg' },
  { title: '工艺评定', count: '10 / 1000', image: '/img/t2.svg' },
  { title: 'WPS', count: 9400, image: '/img/t3.svg' },
  { title: '焊工人数', count: 9400, image: '/img/t4.svg' },
  { title: 'WPS', count: 9400, image: '/img/t5.svg' },
])

const childData = ref([
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
  { title: '标题', count: 1800 },
])

const tableData = [
  {
    date: 'TH-2025-001',
    name: 'L-001',
    productName: '压力容器',
    system: 'ASME',
    containerType: 'Ⅰ类',
    technician: '张三',
    progress: ['封面', 'S316焊接接头图', '节点清单', '焊材汇总表', '热处理工艺'],
  },
  {
    date: 'TH-2025-002',
    name: 'L-002',
    productName: '换热器',
    system: 'GB',
    containerType: 'Ⅱ类',
    technician: '李四',
    progress: ['封面', 'S316焊接接头图', '节点清单', '焊材汇总表', '热处理工艺'],
  },
  {
    date: 'TH-2025-003',
    name: 'L-003',
    productName: '储罐',
    system: 'ASME',
    containerType: 'Ⅲ类',
    technician: '王五',
    progress: ['封面', 'S316焊接接头图', '节点清单', '焊材汇总表', '热处理工艺'],
  },
  {
    date: 'TH-2025-004',
    name: 'L-004',
    productName: '反应器',
    system: 'GB',
    containerType: 'Ⅱ类',
    technician: '赵六',
    progress: ['内容占位符'],
  },
  {
    date: 'TH-2025-005',
    name: 'L-005',
    productName: '塔器',
    system: 'ASME',
    containerType: 'Ⅲ类',
    technician: '孙七',
    progress: ['内容占位符'],
  },
  {
    date: 'TH-2025-006',
    name: 'L-006',
    productName: '分离器',
    system: 'GB',
    containerType: 'Ⅰ类',
    technician: '周八',
    progress: ['内容占位符'],
  },
]
</script>

<template>
  <div class="common-layout">
    <el-container>
      <div style="height: 4px; background-color: #3f444d"></div>
      <div style="height: 2px; background-color: #000"></div>

      <el-header style="display: flex; align-items: center">
        <img style="width: 120px; height: 80px; margin-left: -20px" src="/img/logo.svg" alt="" />
        <div class="header-box width: 120px; height: 80px;">
          <div class="trapezoid-tabs trap-box">
            <div
              v-for="(item, index) in tabs"
              :key="index"
              class="tab-item"
              :class="[item.shape, { active: active === index }]"
              @click="active = index"
            >
              <span>{{ item.label }}</span>
            </div>
          </div>
        </div>
        <div
          style="width: 26%; height: 100%; display: flex; align-items: flex-start; padding-top: 0"
        >
          <div
            style="
              width: 80%;
              height: 70px;
              background-image: url('/img/bb1.svg');
              background-repeat: no-repeat;
              background-size: 100% 100%;
              padding: 6px 0 0 80px;
              /* 使用transform替代固定margin，实现相对定位 */
              transform: translateY(-2px);
            "
          >
            <div
              style="
                color: #7ccfff;
                text-shadow:
                  0 0 2px rgba(103, 200, 255, 0.6),
                  0 0 16px #58c2ff;
                -webkit-text-stroke-width: 0.2px;
                -webkit-text-stroke-color: #7ccfff;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 28px; /* 140% */
                display: flex;
                align-items: center;
                gap: 16px;
              "
            >
              <!-- <div style="background-image: url('/public/img/Polygon 2.svg')"></div> -->
              <img
                src="/img/yh.svg"
                alt=""
                style="width: 20px; height: 15px; margin-top: 2px; margin-left: -40px"
              />
              欢迎用户登录系统
            </div>
            <div
              style="
                color: #7ccfff;
                text-shadow:
                  0 0 2px rgba(103, 200, 255, 0.6),
                  0 0 16px #58c2ff;
                -webkit-text-stroke-width: 0.2px;
                -webkit-text-stroke-color: #7ccfff;
                font-size: 16px;
                font-style: normal;
                font-weight: 400;
                line-height: 28px; /* 140% */
              "
            >
              内容占位符内容占位符内容占位符
            </div>
          </div>
          <div style="display: flex; align-items: center; /* flex: 1; justify-content: center */">
            <img src="/img/tx.svg" alt="" style="width: 60px; height: 60px" />
            <img src="/img/xjt.svg" alt="" style="width: 21px; height: 26px" />
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="200px" height="100%" style="position: relative">
          <img
            src="/img/zksq.svg"
            alt=""
            style="
              width: 40px;
              height: 94px;
              position: absolute;
              top: 50%;
              right: 2px;
              transform: translateY(-50%);
              z-index: 9999;
            "
          />

          <div class="single-choice-box">
            <div class="single-choice">资源</div>
            <div class="single-choice2">业务</div>
          </div>
          <div class="tree-box">
            <div class="image-btn">
              <img src="/img/1.svg" alt="" />
              <img src="/img/2.svg" alt="" />
              <img src="/img/3.svg" alt="" />
              <img src="/img/4.svg" alt="" />
            </div>
            <el-tree
              node-key="id"
              style="max-width: 600px"
              :data="data"
              :props="defaultProps"
              @node-click="handleNodeClick"
              :default-expanded-keys="defaultExpandedKeys"
            />
          </div>
          <div
            style="
              position: absolute;
              bottom: 0;
              left: 50%;
              transform: translateX(-50%);
              width: 100%;
            "
          >
            <div class="logo-box">
              <div class="logo-box-txt">
                <div style="font-size: 18px; font-weight: 700; text-align: center">数邦科技</div>
                <div style="font-size: 12px; font-weight: 700; text-align: center">SUPER DATAS</div>
              </div>
            </div>
            <div
              style="
                width: 100%;
                height: 92px;
                background-image: url('/img/xl.svg');
                background-repeat: no-repeat;
                background-size: 100%;
              "
            ></div>
          </div>
        </el-aside>
        <el-main>
          <el-breadcrumb separator="">
            <el-breadcrumb-item>
              <div
                style="
                  width: 136px;
                  height: 43px;
                  font-size: 18px;
                  text-align: center;
                  line-height: 43px;
                  margin-right: -2px;
                  text-align: center;
                  background-color: #3f444d;
                  background-image: url('/img/mbx.svg');
                  background-repeat: no-repeat;
                  background-size: 103% 100%;
                "
              >
                <a href="/" style="color: #60c5ff">First Item ×</a>
              </div>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <div
                style="
                  width: 136px;
                  height: 43px;
                  font-size: 18px;
                  text-align: center;
                  line-height: 43px;
                  text-align: center;
                "
              >
                <a href="/">Second Item ×</a>
              </div>
            </el-breadcrumb-item>
            <el-breadcrumb-item>
              <div
                style="
                  width: 136px;
                  height: 43px;
                  font-size: 18px;
                  text-align: center;
                  line-height: 43px;
                  text-align: center;
                "
              >
                <a href="/" style="color: #c0c0c0; cursor: pointer; font-weight: 700"
                  >Second Item ×</a
                >
              </div>
            </el-breadcrumb-item>
          </el-breadcrumb>
          <div
            style="
              padding: 4px;
              border-radius: 8px;
              background: #272f38;
              box-shadow:
                4px 0 10px 0 rgba(0, 8, 19, 0.35) inset,
                -4px 0 10px 0 rgba(0, 8, 19, 0.35) inset,
                2px 2px 10px 0 rgba(0, 18, 45, 0.35) inset,
                -2px -2px 10px 0 rgba(0, 18, 45, 0.35) inset;
            "
          >
            <div class="items-container">
              <div v-for="(item, index) in items" :key="index" class="item-card">
                <img
                  :src="item.image"
                  alt="无"
                  class="item-image"
                  style="width: 36px; height: 36px"
                />
                <div class="item-info">
                  <h3
                    class="item-title"
                    style="
                      color: #c0c0c0;
                      text-align: right;
                      font-size: 18px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                      text-transform: capitalize;
                    "
                  >
                    {{ item.title }}
                  </h3>
                  <p
                    class="item-count"
                    style="
                      color: var(--Text-, #fff);
                      text-align: right;
                      font-size: 16px;
                      font-style: normal;
                      font-weight: 500;
                      line-height: normal;
                      letter-spacing: 0.24px;
                    "
                  >
                    {{ item.count }}
                  </p>
                </div>
              </div>
            </div>
            <div style="display: flex; gap: 10px">
              <div
                v-for="(item, index) in childData"
                :key="index"
                style="
                  display: flex;
                  align-items: center;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  text-transform: capitalize;
                  color: #c0c0c0;
                  font-size: 14px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: normal;
                  text-transform: capitalize;
                "
              >
                <div class="item-title">{{ item.title }}:</div>
                <div class="item-count">{{ item.count }}</div>
              </div>
            </div>
          </div>
          <div
            style="
              width: 100%;
              height: calc(100% - 150px);
              border-radius: 8px;
              margin-top: 6px;
              padding: 4px;
              background-color: #272f38;
            "
          >
            <div
              style="
                width: 100%;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: space-between;
                border-radius: 8px;
                padding: 4px;
                background: #3f444d;
                /* 背景状态 */
                box-shadow:
                  -6px -6px 18px 0 rgba(59, 68, 81, 0.75),
                  4px 4px 18px 0 rgba(0, 0, 0, 0.75);
              "
            >
              <div
                style="
                  width: 460px;
                  border-radius: 8px;
                  display: flex;
                  align-items: center;
                  gap: 16px;
                  padding: 4px;
                  background: #272f38;
                  box-shadow:
                    4px 0 10px 0 rgba(0, 8, 19, 0.35) inset,
                    -4px 0 10px 0 rgba(0, 8, 19, 0.35) inset,
                    2px 2px 10px 0 rgba(0, 18, 45, 0.35) inset,
                    -2px -2px 10px 0 rgba(0, 18, 45, 0.35) inset;
                "
              >
                <img src="/img/a1.svg" alt="" style="width: 36px; height: 36px" />
                <img src="/img/a2.svg" alt="" style="width: 36px; height: 36px" />
                <img src="/img/a3.svg" alt="" style="width: 36px; height: 36px" />
                <img src="/img/a3.svg" alt="" style="width: 36px; height: 36px" />
                <img src="/img/a3.svg" alt="" style="width: 36px; height: 36px" />
                <img src="/img/a3.svg" alt="" style="width: 36px; height: 36px" />
                <img src="/img/a4.svg" alt="" style="width: 36px; height: 36px" />
                <img src="/img/a3.svg" alt="" style="width: 36px; height: 36px" />
                <img src="/img/a5.svg" alt="" style="width: 36px; height: 36px" />
              </div>
              <div
                style="
                  display: flex;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: normal;
                  margin-bottom: -10px;
                "
              >
                <div
                  style="
                    width: 185.732px;
                    height: 45px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: #39cbdf;
                    background-image: url('/img/jhzt.svg');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    margin-right: -20px;
                    font-size: 16px;
                    font-weight: 500;
                  "
                >
                  无损检测要求
                </div>
                <div
                  style="
                    width: 125.039px;
                    height: 46px;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-image: url('/img/mrzt.svg');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    font-size: 16px;
                    font-weight: 500;
                    z-index: 10;
                    margin-left: -6px;
                  "
                >
                  无损检测要求
                </div>
                <div
                  style="
                    width: 125.039px;
                    height: 46px;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-image: url('/img/mrzt.svg');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    font-size: 16px;
                    font-weight: 500;
                  "
                >
                  无损检测要求
                </div>
                <div
                  style="
                    width: 125.039px;
                    height: 46px;
                    color: #fff;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background-image: url('/img/mrzt.svg');
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    font-size: 16px;
                    font-weight: 500;
                  "
                >
                  无损检测要求
                </div>
              </div>
              <div style="display: flex; align-items: center; gap: 4px">
                <el-input style="width: 187px" />
                <!-- <el-button>Default</el-button> -->
                <div
                  style="
                    display: flex;
                    width: 75px;
                    padding: 4px 0;
                    color: rgba(255, 255, 255, 0.85);
                    justify-content: center;
                    align-items: center;
                    align-self: stretch;
                    border-radius: 8px;
                    background: #3f444d;
                    box-shadow:
                      -2px 2px 2px 0 rgba(255, 255, 255, 0.25) inset,
                      -2px -2px 8.2px 0 rgba(59, 68, 81, 0.75),
                      2px 2px 4px 0 rgba(0, 0, 0, 0.75);
                  "
                >
                  搜索
                </div>
              </div>
            </div>
            <div style="height: 92%; margin-top: 4px; display: flex">
              <div
                class="tree-box2"
                style="
                  display: flex;
                  width: 148px;
                  height: 100%;
                  padding: 8px;
                  flex-direction: column;
                  align-items: center;
                  gap: 8px;
                  flex-shrink: 0;
                  align-self: stretch;
                  border-radius: 8px;
                  background: #3f444d;
                  box-shadow:
                    -2px 2px 2px 0 rgba(255, 255, 255, 0.25) inset,
                    -2px -2px 8.2px 0 rgba(59, 68, 81, 0.75),
                    2px 2px 4px 0 rgba(0, 0, 0, 0.75);
                "
              >
                <el-tree
                  node-key="id"
                  style="max-width: 600px"
                  :data="data2"
                  :props="defaultProps"
                  @node-click="handleNodeClick"
                  :default-expanded-keys="defaultExpandedKeys"
                />
              </div>
              <div style="width: calc(100% - 148px - 4px); margin-left: 4px; height: 100%">
                <el-table :data="tableData" height="100%" style="width: 100%">
                  <el-table-column prop="date" label="图号" />
                  <el-table-column prop="name" label="令号" />
                  <el-table-column prop="productName" label="产品名称" />
                  <el-table-column prop="system" label="体系" />
                  <el-table-column prop="containerType" label="容器类别" />
                  <el-table-column prop="technician" label="工艺员" />
                  <el-table-column prop="progress" label="工艺进度" width="560">
                    <template v-slot="scope">
                      <div style="display: flex; align-items: center; gap: 16px">
                        <div
                          v-for="item in scope.row.progress"
                          :key="item"
                          style="padding: 4px 8px; border-radius: 4px; background: #ffadad"
                        >
                          {{ item }}
                        </div>
                      </div>
                    </template>
                  </el-table-column>
                </el-table>
              </div>
            </div>
          </div>
          <div
            v-if="loading"
            style="
              position: fixed;
              bottom: 0;
              right: 0;
              width: calc(100% - 210px);
              z-index: 9999;
              background: rgba(0, 0, 0, 0.1);
              padding: 4px 0;
            "
          >
            <el-progress
              :percentage="progress"
              :stroke-width="6"
              :duration="1"
              :color="['#FEBF3B']"
              :indeterminate="true"
              :show-text="false"
            />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <!-- <div class="stereo-box">立体效果 DIV</div> -->
  <!-- 页面加载进度条 -->
</template>

<style lang="less" src="./assets/app.less" scoped></style>
