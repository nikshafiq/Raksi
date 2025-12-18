<template>
    <router-link v-if="routeTo"
    :to="routeTo"
    class="w-full md:max-w-button p-1 text-white backdrop-blur-sm rounded-full"
    :class="[
        type === 'primary'
            ? 'bg-primary/5 hover:bg-primary/25 border border-primary/25'
            : '',
        type === 'outline'
            ? ' border border-white/5 hover:bg-white/25' 
            : '',
    ]">
        {{ label }}
    </router-link>
    <a v-else-if="buttonUrl"
        :href="buttonUrl" 
        target="_blank" 
        rel="noopener noreferrer"
        class="w-full md:max-w-button p-1 text-white backdrop-blur-sm rounded-full"
        :class="[
            type === 'primary'
                ? 'bg-primary/5 hover:bg-primary/25 border border-primary/25'
                : '',
            type === 'outline'
                ? ' border border-white/5 hover:bg-white/25' 
                : '',
        ]"
        >
        {{ label }}
    </a>
    <div v-else
        class="w-full md:max-w-button p-1 text-white backdrop-blur-sm rounded-full"
        :class="[
            type === 'primary'
                ? 'bg-primary/5 hover:bg-primary/25 border border-primary/25'
                : '',
            type === 'outline'
                ? ' border border-white/5 hover:bg-white/25' 
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