<template>
    <div class="border-b border-gray-300">
        <div v-if="list.length > 0" class="flex items-center text-base font-semibold text-gray-800 list-cells">
            <div class='list-cell' >№</div>
            <div class='list-cell' >Word/Phrase</div>
            <div class='list-cell' >Definition/Translation</div>
            <div class='list-cell' >Action</div>
        </div>
        <div v-else class="p-2 text-center text-gray-500">
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