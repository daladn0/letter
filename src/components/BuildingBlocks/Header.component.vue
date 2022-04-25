<template>
  <div
    class="
      w-full
      bg-yellow-500
      p-2
      rounded-t-xl
      flex
      items-center
      justify-between
      relative
      text-white
      font-semibold
      text-lg
      relative
    "
  >
    <!-- import/export buttons -->
    <div class="flex items-center space-x-2">
      <Btn class="relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </Btn>
      <Btn>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </Btn>
    </div>

    <!-- title -->
    <h1 class="absolute left-1/2 transform -translate-x-1/2">Letter App</h1>

    <div class="flex items-center space-x-4">
      <!-- selections -->
      <div class="flex items-center space-x-4">
        <div class="flex items-center space-x-2">
          <p class="text-sm text-white font-medium">Amout:</p>
          <Selection
            @selected="(value) => setAmountSelected(value)"
            :options="amountOptions"
            :value="amountSelected"
          />
        </div>
        <div class="flex items-center space-x-2">
          <p class="text-sm text-white font-medium">Show:</p>
          <Selection
            @selected="(value) => setShowSelected(value)"
            :options="showOptions"
            :value="showSelected"
          />
        </div>
      </div>

      <!-- add button -->
      <Btn @clicked="add">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          />
        </svg>
      </Btn>
    </div>
  </div>
</template>
<script>
import Selection from "@/components/UI/Selection.component.vue";
import Btn from "@/components/UI/Btn.component.vue";
import { mapMutations, mapState } from "vuex";
import { nextTick } from "@vue/runtime-core";
export default {
  name: "HeaderComponent",
  components: {
    Btn,
    Selection,
  },
  computed: {
    ...mapState([
      "amountOptions",
      "showOptions",
      "amountSelected",
      "showSelected",
    ]),
  },
  methods: {
    ...mapMutations(["addItem", "setAmountSelected", "setShowSelected"]),
    add() {
      this.addItem();

      nextTick(() => {
        document.querySelector(".list-cells textarea").focus()
      });
    },
  },
};
</script>