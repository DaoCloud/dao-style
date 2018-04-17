<template>
  <div>
    <g-nav>
      <app-switcher
        slot="nav-left"
        v-model="selectedLink"
        :switcherConfig="switcherConfig"
      >
      </app-switcher>
      <nav-center
        slot="nav-center"
        :centerConfig="centerConfig"
        v-model="selectedValue"
      >
      </nav-center>
      <nav-right
        slot="nav-right"
        :rightConfig="rightConfig"
      >
      </nav-right>
    </g-nav>
  </div>
</template>

<script>
import logoIcon from './assets/logo.png';
export default {
  data() {
    return {
      switcherConfig: {
        logo: {
            src: logoIcon,  // 图标地址
            href: "#"  // 点击跳转链接
        },
        links: [[
              {
                  key: 'DCE', // key为唯一标志
                  name: 'DaoCloud Enterprise', // 导航菜单链接的展示名字
                  icon: '', // 图标的源地址
                  href: '#DCE', // 导航菜单链接点击跳转的地址
                  // openNewTab: true, // 是否打开新的标签页
              },
              {
                  key: 'DCS',
                  name: 'DaoCloud Services',
                  icon: '',
                  href: '#DCS'
              },
          ],
          [
              {
                  key: '1',
                  name: 'MySQL 1',
                  icon: '',
                  href: '#mysql1'
              },
              {
                  key: '2',
                  name: 'MySQL 2',
                  icon: '',
                  href: '#mysql2'
              },
        ]],
      },
      selectedLink: '#DCS',
      navButtonConfig: {
        text: 'normal',
        icon: '',
        dropdown: true,
        withDot: true,
      },
      selectedValue: '1',
      centerConfig: {
        data: [
          {
            value: '1',
            label: '租户1',
          },
          {
            value: '2',
            label: '租户2'
          }
        ],
        onSelectChange: function(value) {
          console.log(value);
        }
      },
      rightConfig: [{
        key: 'user',
        icon: '',
        text: '用户',
        onClick: (e) => {
          console.log(e.key);
        },
        data: [
          {
            key: 'accountInfo',
            text: '用户信息',
          },
          {
            key: 'logout',
            text: '登出',
            disabled: true,
          }
        ]
      },{
        key: 'warn',
        icon: '',
        iconShape: 'circle',
        text: '警告',
        onClick: (e) => {
            console.log(e.key);
        },
        data: []
      }]
    }
  }
};
</script>

<style>
</style>
