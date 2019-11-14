<template>
  <div>
    <nav class="main-nav navbar navbar-expand-lg bg-secondary text-uppercase fixed-top navbar-shrink">
      <router-link to="/" class="navbar-brand js-scroll-trigger" href="#page-top">CSMS Editor</router-link>
      <ul class="navbar-nav collapse navbar-collapse">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/create" class="nav-link">Create Post</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/posts" class="nav-link">Posts</router-link>
        </li>
      </ul>
    </nav><br />
    <transition-group name="fade">
      <router-view :key="0"></router-view>
      <router-view name="Editor" :key="1"></router-view>
    </transition-group>
  </div>
</template>

<script>
export default {
}
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }
  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
