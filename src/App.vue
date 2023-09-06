
<template>
<div>
  <header-vue></header-vue>
<router-view></router-view>
</div>
</template>

<script>


import header from './components/app-header.vue'


export default {
  components: {
  'header-vue':header,
  },

}
</script>

<style>

</style>
