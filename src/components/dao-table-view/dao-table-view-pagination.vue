<template>
  <div class="dao-table-view-pagination">
        <span class="counts">共 {{total}} 项</span>
        <span class="counts" v-show="checkedRowsLength > 0">
          ，已选中 {{checkedRowsLength}} 项
        </span>
        <div class="pagination" v-show="isShowPagination">
          <svg :class="{disabled: prevPageDisabled}" @click="prevPage">
            <use xlink:href="#icon_caret-left"></use>
          </svg>
          <button class="page" v-show="pagination.page > 2 && pagesNum > 5" @click="goToPage(1)">1</button><!--
       --><button class="page disabled" v-show="pagination.page > 2 && pagesNum > 5">...</button><!--
       --><button class="page" :class="{active: pagination.page == p+1}" v-for="p in pages" :key="p" @click="goToPage(p+1)">{{p+1}}</button><!--
       --><button class="page disabled" v-show="pagination.page < pagesNum - 3 && pagesNum > 5">...</button>
          <svg :class="{disabled: nextPageDisabled}" @click="nextPage">
            <use xlink:href="#icon_caret-right"></use>
          </svg>
        </div>
      </div>
</template>
<script>
  import {
    _map,
  } from '../../utils/assist';

  export default {
    name: 'DaoTableViewPagination',
    props: ['pagination', 'total', 'checkedRowsLength'],
    methods: {
      goToPage(page) {
        this.$emit('pageChange', page);
      },
      // 上一页
      prevPage() {
        if (this.prevPageDisabled) return;
        this.goToPage(this.pagination.page - 1);
      },
      // 下一页
      nextPage() {
        if (this.nextPageDisabled) return;
        this.goToPage(this.pagination.page + 1);
      },
    },
    computed: {
      // 大于一页才有显示的意义
      isShowPagination() {
        return this.total > this.pagination.per_page;
      },
      // 已经翻到第一页了
      prevPageDisabled() {
        return this.pagination.page === 1;
      },
      // 已经翻到最后一页了
      nextPageDisabled() {
        return this.pagesNum === 0 || this.pagination.page === this.pagesNum;
      },
      // 总共多少页
      pagesNum() {
        return Math.ceil(this.total / this.pagination.per_page);
      },
      // 这个 pages 始终只包括当前页前后共五页的页码
      pages() {
        const pagesArr = Array(this.pagesNum || 0);
        if (this.pagesNum <= 5) {
          // 如果总页数小于5，那就全显示
          return _map(pagesArr, (c, i) => i);
        } else if (this.pagesNum > 5 && this.pagination.page <= 2) {
          // 如果总页数大于5，且当前页是第一或第二页，那就显示前五页
          return _map(pagesArr, (c, i) => i).slice(0, 5);
        } else if (this.pagesNum > 5 && this.pagination.page >= this.pagesNum - 1 - 2) {
          // 如果总页数大于5，且当前页是倒数第一或第二页，那就显示后五页
          return _map(pagesArr, (c, i) => i).slice(-5);
        }
        // 最后是一般情况，显示当前页和前后两页
        return [
          this.pagination.page - 2,
          this.pagination.page - 1,
          this.pagination.page,
          this.pagination.page + 1,
          this.pagination.page + 2,
        ];
      },
    },
  };
</script>
<style lang="scss">
.dao-table-view-pagination{
  user-select: none;
  button{
    outline: none;
  }
}
</style>