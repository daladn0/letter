<template>
    <div>
        <div class="list-cells flex items-center text-base font-semibold text-gray-800 border-b border-gray-300">
            <div class='list-cell' >№</div>
            <div class='list-cell' >Word/Phrase</div>
            <div class='list-cell' >Definition/Translation</div>
            <div class='list-cell' >Action</div>
        </div>
        <div v-if="list.length === 0" class="p-2 text-center text-gray-500 bg-gray-100">
            <p>No items to show. Try to add any first.</p>
        </div>
    </div>
</template>
<script>
export default {
    name: 'ListHeading',
    props: {
        list: {
            type: Object,
            required: true,
        }
    }
}
</script>