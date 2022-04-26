<template>
  <div
    class="
      w-full
      h-full
      flex
      items-center
      justify-center
      absolute
      left-0
      top-0
      bg-black bg-opacity-80
      py-10
    "
    v-show="show"
    @click.self="$emit('close')"
  >
    <div class="p-8 bg-white rounded-md max-w-2xl overflow-auto max-h-full ">
      <slot />
    </div>

    <button class="text-white absolute top-8 right-8 w-10 h-10 flex items-center justify-center" @click='$emit("close")'>
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  </div>
</template>
<script>
export default {
  name: "ModalWindow",
  props: {
    show: {
      type: Boolean,
      required: true,
    },
  },
};
</script>