<template>
    <div class="fixed z-30 w-full md:w-container mx-auto p-1 inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur font-philosopher">
        <div class="text-base flex flex-col p-1 w-full md:max-w-1/2 space-y-1 bg-primary-950 border border-primary-500 rounded-lg shadow text-white text-center text-sm">
            <div class="text-lg text-white font-bold text-center text-lg">{{ popupTitle }}</div>
            <slot></slot>
            <button 
                v-if="closeButton === 'True'"
                class="w-full" @click="$emit('close')">
                <ra-button type="primary" label="Tutup" class="mx-auto"/>
            </button>
        </div>
    </div>
</template>


<script>
export default{
    name: "PopupScreen",
    props: [
        "popupTitle",
        "closeButton",
    ]
};
</script>