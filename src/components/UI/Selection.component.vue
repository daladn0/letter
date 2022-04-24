<template>
  <select @change="$emit('selected', $event.target.value)" class="border border-white bg-yellow-500 outline-none text-white rounded px-2">
    <option v-for="option in options" :value="option.value" :key="option.value">
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: "SelectionComponent",
  props: {
      options: {
          type: Array,
          required: true,
      }
  }
};
</script>