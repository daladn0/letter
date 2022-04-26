<template>
  <div >
    <!-- Message for mobile users -->
    <div class="w-full text-center mt-32 px-4" v-if="isMobileDevice">
      Unfortunately, this website is not supported by your device yet. Try to
      open it on a desktop or a laptop.
    </div>

    <div v-else>
      <!-- table -->
      <div class="w-10/12 mx-auto my-20 space-y-8">
        <div class="shadow-xl rounded-xl overflow-hidden">
          <Header />
          <List />
        </div>
        <Pagination />
      </div>

      <div class="fixed top-8 right-8">
        <button
          class="
            flex
            items-center
            justify-center
            w-10
            h-10
            bg-orange-400
            text-white text-xl
            rounded-full
            font-bold
            transition
            hover:bg-orange-500
          "
          @click="showModal = true"
        >
          i
        </button>
      </div>

      <Modal :show="showModal" @close="showModal = false">
        <div class="text-gray-800">
          <h2 class='font-semibold text-3xl text-center mb-2.5'>Letter App</h2>

          <div class="space-y-2.5">
            <p><span class="font-medium">Letter App</span> is an application for language learners. Here you can write down new words, phrases, on the fences etc.</p>
            <p>Below you can find a little instruction on the app.</p>
          </div>

          <!-- <h2 class="block text-gray-800 text-2xl text-center my-10 font-medium">Instruction:</h2> -->

          <div class="space-y-8 mt-12">
            <div class="space-y-2.5">
              <h3 class='text-gray-800 text-xl font-bold'>'Show' selection</h3>
              <p>You can easily repeat your marks using built-in "Show" selection:</p>
              <img class="w-full" src="@/assets/images/placeholder.png" alt="">
            </div>

            <div class="space-y-2.5">
              <h3 class='text-gray-800 text-xl font-bold'>'Amount' selection</h3>
              <p>You're able to choose amount of items to show using built-in "Amount" selection.</p>
              <img class="w-full" src="@/assets/images/placeholder.png" alt="">
            </div>

            <div class="space-y-2.5">
              <h3 class='text-gray-800 text-xl font-bold'>Item Actions</h3>
              <p>Each item can be created, edited or removed depending on your wishes.</p>
              <img class="w-full" src="@/assets/images/items.png" alt="">
            </div>

            <div class="space-y-2.5">
              <h3 class='text-gray-800 text-xl font-bold'>'Show' selection</h3>
              <p>You can easily repeat your marks using built-in "Show" selection:</p>
              <img class="w-full" src="@/assets/images/placeholder.png" alt="">
            </div>

            <div class="space-y-2.5">
              <h3 class='text-gray-800 text-xl font-bold'>'Amount' selection</h3>
              <p>You're able to choose amount of items to show using built-in "Amount" selection.</p>
              <img class="w-full" src="@/assets/images/placeholder.png" alt="">
            </div>

            <div class="space-y-2.5">
              <h3 class='text-gray-800 text-xl font-bold'>Item Actions</h3>
              <p>Each item can be created, edited or removed depending on your wishes.</p>
              <img class="w-full" src="@/assets/images/items.png" alt="">
            </div>
          </div>

        </div>
      </Modal>
    </div>
  </div>
</template>

<script>
import Header from "@/components/BuildingBlocks/Header.component.vue";
import List from "@/components/BuildingBlocks/List.component.vue";
import { mapMutations } from "vuex";
import Pagination from "./components/BuildingBlocks/Pagination.component.vue";
import Modal from "@/components/UI/Modal.component.vue";

export default {
  name: "App",
  data() {
    return {
      isMobileDevice: false,
      showModal: true,
    };
  },
  components: {
    Header,
    List,
    Pagination,
    Modal,
  },
  methods: {
    ...mapMutations(["addItem"]),
    checkWindowWidth() {
      this.isMobileDevice = window.innerWidth < 1200 ? true : false;
    },
  },
  mounted() {
    this.checkWindowWidth();
    window.addEventListener("resize", () => {
      this.checkWindowWidth();
    });
  },
};
</script>

<style lang="scss">
body {
  background: rgb(241, 241, 241);
}
</style>
