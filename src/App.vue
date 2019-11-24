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
          <router-link to="/posts" class="nav-link">List</router-link>
        </li>
      </ul>
      <span>
        <router-link v-if="typeof(user) == 'undefined'" to="/login" class="nav-link">Login</router-link>
        <router-link v-if="typeof(user) != 'undefined'" to="/logout" class="nav-link">Logout</router-link>
      </span>
    </nav>
    <header class="masthead bg-primary text-white text-center">
      <div class="d-flex align-items-center flex-column">
        <!-- Masthead Avatar Image -->
        <img class="masthead-avatar mb-5" src="img/avataaars.svg" alt="">
        <!-- Masthead Heading -->
        <h1 class="masthead-heading text-uppercase mb">CSMS EDITOR</h1>
        <!-- Icon Divider -->
        <div class="divider-custom divider-light">
          <div class="divider-custom-line"></div>
          <div class="divider-custom-icon">
            <i class="fas fa-star"></i>
          </div>
          <div class="divider-custom-line"></div>
        </div>
        <!-- Masthead Subheading -->
        <p class="masthead-subheading font-weight-light mb-0 pb-4">Any language, any theme, can be compiled at any time</p>
      </div>
    </header>
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
