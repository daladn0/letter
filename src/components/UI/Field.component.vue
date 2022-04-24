<template>
    <textarea
        :placeholder="placeholder || ''"
        :value='value'
        rows="1"
        class="w-full p-1 rounded bg-transparent resize-none focus:outline-yellow-500"
    />
</template>
<script>
export default {
    name: 'FieldComponent',
    props: {
        placeholder: {
            type: String
        },
        value: {
            type: String,
        }
    }
}
</script>