<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <Suspense>
    <router-view/>
  </Suspense>
</template>

<style lang="less">
body{
  padding: 0;
  margin:0;
}
</style>
