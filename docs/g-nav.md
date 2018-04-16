# GNav

GNav 是一个全局导航栏。app-switcher是包含企业logo和可以切换不同场景的链接菜单。nav-center用于在导航栏中间放置如切换租户的下拉框之类的组件。nav-right里面可以放置是一个个按钮，点击按钮弹出下拉框，可以进行用户登录、登出等操作。

## 使用方法

```html
<template>
	<g-nav>
        <app-switcher
            slot="nav-left"
            v-model="selectedLink"
            :swicherConfig="switcherConfig"
        >
        <!--app-switcher在导航栏左侧，其中包含企业logo和切换不同场景的链接菜单。-->
        </app-switcher>
        <nav-center
            slot="nav-center"
            v-model="selectedValue"
            :centerConfig="navCenterConfig"
        >
            <!--通过centerConfig可以配置符合样式规范的单选下拉框，可以用作切换租户的场景。若不符合实际需求，此处可以传入自定义模板的内容，传入的自定义内容将覆盖配置的内容-->
        </nav-center>
        <nav-right
            slot="nav-right"
            :rightConfig="navRightConfig"
        >
            <!--通过rightConfig可以配置符合样式规范的一层dropdown。若不符合实际需求，此处可以传入自定义模板的内容，传入的自定义内容将覆盖配置内容-->
        </nav-right>
    </g-nav>
</template>
<script>
    export default {
        data() {
            return {
                selectedLink: '#DCS',
                switcherConfig: {
                    logo: {
                        src: './dec.svg',
                        href: 'home.html'
                    },
                    links: [
                        [
                              {
                                  key: 'DCE', // key为唯一标志
                                  text: 'DaoCloud Enterprise', // 导航菜单链接的展示名字
                                  icon: '', // 图标的源地址
                                  href: '#DCE', // 导航菜单链接点击跳转的地址
                                  openNewTab: true, // 是否打开新的标签页
                              },
                              {
                                  key: 'DCS',
                                  text: 'DaoCloud Services',
                                  icon: '',
                                  href: '#DCS'
                              },
                        ],
                        [
                              {
                                  key: '1',
                                  text: 'MySQL 1',
                                  icon: '',
                                  href: '#mysql1'
                              },
                              {
                                  key: '2',
                                  text: 'MySQL 2',
                                  icon: '',
                                  href: '#mysql2'
                              },
                        ]
                  ],
                },
                selectedValue: 'value1',
                navCenterConfig: {
                    data: [
                        {
                            value: 'value1',
                            label: '选项一',
                        },
                        {
                            value: 'value2',
                            label: '选项二'
                        }
                    ],
                    onSelectChange: function(value) {
                      console.log(value);
                    }
                },
                navRightConfig: [
                    {
                        key: 'user',
                        icon: '',
                        text: '用户',
                        onClick: (e) => {
                            switch(e.key) {
                                case 'accountInfo':
                                    console.log('用户信息', 'accountInfo');
                                    break;
                                case 'logout':
                                    console.log('登出', 'logout');
                                	break;
                                default: 
                                    break;
                            }
                        },
                        data: [
                          {
                            key: 'accountInfo',
                            text: '用户信息',
                          },
                          {
                            key: 'logout',
                            text: '登出',
                          },
                        ]
                    }
                ]
            }
		}
    }
</script>
```

## 组件参数

### app-switcher

| 参数          | 说明                           | 类型   | 可选值 | 默认值 | 是否必填 |
| ------------- | ------------------------------ | ------ | ------ | ------ | -------- |
| v-model       | 选中的链接选项的地址           | String |        | -      | 是       |
| swicherConfig | 导航栏左侧的配置项，详情见下表 | Object |        | -      | 是       |

#### swicherConfig

| 参数  | 说明                                  | 类型             | 可选值 | 默认值 | 是否必填 |
| ----- | ------------------------------------- | ---------------- | ------ | ------ | -------- |
| logo  | 企业logo配置，详情见下表              | Object           |        | -      | 是       |
| links | 链接菜单，每组链接详情见下表linkGroup | Array[linkGroup] |        | -      | 是       |

#### logo

| 参数 | 说明         | 类型   | 可选值 | 默认值 | 是否必填 |
| ---- | ------------ | ------ | ------ | ------ | -------- |
| src  | 图标url      | String |        | -      | 是       |
| href | 点击跳转链接 | String |        | -      | 否       |

#### linkGroup是一组链接Array[link]，每个链接的配置见link

#### link

| 参数       | 说明                   | 类型    | 可选值 | 默认值 | 是否必填 |
| ---------- | ---------------------- | ------- | ------ | ------ | -------- |
| key        | 唯一标志               | String  |        |        | 是       |
| text       | 链接的展示名字         | String  |        |        | 是       |
| icon       | 链接图标的url          | String  |        |        | 否       |
| href       | 导航菜单点击跳转的地址 | String  |        |        | 是       |
| openNewTab | 是否打开新的标签页     | Boolean |        | false  | 否       |

### nav-center

| 参数         | 说明                           | 类型   | 可选值 | 默认值 | 是否必填 |
| ------------ | ------------------------------ | ------ | ------ | ------ | -------- |
| v-model      | 选中的选项值                   | String |        | -      | 是       |
| centerConfig | 导航栏中间的配置项，详情见下表 | Object |        | -      | 是       |

#### centerConfig

| 参数           | 说明                                     | 类型                                        | 可选值 | 默认值 | 是否必填 |
| -------------- | ---------------------------------------- | ------------------------------------------- | ------ | ------ | -------- |
| options        | 单选下拉框的配置，每个选项的配置见option | Array                                       |        |        | 是       |
| onSelectChange | 选中项变化时的回调                       | Function(selectedValue,<br />selectedLabel) |        |        | 否       |

#### option

| 参数  | 说明                   | 类型           | 可选值 | 默认值 | 是否必填 |
| ----- | ---------------------- | -------------- | ------ | ------ | -------- |
| value | 根据此选项的值进行筛选 | String\|number |        |        | 是       |
| label | 选中项展示的label      | String         |        |        | 是       |

### nav-right

| 参数        | 说明               | 类型  | 可选值 | 默认值 | 是否必填 |
| ----------- | ------------------ | ----- | ------ | ------ | -------- |
| rightConfig | 配置导航栏右侧内容 | Array |        |        | 否       |

#### rightConfig是一个数组，数组中包含每个可以点击下拉的配置

| 参数    | 说明                         | 类型                 | 可选值 | 默认值 | 是否必填 |
| ------- | ---------------------------- | -------------------- | ------ | ------ | -------- |
| key     | 唯一标志                     | String               |        | -      | 是       |
| icon    | 按钮图标url                  |                      |        | -      | 否       |
| text    | 按钮的文字                   | String               |        |        | 否       |
| onClick | 点击下拉的项或者按钮的回调   | Function(event{key}) |        |        | 否       |
| data    | 下拉的配置，每个配置项见item | Array[item]          |        |        | 否       |

####item

| 参数     | 说明         | 类型    | 可选值               | 默认值   | 是否必填 |
| -------- | ------------ | ------- | -------------------- | -------- | -------- |
| key      | 唯一标志     | String  | -                    | -        | 是       |
| text     | 项展示的名字 | String  | -                    | -        | 是       |
| type     | 该项的类型   | String  | 'normal','dangerous' | 'normal' | 否       |
| disabled | 是否禁用     | Boolean | -                    | false    | 否       |