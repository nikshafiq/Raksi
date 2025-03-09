<template>
    <top-navigation />
    <main class="w-full h-screen items-center justify-center">
        <slot />
    </main>
</template>

<script>
export default {
    name: "DefaultLayout"
};
</script>