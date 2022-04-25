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

    <button class="text-white absolute top-8 right-8 w-10 h-10" @click='$emit("close")'>X</button>
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