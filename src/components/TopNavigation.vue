<template>
    <nav 
    :class="[
        'fixed top-0 w-full z-50 transition-all duration-300 h-nav md:h-nav-desktop text-primary font-philosopher uppercase',
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent',
    ]">
        <div class="container mx-auto flex md:flex-col h-full items-center justify-between md:justify-center gap-0.5 px-1 md:p-0.5">
            <div class="md:hidden w-call">
                <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="w-[20px]" fill="none" viewBox="0 0 18 16">
                    <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
                    </path>
                </svg>
            </div>
            <div class="flex justify-center items-center">
                <img class="h-icon" src="@/assets/img/logo/Raksi-Logo.png">
                <div class="text-center text-h2 uppercase">Raksi</div>
            </div>
            <div class="md:hidden w-call">
                <!-- menu -->
            </div>
            <div class="hidden md:flex w-full items-center justify-center text-lg gap-2">
                <router-link
                to="/"
                :class="[
                    'px-0.5 py-0.25',
                    navActive === 'Home'
                    ? 'border-b-2'
                    : 'hover:border-b-2'
                ]">
                    Raksi
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