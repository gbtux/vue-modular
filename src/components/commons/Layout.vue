<template>
  <div class="min-w-full min-h-screen  h-screen overflow-hidden">
    <TopBar />
    <main class="relative flex flex-row w-full h-screen">
      <SideBar />
      <div>
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>
import TopBar from './TopBar.vue'
import SideBar from './SideBar.vue'
export default {
  name: "Layout",
  components: { TopBar, SideBar }
}
</script>

<style scoped>

</style>
