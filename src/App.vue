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
}
</script>
<style lang="less">
  body, ul, li, h1, h2, p {
    padding: 0px;
    margin: 0px;
  }

  .view{
    position: relative;
    display: block;
    float: left;
    width: 100%;
    .container{
      max-width: 1040px !important;
    }
  }

  ul {
    list-style: none;
  }

  body {
    font-family: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
  }


  div::-webkit-scrollbar {
    width: 12px;               /* width of the entire scrollbar */
  }

  div::-webkit-scrollbar-track {
    background: #f2f2f2;        /* color of the tracking area */
  }

  div::-webkit-scrollbar-thumb {
    background-color: #cecece;    /* color of the scroll thumb */
    border-radius: 20px;       /* roundness of the scroll thumb */
    border: 3px solid #f2f2f2;  /* creates padding around scroll thumb */
  }


  @import'~bootstrap/dist/css/bootstrap.css';

</style>