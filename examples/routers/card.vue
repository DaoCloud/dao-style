<template>
  <div>
    <template v-for="demo in demos">
      <h2>{{demo.name}}</h2>
      <app-card-layout 
        :breakpoint="demo.breakpoint" 
        :no-side-blank="demo.noSideBlank">
        <app-card-col v-for="card in cards" :key="card.id">
          <app-card>
            <app-card-icon slot="icon">
              <svg><use xlink:href="#image-icon_redis"></use></svg>
            </app-card-icon>
            <app-card-content slot="content">
              <template slot="title">
                <a href="#">{{card.title}}</a>
                <svg class="icon-verified"><use xlink:href="#icon_badge-verified"></use></svg>
                <svg class="icon-cloud"><use xlink:href="#icon_cloud-line"></use></svg>
              </template>
              <template slot="sub-title">
                {{card.subtitle}}
              </template>
              <template slot="desc">
                {{card.desc}}
              </template>
            </app-card-content>
            <app-card-footer slot="footer" v-if="demo.footer">
              <template slot="main">编程语言</template>
              <template slot="opt">
                <a href="#" class="dao-btn btn-sm blue">购买</a>
              </template>
            </app-card-footer>
          </app-card>
        </app-card-col>
      </app-card-layout>
    </template>
  </div>
</template>

<script>
  const card = {
    title: 'Redis',
    subtitle: '数据库',
    desc: 'Redis 是一个开源的使用 ANSI C 语言编写、支持网络、可基于内存亦可持久化的日志型、Key-Value 数据库，并提供多种语言的 API',
  };
  export default {
    data() {
      return {
        cards: [],
        demos: [{
          name: 'Normal',
          noSideBlank: false,
          footer: false,
          breakpoint: {
            480: 1,
            768: 2,
            992: 4,
            1200: 5,
          },
        }, {
          name: 'No Side Blank',
          noSideBlank: true,
          footer: false,
          breakpoint: {
            480: 1,
            768: 2,
            992: 4,
            1200: 5,
          },
        }, {
          name: 'Size Limit',
          noSideBlank: false,
          footer: false,
          breakpoint: {
            480: 1,
            768: 2,
            992: 4,
            1200: 4,
          },
        }, {
          name: 'Has Footer',
          noSideBlank: false,
          footer: true,
          breakpoint: {
            480: 1,
            768: 2,
            992: 4,
            1200: 5,
          },
        }],
      };
    },
    created() {
      Array.from((new Array(10))).forEach((item, index) => {
        card.id = index;
        this.cards.push(card);
      });
    },
  };
</script>