<template>
  <div class="w-full bg-white">
    <ListHeading :list="list" />
    <div>
      <ListItem
        v-for="(item, index) in list"
        :key="item.id"
        :item="item"
        :class="[ index % 2 === 0 ? 'bg-gray-100' : 'bg-white' ]"
    />
    </div>
  </div>
</template>
<script>
import ListHeading from "@/components/BuildingBlocks/ListHeading.component.vue";
import ListItem from "@/components/BuildingBlocks/ListItem.component.vue";
import { mapState } from "vuex";
export default {
  name: "ListComponent",
  components: {
    ListHeading,
    ListItem,
  },
  computed: {
    ...mapState(["list"]),
  },
};
</script>
<style lang='scss'>
.list-cells {
  .list-cell {
    @apply p-4;

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
      @apply w-1/12 text-center;
    }
  }
}
</style>