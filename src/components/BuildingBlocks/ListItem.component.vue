<template>
  <div
    class="relative bg-transparent"
    :class="[ showSelected !== 'all' ? 'card' : '' ]"
  >
    <!-- Front of the card -->
    <ListCard class="front" :class="bg" :item="item" :blur="true" />

    <!-- Back of the card -->
    <ListCard
      v-if="showSelected !== 'all' "
      class="back w-full h-full absolute left-0 top-0 pointer-events-none"
      :item="item"
    />
  </div>
</template>
<script>
import ListCard from "@/components/BuildingBlocks/ListCard.component.vue";
import { mapState } from "vuex";
export default {
  name: "ListItem",
  components: {
    ListCard,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    bg: {
      type: String,
    },
  },
  computed: {
    ...mapState(["showSelected"]),
  },
};
</script>
<style lang="scss" scoped>
.card {
  perspective: 1000px;

  .back {
    transform: rotateX(180deg);
    background: rgb(245, 178, 123);
  }

  .back,
  .front {
    backface-visibility: hidden;
    transition: all 0.6s ease;
  }

  &:hover {
    .front {
      transform: rotateX(180deg);
    }

    .back {
      transform: rotateX(360deg);
    }
  }
}
</style>