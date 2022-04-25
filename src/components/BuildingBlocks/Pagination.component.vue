<template>
  <div v-if="totalPages > 1" class="flex flex-wrap items-center justify-center space-x-2">
    <div v-for="page in totalPages" :key="page">
      <button
        class="p-1 cursor-pointer"
        :class="[
          currentPage === page ? 'text-black border-b-2 border-yellow-500' : 'text-gray-500 border-b-2 border-transparent',
        ]"
        @click="setCurrentPage(page)"
      >
        {{ page }}
      </button>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "PaginationComponent",
  computed: {
    ...mapState(["currentPage"]),
    ...mapGetters(["totalPages"]),
  },
  methods: {
      ...mapMutations(['setCurrentPage'])
  }
};
</script>