<template>
  <div>
    <template v-for="demo in demos">
      <h2>{{demo.name}}</h2>
      <div :class="['dao-card-layout', demo.class]">
        <div class="dao-card-col">
          <div class="dao-card">
            <div class="dao-card-main">
              <div class="icon">
                <svg><use xlink:href="#image-icon_redis"></use></svg>
              </div>
              <div class="content">
                <div class="title">
                  <span>最普通版</span>
                  <svg class="icon-verified"><use xlink:href="#icon_badge-verified"></use></svg>
                  <svg class="icon-cloud"><use xlink:href="#icon_cloud-line"></use></svg>
                </div>
                <div class="sub-title">数据库</div>
                <div class="desc">Redis 是一个开源的使用 ANSI C 语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API</div>
              </div>
            </div>
            <div class="dao-card-footer" v-if="demo.footer">
              <div class="footer-main">编程语言</div>
              <div class="footer-opt">
                <a href="#" class="dao-btn btn-sm blue">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="dao-card-col">
          <div class="dao-card">
            <a href="#" class="dao-card-main">
              <div class="icon">
                <svg><use xlink:href="#image-icon_redis"></use></svg>
              </div>
              <div class="content">
                <div class="title">
                  <span>整体链接版</span>
                  <svg class="icon-verified"><use xlink:href="#icon_badge-verified"></use></svg>
                  <svg class="icon-cloud"><use xlink:href="#icon_cloud-line"></use></svg>
                </div>
                <div class="sub-title">数据库</div>
                <div class="desc">Redis 是一个开源的使用 ANSI C 语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API</div>
              </div>
            </a>
            <div class="dao-card-footer" v-if="demo.footer">
              <div class="footer-main">编程语言</div>
              <div class="footer-opt">
                <!-- a 标签中套 a 标签是不行的 -->
                <a href="#" class="dao-btn btn-sm ghost">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="dao-card-col">
          <div class="dao-card">
            <div class="dao-card-main">
              <a href="#" class="icon">
                <svg><use xlink:href="#image-icon_redis"></use></svg>
              </a>
              <div class="content">
                <div class="title">
                  <a href="#">各项链接版</a>
                  <svg class="icon-verified"><use xlink:href="#icon_badge-verified"></use></svg>
                  <svg class="icon-cloud"><use xlink:href="#icon_cloud-line"></use></svg>
                </div>
                <a href="#" class="sub-title">数据库</a>
                <div class="desc">描述不允许改成链接形式</div>
              </div>
            </div>
            <div class="dao-card-footer" v-if="demo.footer">
              <div class="footer-main">编程语言</div>
              <div class="footer-opt">
                <a href="#" class="dao-btn btn-sm blue">购买</a>
              </div>
            </div>
          </div>
        </div>
        <div class="dao-card-col" v-for="item in list">
          <div class="dao-card">
            <div class="dao-card-main">
              <div class="icon">
                <svg><use xlink:href="#image-icon_redis"></use></svg>
              </div>
              <div class="content">
                <div class="title">
                  <span>{{item.title}}</span>
                  <svg class="icon-verified"><use xlink:href="#icon_badge-verified"></use></svg>
                  <svg class="icon-cloud"><use xlink:href="#icon_cloud-line"></use></svg>
                </div>
                <div class="sub-title">{{item.subtitle}}</div>
                <div class="desc">{{item.desc}}</div>
              </div>
            </div>
            <div class="dao-card-footer" v-if="demo.footer">
              <div class="footer-main">编程语言</div>
              <div class="footer-opt">
                <a href="#" class="dao-btn btn-sm blue">购买</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
  const repeatData = {
    title: 'Redis',
    subtitle: '数据库',
    desc: 'Redis 是一个开源的使用 ANSI C 语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API',
  };
  export default {
    data() {
      return {
        list: [
          repeatData,
          repeatData,
          repeatData,
          repeatData,
          repeatData,
          repeatData,
          repeatData,
          repeatData,
          repeatData,
        ],
        demos: [{
          name: 'Normal',
          desc: '',
          class: '',
          footer: false,
        }, {
          name: 'No Side Blank',
          desc: '',
          class: 'no-side-blank',
          footer: false,
        }, {
          name: 'Size Limit',
          desc: '可以限制一行最少／最多显示几个，默认一行最少显示一个，最多显示六个。',
          class: 'no-side-blank min-3 max-4',
          footer: false,
        }, {
          name: 'Offset',
          desc: '可以设定多余的留白，主要是为了适应窗口大小不等于 dao-card-layout 大小的情况，可以添加 class。有以下候选项： offset-xs, offset-sm, offset-md, offset-lg。',
          class: 'no-side-blank offset-md min-3',
          footer: false,
        }, {
          name: 'Has Footer',
          desc: '',
          class: 'no-side-blank offset-md min-3',
          footer: true,
        }],
      };
    },
  };
</script>