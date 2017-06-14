<template>
  <div>
    <h1>板布局（slat）表格</h1>
    <div class="dao-table-container">
      <div class="dao-table-toolbar">
        <div class="btn-group">
          <div class="dao-btn has-icon blue">
            <svg class="icon"><use xlink:href="#icon_plus"></use></svg>
            <span class="text">接入新主机</span>
          </div>
        </div>
        <div class="table-count">
          <span>共 1 主机，已选中 3 个主机</span>
        </div>
        <div class="table-filters">
          <dao-input :search='true'>
            <input>
          </dao-input>
        </div>
      </div>
      <table class="dao-table slat">
        <thead>
          <tr>
            <th class="name th-name">
              <input type="checkbox" class="round">
              <svg>
                <use xlink:href="#icon_stack"></use>
              </svg>
              <span>应用</span>
            </th>
            <th class="service">
              <svg>
                <use xlink:href="#icon_service"></use>
              </svg>
              <span>服务</span>
            </th>
            <th class="status">
              <svg>
                <use xlink:href="#icon_status"></use>
              </svg>
              <span>状态</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <!-- 第一行 -->
          <tr v-for="row in rows" :class="{selected: row.checked}">
            <!-- 应用 -->
            <td class="name td-name">
              <svg class="item-logo">
                <use xlink:href="'#image-icon_' + row.logo"></use>
              </svg>
              <div class="item-logo-text">
                <div class="item-major">
                  <a href="#">{{row.name}}</a>
                </div>
                <div class="item-minor">
                  <span>更新于 3 天前</span>
                  <!--
                -->
                  <div class="small-badge">
                    <svg class="small-badge-svg">
                      <use xlink:href="#icon_cpu"></use>
                    </svg>
                    <span class="small-badge-span">
                      {{row.cpu}} 核
                    </span>
                  </div>
                  <!--
                -->
                  <div class="small-badge">
                    <svg class="small-badge-svg">
                      <use xlink:href="#icon_ram-memory"></use>
                    </svg>
                    <span class="small-badge-span">
                      {{row.mem}} GB
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <!-- 服务 -->
            <td class="service">
              <div class="item-major">
                <svg v-for="serv in row.services">
                  <use xlink:href="'#image-icon_' + serv"></use>
                </svg>
              </div>
              <div class="item-minor">{{row.services.length}} 个服务</div>
            </td>
            <!-- 状态 -->
            <td class="status">
              <div class="item-major">
                <dao-progress-stacked :green="row.status.green" :red="row.status.red" :stripe="row.status.stripe" :black="row.status.black"></dao-progress-stacked>
              </div>
              <div class="item-minor">2/4 个运行中的任务</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <h1>行布局（row）表格</h1>
    <div class="dao-table-container">
      <table class="dao-table row">
        <thead>
          <tr>
            <th></th>
            <th>车牌</th>
            <th>车载终端编号</th>
            <th>VIN</th>
            <th>SMI</th>
            <th>所属车型</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    const rows = [
      {
        logo: 'python',
        name: 'dao-influxdb',
        cpu: 2,
        mem: 4,
        services: ['redis', 'nginx'],
        status: {
          green: 0.1,
          red: 0.3,
          stripe: 0.4,
          black: 0.2,
        },
        accessPoints: [
          {
            service: 'nginx',
            public: 80,
            private: 8000,
          },
          {
            service: 'redis',
            public: 8800,
            private: 30001,
          },
          {
            service: 'nginx',
            public: 80,
            private: 8000,
          },
          {
            service: 'redis',
            public: 8800,
            private: 30001,
          },
          {
            service: 'nginx',
            public: 80,
            private: 8000,
          },
          {
            service: 'redis',
            public: 8800,
            private: 30001,
          },
          {
            service: 'nginx',
            public: 80,
            private: 8000,
          },
          {
            service: 'redis',
            public: 8800,
            private: 30001,
          },
          {
            service: 'nginx',
            public: 80,
            private: 8000,
          },
          {
            service: 'redis',
            public: 8800,
            private: 30001,
          },
          {
            service: 'nginx',
            public: 80,
            private: 8000,
          },
          {
            service: 'redis',
            public: 8800,
            private: 30001,
          },
        ],
      },
      {
        logo: 'fedora',
        name: 'dao-graylog',
        cpu: 4,
        mem: 8,
        services: ['php', 'nginx'],
        status: {
          green: 0.4,
          red: 0.2,
          stripe: 0.1,
          black: 0.3,
        },
        accessPoints: [
          {
            service: 'nginx',
            public: 80,
            private: 8000,
          },
          {
            service: 'redis',
            public: 8800,
            private: 30001,
          },
        ],
      },
      {
        logo: 'python',
        name: 'dao-safari',
        cpu: 4,
        mem: 8,
        services: ['php', 'nginx'],
        status: {
          green: 0.4,
          red: 0.3,
          stripe: 0.2,
          black: 0.1,
        },
        accessPoints: [
          {
            service: 'nginx',
            public: 80,
            private: 8000,
          },
          {
            service: 'redis',
            public: 8800,
            private: 30001,
          },
        ],
      },
      {
        logo: 'python',
        name: 'dao-influxdb-2',
        cpu: 1,
        mem: 2,
        services: ['php', 'nginx'],
        status: {
          green: 0.1,
          red: 0.3,
          stripe: 0.4,
          black: 0.2,
        },
        accessPoints: [
          {
            service: 'nginx',
            public: 80,
            private: 8000,
          },
        ],
      },
    ];
    return {
      rows,
    };
  },
};
</script>
