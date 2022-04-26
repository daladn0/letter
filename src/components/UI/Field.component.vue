<template>
  <textarea
    ref="input"
    :placeholder="placeholder || ''"
    :value="value"
    @input="autoResize"
    rows="1"
    class="
      w-full
      p-1
      rounded
      bg-transparent
      resize-none
      focus:outline-orange-400
    "
  />
</template>
<script>
export default {
  name: "FieldComponent",
  props: {
    placeholder: {
      type: String,
    },
    value: {
      type: String,
    },
  },
  methods: {
    autoResize() {
      const input = this.$refs.input;
      input.style.height = "auto";
      input.style.height = input.scrollHeight + "px";
    },
    focusField() {
      this.$refs.input.focus()
    }
  },
  mounted() {
      this.autoResize()
  }
};
</script>