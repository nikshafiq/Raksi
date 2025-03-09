<template>
    <nav 
    :class="[
        'fixed top-0 w-full z-50 transition-all duration-300 h-nav text-primary',
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent',
    ]">
        <div class="container mx-auto flex h-full justify-center items-center gap-0">
            <img class="h-icon" src="@/assets/img/logo/Raksi-Logo.png">
            <div class="text-center text-[24px] font-philosopher uppercase">Raksi</div>
        </div>
    </nav>
</template>

<script>
export default {
    name: "TopNavigation",
    data() {
        return {
        isScrolled: false, // Tracks if the user has scrolled down
        };
    },
    mounted() {
        // Add scroll event listener when the component mounts
        window.addEventListener("scroll", this.handleScroll);
    },
    beforeUnmount() {
        // Remove scroll event listener when the component is destroyed
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        handleScroll() {
        // Check if the scroll position is greater than 0
        this.isScrolled = window.scrollY > 0;
        },
    },
};
</script>

<style>
html {
    scroll-behavior: smooth;
}
</style>