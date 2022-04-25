<template>
  <div class="w-full bg-white">
    <ListHeading :list="sortedList" />
    <div>
      <ListItem
        v-for="(item, index) in [...sortedList].reverse()"
        :key="item.id"
        :item="item"
        :class="[index % 2 === 0 ? 'bg-gray-100' : 'bg-white']"
      />
    </div>
  </div>
</template>
<script>
import ListHeading from "@/components/BuildingBlocks/ListHeading.component.vue";
import ListItem from "@/components/BuildingBlocks/ListItem.component.vue";
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "ListComponent",
  components: {
    ListHeading,
    ListItem,
  },
  computed: {
    ...mapState(['currentPage']),
    ...mapGetters(['sortedList']),
  },
  methods: {
    ...mapMutations(["setList", "setCurrentPage"]),
  },
  created() {
    if (!localStorage.getItem("list")) {
      localStorage.setItem("list", "[]");
    }

    this.setList(JSON.parse(localStorage.getItem("list")));
  },
  updated() {
    if ( this.sortedList.length === 0 && this.currentPage > 1 ) {
      this.setCurrentPage(this.currentPage - 1)
    }
  }
};
</script>
<style lang='scss'>
.list-cells {
  .list-cell {
    @apply flex items-center p-4;

    &:nth-child(1) {
      @apply w-1/12;
    }
    &:nth-child(2) {
      @apply w-5/12;
    }
    &:nth-child(3) {
      @apply w-5/12;
    }
    &:nth-child(4) {
      @apply w-1/12 justify-center;
    }
  }
}
</style>