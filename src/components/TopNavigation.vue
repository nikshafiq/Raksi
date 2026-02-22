<template>
    <mobile-navigation 
        v-if="showMobileMenu"
        @close="showMobileMenu=false"
    />
    <nav 
    class="fixed top-0 w-full z-10 transition-all duration-300 h-nav text-primary font-philosopher uppercase py-1 px-1">
        <div 
        :class="[
            'container mx-auto flex h-full items-center justify-between md:justify-center gap-0.5 px-1 md:p-0.5 rounded-full border border-white/5',
            isScrolled ? 'bg-black/10 backdrop-blur-md' : 'backdrop-blur-sm',
        ]">
            <div class="md:hidden w-call">
                <button 
                class="flex flex-wrap w-full h-full items-center justify-center"
                @click="showMobileMenu = true">
                    <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" class="w-[20px]" fill="none" viewBox="0 0 18 16">
                        <path d="M1 .5a.5.5 0 100 1h15.71a.5.5 0 000-1H1zM.5 8a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1A.5.5 0 01.5 8zm0 7a.5.5 0 01.5-.5h15.71a.5.5 0 010 1H1a.5.5 0 01-.5-.5z" fill="currentColor">
                        </path>
                    </svg>
                </button>
            </div>
            <router-link
            to="/"
            class="flex justify-center items-center">
                <img class="h-icon" src="@/assets/img/logo/Raksi-Logo.png">
                <div class="text-center text-h2 uppercase">Raksi</div>
            </router-link>
            <div class="md:hidden w-call">
                <!-- menu -->
            </div>
            <div class="hidden md:flex w-full items-center justify-end text-lg gap-0.5">
                <router-link
                to="/rasian"
                :class="[
                    'px-1 py-0.25 rounded-full',
                    navActive === 'Rasian'
                    ? 'border-b-2'
                    : 'hover:backdrop-blur-md hover:bg-primary hover:border-white/25 hover:text-white'
                ]">
                    Rasian
                </router-link>
                <router-link
                to="/hauri-ayangan"
                :class="[
                    'px-1 py-0.25 rounded-full',
                    navActive === 'Hauri Ayangan'
                    ? 'border-b-2'
                    : 'hover:backdrop-blur-md hover:bg-primary hover:border-white/25 hover:text-white'
                ]">
                    Hauri Ayangan
                </router-link>
                <router-link
                to="/rahasia-perindu"
                :class="[
                    'px-1 py-0.25 rounded-full',
                    navActive === 'Rahasia Perindu'
                    ? 'border-b-2'
                    : 'hover:backdrop-blur-md hover:bg-primary hover:border-white/25 hover:text-white'
                ]">
                    Rahasia Perindu
                </router-link>
                <router-link
                to="/ratna-sari"
                :class="[
                    'px-1 py-0.25 rounded-full',
                    navActive === 'Ratna Sari'
                    ? 'border-b-2'
                    : 'hover:backdrop-blur-md hover:bg-primary hover:border-white/25 hover:text-white'
                ]">
                    Ratna Sari
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
        showMobileMenu: false, // Hide menu for movile view
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