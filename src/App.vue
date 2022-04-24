<template>
  <div class="app">

    <!-- table -->
    <div class="w-10/12 mx-auto my-20 shadow-xl rounded-xl overflow-hidden">
      <Header/>
      <List/>
    </div>

  </div>
</template>

<script>
import Header from '@/components/BuildingBlocks/Header.component.vue'
import List from '@/components/BuildingBlocks/List.component.vue'

export default {
  name: 'App',
  components: {
    Header,
    List,
  },
  methods: {
    sad() {
      alert('asdsadsd')
    }
  }
}
</script>

<style lang="scss">
body {
  background: rgb(241, 241, 241);
}
</style>
