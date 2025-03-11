<template>
    <nav 
    :class="[
        'fixed top-0 w-full z-50 transition-all duration-300 h-nav text-primary',
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent',
    ]">
        <div class="container mx-auto flex md:flex-col h-full justify-center md:justify-between items-center gap-0.5 py-0.25">
            <div class="flex justify-center items-center">
                <img class="h-icon" src="@/assets/img/logo/Raksi-Logo.png">
                <div class="text-center text-[24px] font-philosopher uppercase">Raksi</div>
            </div>
            <div class="hidden md:flex w-full items-center justify-center text-sm gap-2">
                <router-link
                to="/"
                :class="[
                    'px-0.5 py-0.25',
                    navActive === 'Home'
                    ? 'border-b-2'
                    : 'hover:border-b-2'
                ]">
                    Laman Utama
                </router-link>
                <router-link
                to="/rasian"
                :class="[
                    'px-0.5 py-0.25',
                    navActive === 'Rasian'
                    ? 'border-b-2'
                    : 'hover:border-b-2'
                ]">
                    Rasian
                </router-link>
                <router-link
                to="/tentang-kami"
                :class="[
                    'px-0.5 py-0.25',
                    navActive === 'Tentang Kami'
                    ? 'border-b-2'
                    : 'hover:border-b-2'
                ]">
                    Tentang Kami
                </router-link>
            </div>
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