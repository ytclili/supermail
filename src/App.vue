<template>
  <div id="app">
   <keep-alive exclude="detail"> <router-view></router-view></keep-alive>
<tarbarmain></tarbarmain>
  </div>
</template>

<script>

import tarbarmain from './components/content/maintarbar/tabbarmain'
export default {
  name: 'App',
 components:{
tarbarmain,

 }
}
</script>

<style>
@import 'assets/css/base.css';
</style>
