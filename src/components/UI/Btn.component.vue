<template>
    <button class="btn" @click='$emit("clicked")'>
        <slot/>
    </button>
</template>
<script>
export default {
    name: 'ButtonComponent'
}
</script>
<style scoped>
.btn {
    @apply border-2 border-white bg-white text-orange-400 rounded-md transition hover:bg-transparent hover:text-white;
}
</style>