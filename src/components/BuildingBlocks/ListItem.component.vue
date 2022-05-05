<template>
  <div
    class="relative bg-transparent"
    :class="[showSelected !== 'all' ? 'card' : '']"
  >
    <p
      class="
        absolute
        right-full
        top-1/2
        transform
        -translate-y-1/2
        mr-6
        font-semibold
        text-gray-400
        whitespace-nowrap
      "
    >
      {{ date }}
    </p>
    <!-- Front of the card -->
    <ListCard class="front" :class="bg" :item="item" :blur="true" />

    <!-- Back of the card -->
    <ListCard
      v-if="showSelected !== 'all'"
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
  methods: {
    getCreationDay(date) {
      if ( new Date(this.item.createdAt) == "Invalid Date" ) return "";
      const dateDifference =
        new Date().getTime() / 1000 - date.getTime() / 1000;

      if (dateDifference <= 86400) return "Today";
      else if (dateDifference <= 172800) return "Yesterday";
      else if (dateDifference > 172800 && dateDifference <= 604800)
        return "Within a week";
      else return "";
    },
  },
  computed: {
    ...mapState(["showSelected"]),
    date() {
      if ( !this.item.createdAt || new Date(this.item.createdAt) == "Invalid Date" ) return "";

      const date = new Date(this.item.createdAt);

      const day = this.getCreationDay(date);

      console.log(day);

      let creationDay = `${date.getFullYear()}.${date.getMonth()}.${date.getDate()}`;

      if (day) creationDay += ` (${day})`;

      return creationDay;
    },
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