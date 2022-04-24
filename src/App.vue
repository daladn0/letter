<template>
  <div class="app">

    <!-- Message for mobile users -->
    <div class="w-full text-center mt-32 px-4" v-if="isMobileDevice" >Unfortunately, this website is not supported by your device yet. Try to open it on a desktop or a laptop.</div>

    <!-- table -->
    <div v-else class="w-10/12 mx-auto my-20 shadow-xl rounded-xl overflow-hidden">
      <Header/>
      <List ref="list" />
    </div>

  </div>
</template>

<script>
import Header from '@/components/BuildingBlocks/Header.component.vue'
import List from '@/components/BuildingBlocks/List.component.vue'
import { mapMutations } from 'vuex'

export default {
  name: 'App',
  data() {
    return {
      isMobileDevice: false,
    }
  },
  components: {
    Header,
    List,
  },
  methods: {
    ...mapMutations(['addItem']),
    checkWindowWidth() {
      this.isMobileDevice = window.innerWidth < 991 ? true : false
    }
  },
  mounted() {
    document.addEventListener('keydown', e => {
      if(e.ctrlKey && e.key === 'm') {
        this.addItem()
      }
    })

    this.checkWindowWidth()
    window.addEventListener('resize', () => {
      this.checkWindowWidth()
    })
  }
}
</script>

<style lang="scss">
body {
  background: rgb(241, 241, 241);
}
</style>
