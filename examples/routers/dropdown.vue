<template>
  <div>
    <div class="dao-table-container">
      <div class="dao-table-toolbar">
        <div class="btn-group">
          <div class="dao-btn-group">
            <div class="dao-btn ghost">保存</div>
            <div class="dao-btn dao-icon ghost">
              <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_down-arrow"></use></svg>
            </div>
          </div>
          <div class="dao-btn-group">
            <dao-dropdown
              trigger="click"
              :append-to-body="true"
              placement="bottom-start">
              <div class="dao-btn dao-icon ghost">
                <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_down-arrow"></use></svg>
              </div>
              <dao-dropdown-menu slot="list">
                <dao-dropdown-item :is-title="true">扩展</dao-dropdown-item>
                <dao-dropdown-item>
                  <svg class="icon"><use xlink:href="#icon"></use></svg>
                  <span class="text">扩展</span>
                </dao-dropdown-item>
                <dao-dropdown-item :is-divided="true"></dao-dropdown-item>
                <dao-dropdown-item>扩展</dao-dropdown-item>
              </dao-dropdown-menu>
            </dao-dropdown>
            <div class="dao-btn ghost">保存</div>
            <dao-dropdown
              trigger="click"
              :append-to-body="true"
              placement="bottom-start">
              <div class="dao-btn dao-icon ghost">
                <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_down-arrow"></use></svg>
              </div>
              <dao-dropdown-menu slot="list">
                <dao-dropdown-item :is-title="true">扩展</dao-dropdown-item>
                <dao-dropdown-item>
                  <svg class="icon"><use xlink:href="#icon"></use></svg>
                  <span class="text">扩展</span>
                </dao-dropdown-item>
                <dao-dropdown-item :is-divided="true"></dao-dropdown-item>
                <dao-dropdown-item>扩展</dao-dropdown-item>
              </dao-dropdown-menu>
            </dao-dropdown>
            <dao-dropdown
              trigger="click"
              :append-to-body="true"
              placement="bottom-start">
              <div class="dao-btn dao-icon ghost">
                <svg class="icon"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon_down-arrow"></use></svg>
              </div>
              <dao-dropdown-menu slot="list">
                <dao-dropdown-item :is-title="true">扩展</dao-dropdown-item>
                <dao-dropdown-item>
                  <svg class="icon"><use xlink:href="#icon"></use></svg>
                  <span class="text">扩展</span>
                </dao-dropdown-item>
                <dao-dropdown-item :is-divided="true"></dao-dropdown-item>
                <dao-dropdown-item>扩展</dao-dropdown-item>
              </dao-dropdown-menu>
            </dao-dropdown>
          </div>
        </div>
        <div class="table-count">
          <span>共 10 容器，已选中 0 个容器</span>
        </div>
      </div>
      <div class="dao-table-main">
        <table class="dao-table row sortable">
          <thead>
            <tr>
              <th>
                <input type="checkbox">
                <svg>
                  <use xlink:href="#icon_user"></use>
                </svg>
                <span>姓名</span>
              </th>
              <th>
                <svg>
                  <use xlink:href="#icon_mail"></use>
                </svg>
                <span>电子邮箱</span>
              </th>
              <th>用户ID</th>
              <th class="sorted descending">首次访问</th>
              <th class="sorted ascending">注册时间</th>
            </tr>
          </thead>
          <tr class="selected">
            <!-- 姓名 -->
            <td class="name">
              <svg>
                <use xlink:href="#icon_user"></use>
              </svg>
              <a>zhangshanghai</a>
            </td>
            <!-- 电子邮箱 -->
            <td class="link">
              <a href="">
                <svg>
                  <use xlink:href="#icon_mail"></use>
                </svg>
                <span>hifreeplums@hotmail.com</span>
              </a>
            </td>
            <!-- 用户ID -->
            <td class="ellipsis" style="max-width:100px">
              47f10a62-546c-4096-be4b-bf2d8d470a32
            </td>
            <!-- 首次访问 -->
            <td>19 分钟前</td>
            <!-- 注册时间 -->
            <td>11 小时前</td>
          </tr>
          <tr>
            <!-- 姓名 -->
            <td class="name">
              <input type="checkbox">
              <svg>
                <use xlink:href="#icon_user"></use>
              </svg>
              <a>zhangshanghai</a>
            </td>
            <!-- 电子邮箱 -->
            <td>
              <svg>
                <use xlink:href="#icon_mail"></use>
              </svg>
              <span>hifreeplums@hotmail.com</span>
            </td>
            <!-- 用户ID -->
            <td class="ellipsis" style="max-width:100px">
              47f10a62-546c-4096-be4b-bf2d8d470a32
            </td>
            <!-- 首次访问 -->
            <td>19 分钟前</td>
            <!-- 注册时间 -->
            <td>
              <dao-dropdown
                :placement="placement"
                trigger="click"
                :append-to-body="true">
                <button class="dao-btn blue">
                  下拉菜单
                </button>
                <dao-dropdown-menu slot="list">
                  <dao-dropdown-item :is-title="true">扩展</dao-dropdown-item>
                  <dao-dropdown-item>
                    <svg class="icon"><use xlink:href="#icon"></use></svg>
                    <span class="text">扩展</span>
                  </dao-dropdown-item>
                  <dao-dropdown-item :is-divided="true"></dao-dropdown-item>
                  <dao-dropdown-item>扩展</dao-dropdown-item>
                </dao-dropdown-menu>
              </dao-dropdown>
            </td>
          </tr>
          <tr>
            <!-- 姓名 -->
            <td class="name">
              <input type="checkbox">
              <svg>
                <use xlink:href="#icon_user"></use>
              </svg>
              <a>zhangshanghai</a>
            </td>
            <!-- 电子邮箱 -->
            <td>hifreeplums@hotmail.com</td>
            <!-- 用户ID -->
            <td class="ellipsis" style="max-width:100px">
              47f10a62-546c-4096-be4b-bf2d8d470a32
            </td>
            <!-- 首次访问 -->
            <td>19 分钟前</td>
            <!-- 注册时间 -->
            <td>
              <dao-dropdown
                :placement="placement"
                trigger="click"
                :append-to-body="true">
                <button class="dao-btn blue">
                  下拉菜单
                </button>
                <dao-dropdown-menu slot="list">
                  <dao-dropdown-item :is-title="true">扩展</dao-dropdown-item>
                  <dao-dropdown-item>
                    <svg class="icon"><use xlink:href="#icon"></use></svg>
                    <span class="text">扩展</span>
                  </dao-dropdown-item>
                  <dao-dropdown-item :is-divided="true"></dao-dropdown-item>
                  <dao-dropdown-item>扩展</dao-dropdown-item>
                </dao-dropdown-menu>
              </dao-dropdown>
            </td>
          </tr>
        </table>
      </div>
      <div class="dao-pagination">
        <button class="dao-btn ghost has-icon">
          <svg class="icon"><use xlink:href="#icon_caret-left"></use></svg><span class="text">上一页</span>
        </button>
        <button class="dao-btn ghost has-icon">
          <span class="text">下一页</span><svg class="icon"><use xlink:href="#icon_caret-right"></use></svg>
        </button>
        <span class="dao-page-number">第 1 页，共 5 页</span>
      </div>
    </div>    

    <dao-dropdown
      trigger="click"
      :append-to-body="false"
      :placement="placement">
      <button class="dao-btn blue">
        下拉菜单
      </button>
      <dao-dropdown-menu slot="list">
        <dao-dropdown-item :is-title="true">扩展</dao-dropdown-item>
        <dao-dropdown-item @click="f1">扩展</dao-dropdown-item>
        <dao-dropdown-item :is-disabled="true">
          <svg class="icon"><use xlink:href="#icon"></use></svg>
          <span class="text">扩展</span>
        </dao-dropdown-item>
        <dao-dropdown-item :is-divided="true"></dao-dropdown-item>
        <dao-dropdown placement="right-start" :append-to-body="false">
          <dao-dropdown-item>
            <span>扩展</span>
            <svg style="width:16px;height:16px;float:right;"><use xlink:href="#icon_caret-right"></use></svg>
          </dao-dropdown-item>
          <dao-dropdown-menu slot="list">
            <dao-dropdown-item @click="f2">adsfasd</dao-dropdown-item>
            <dao-dropdown placement="right-start" :append-to-body="false">
              <dao-dropdown-item>
                <span>adsfasd</span>
                <svg style="width:16px;height:16px;float:right;"><use xlink:href="#icon_caret-right"></use></svg>
              </dao-dropdown-item>
              <dao-dropdown-menu slot="list">
                <dao-dropdown-item @click="f2">adsfasd</dao-dropdown-item>
              </dao-dropdown-menu>
            </dao-dropdown>
            
          </dao-dropdown-menu>
        </dao-dropdown>
      </dao-dropdown-menu>
    </dao-dropdown>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        placement: 'bottom-start',
      };
    },
    methods: {
      f1() {
        alert(1);
      },
      f2() {
        alert(2);
      },
    },
  };
</script>