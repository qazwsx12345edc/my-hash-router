<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
      <div class="title" ref="title">Antd Mall</div>
      <a-menu theme="dark" mode="inline" v-model="menuKey">
        <a-menu-item key="/menu1">
          <span>menu1</span>
        </a-menu-item>
        <a-menu-item key="/menu2">
          <span>menu2</span>
        </a-menu-item>
        <a-menu-item key="/menu3">
          <span>menu3</span>
        </a-menu-item>
        <a-menu-item key="/menu4">
          <span>menu4</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0">
        <a-icon
          class="trigger"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="onClickChangeCollapsed"
        />
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        <my-router-view />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  data() {
    return {
      collapsed: false,
      selectKeys: ["/menu1"],
    };
  },
  methods: {
    onClickChangeCollapsed() {
      this.collapsed = !this.collapsed;
      this.collapsed
        ? (this.$refs.title.style.fontSize = "5px")
        : (this.$refs.title.style.fontSize = "24px");
    },
  },

  computed: {
    menuKey: {
      get() {
        return [this.$myrouter.current.path];
      },

      set(value) {
        this.selectKeys = value;
        this.$myrouter.push(value[0]);
      },
    },
  },
};
</script>
<style>
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}
#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}
#components-layout-demo-custom-trigger .title {
  height: 32px;
  margin: 16px;
  color: #fff;
  font-size: 24px;
  transition: 0.3s;
}
#components-layout-demo-custom-trigger {
  height: 100%;
  user-select: none;
}
/* .router-view {
  text-align: left;
  height: 100%;
  width: 100%;
} */
</style>