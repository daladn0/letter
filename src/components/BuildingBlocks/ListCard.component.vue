<template>
    <div class="flex items-center justify-between list-cells">
      <div class="list-cell">{{ item.id }}</div>
      <div class="list-cell">
        <Field
          ref="wordInput"
          placeholder="New word"
          :class="{
            'blured': blur && showSelected === 'definitions'
          }"
          :value="item.word"
          @change="update(item.id, $event.target.value, 'word')"
        />
      </div>
      <div class="list-cell">
        <Field
          placeholder="New definition"
          :class="{
            'blured': blur && showSelected === 'words'
          }"
          :value="item.definition"
          @change="update(item.id, $event.target.value, 'definition')"
        />
      </div>
      <div class="list-cell">
        <button
          @click="removeItem(item.id)"
          class="
            p-1.5
            text-red-500
            rounded-full
            transition
            hover:bg-red-200
            focus:outline-red-500
          "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
</template>
<script>
import Field from "@/components/UI/Field.component.vue";
import { mapMutations, mapState } from "vuex";
export default {
  name: "ListCard",
  components: {
    Field,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    blur: {
      type: Boolean,
      default: false,
    }
  },
  computed: {
    ...mapState(['showSelected']),
  },
  methods: {
    ...mapMutations(["removeItem", "updateItem"]),
    update(id, value, type) {
      this.updateItem({
        id,
        value,
        type,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
  .blured {
    filter: blur(4px);
  }
</style>