<template>
  <div>
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
          <dao-dropdown-item text-color="red" hover-color="green">
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

    <dao-dropdown
      trigger="custom"
      :append-to-body="false"
      :visible="true"
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