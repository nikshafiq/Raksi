<template>
    <top-navigation />
    <main class="w-full min-h-screen flex flex-col items-center justify-center">
        <slot />
    </main>
    <bottom-footer />
</template>

<script>
export default {
    name: "DefaultLayout"
};
</script>