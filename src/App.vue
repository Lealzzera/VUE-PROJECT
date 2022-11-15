<template>
  <div id="app">
    <MenuSideBar/>
    <main id="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import MenuSideBar from './components/MenuSideBar/MenuSideBar.vue';

export default {
  name: 'App',
  components: {
    MenuSideBar
  },

  data: () => ({
    //
  }),
}
</script>
<style>
  body, ul, li, h1, h2, p {
    padding: 0px;
    margin: 0px;
  }

  ul {
    list-style: none;
  }

  body {
    font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
  }

  #app {
    display: flex;
  }

</style>