<template>
    <router-link v-if="routeTo"
    :to="routeTo"
    class="w-full md:max-w-button p-1 text-white"
    :class="[
        type === 'primary'
            ? 'bg-primary hover:bg-primary-800'
            : '',
        type === 'outline'
            ? ' border border-white hover:bg-primary/50' 
            : '',
    ]">
        {{ label }}
    </router-link>
    <a v-else-if="buttonUrl"
        :href="buttonUrl" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full md:max-w-button p-1 text-white"
        :class="[
            type === 'primary'
                ? 'bg-primary hover:bg-primary-800'
                : '',
            type === 'outline'
                ? ' border border-white hover:bg-primary/50' 
                : '',
        ]"
        >
        {{ label }}
    </a>
    <div v-else
        class="w-full md:max-w-button p-1 text-white"
        :class="[
            type === 'primary'
                ? 'bg-primary hover:bg-primary-800'
                : '',
            type === 'outline'
                ? ' border border-white hover:bg-primary/50' 
                : '',
        ]">
        <div class="flex flex-wrap h-full w-full items-center justify-center">
            {{ label }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'RaButton',
    props: [
        "routeTo",
        "buttonUrl",
        "type",
        "label"
    ]
}
</script>