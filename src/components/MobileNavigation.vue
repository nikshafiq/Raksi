<template>
    <div class="fixed z-20 w-full h-screen mx-auto flex bg-black/50 backdrop-blur flex flex-col">
        <nav class="fixed z-30 w-full h-nav text-primary font-philosopher uppercase bg-white shadow-lg">
            <div class="container mx-auto flex h-full items-center justify-between gap-0.5 px-1 md:p-0.5">
                <div class="w-call">
                    <button 
                    class="flex flex-wrap w-full h-full items-center justify-center"
                    @click="$emit('close')">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41Z" fill="#b5823b"></path>
                        </svg>
                    </button>
                </div>
                <div class="flex justify-center items-center">
                    <img class="h-icon" src="@/assets/img/logo/Raksi-Logo.png">
                    <div class="text-center text-h2 uppercase">Raksi</div>
                </div>
                <div class="w-call">
                    <!-- menu -->
                </div>  
            </div>
        </nav>
        <div class="pt-nav w-full flex flex-col bg-white">
            <div id="menu-list" class="flex flex-col font-philosopher uppercase w-full h-full px-2 py-2.5">

                <a 
                    href="/" 
                    :class="[
                        navActive === 'Home'
                        ? 'text-primary'
                        : 'text-black'
                    ]"
                    class="py-1">
                    Raksi
                </a>
                <a 
                    href="/rasian" 
                    :class="[
                        navActive === 'Rasian'
                        ? 'text-primary'
                        : 'text-black'
                    ]"
                    class="py-1">
                    Rasian
                </a>
                <a 
                    href="/tentang-kami" 
                    :class="[
                        navActive === 'Tentang Kami'
                        ? 'text-primary'
                        : 'text-black'
                    ]"
                    class="py-1">
                    Tentang Kami
                </a>

            </div>
            <div id="utility" class="flex flex-col items-center justify-center w-full px-2 py-1.25 gap-1 border-t border-primary-100">
                <div class="class flex justify-center">
                    <a href="https://www.instagram.com/raksiatelier/" target="_blank" rel="noopener noreferrer">
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_206_171)">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.981 0.0388523C9.97415 0.559499 5.58611 3.28435 2.92048 7.52819C-0.858933 13.5453 -0.153554 21.4923 4.62469 26.7274C7.26911 29.6246 10.5763 31.3568 14.5422 31.9216C15.2827 32.027 17.7432 32.0258 18.5163 31.9195C22.1384 31.4214 25.3824 29.815 27.8496 27.2974C28.6592 26.4712 28.8317 26.2736 29.3688 25.5573C30.9693 23.4227 32.0171 20.8205 32.4214 17.9765C32.5262 17.2397 32.5262 14.7676 32.4214 14.0312C32.1517 12.1353 31.6613 10.5199 30.8746 8.93563C30.0408 7.25709 29.1853 6.06043 27.8538 4.71021C25.3837 2.20549 22.2909 0.649552 18.7354 0.122767C17.9677 0.00898105 15.7457 -0.0406163 14.981 0.0388523ZM20.2891 6.86101C22.088 6.97754 23.14 7.37182 24.1021 8.29006C25.0795 9.22307 25.5306 10.3691 25.6507 12.2259C25.7299 13.4494 25.7298 18.5259 25.6506 19.7688C25.531 21.6434 25.0706 22.8024 24.0683 23.7509C23.1354 24.6338 22.0568 25.0322 20.2891 25.1467C19.0883 25.2245 13.9389 25.2245 12.7381 25.1467C10.9392 25.0301 9.88728 24.6358 8.92519 23.7176C7.9477 22.7846 7.49672 21.6386 7.37656 19.7818C7.29795 18.5674 7.29839 13.3454 7.37725 12.1902C7.50235 10.3564 7.9549 9.21619 8.92519 8.29006C9.84823 7.40907 10.9578 6.97466 12.563 6.86576C13.6209 6.794 19.2022 6.79054 20.2891 6.86101ZM14.2293 8.4961C12.3493 8.52997 12.0458 8.5495 11.6231 8.66405C10.2918 9.02482 9.53607 9.78142 9.17959 11.1102C9.06619 11.533 9.04659 11.8467 9.01175 13.7964C8.99008 15.0105 8.99008 16.9973 9.01175 18.2114C9.04659 20.161 9.06619 20.4747 9.17959 20.8974C9.53619 22.2267 10.2946 22.9856 11.6231 23.3426C12.0456 23.456 12.3591 23.4755 14.3076 23.5104C15.5209 23.5322 17.5064 23.5322 18.7197 23.5104C20.6842 23.4754 20.9794 23.4566 21.4147 23.3397C22.7109 22.992 23.4957 22.2069 23.8456 20.9082C23.9634 20.4709 23.9816 20.1837 24.0162 18.2114C24.0374 16.9973 24.0374 15.0104 24.0162 13.7964C23.9819 11.8398 23.9627 11.5345 23.8483 11.1102C23.4891 9.77848 22.728 9.01762 21.4042 8.66693C20.9162 8.53773 20.7869 8.53166 17.2646 8.47291C16.7656 8.46459 15.3996 8.47498 14.2293 8.4961ZM21.8134 10.0587C22.0533 10.1493 22.3312 10.4195 22.4355 10.6632C22.7379 11.3704 22.1981 12.1838 21.4264 12.1838C20.8366 12.1838 20.3312 11.6808 20.3312 11.094C20.3312 10.3357 21.1091 9.79232 21.8134 10.0587ZM18.032 11.5386C18.7888 11.8042 19.209 12.0688 19.803 12.6535C20.3789 13.2203 20.7387 13.7853 20.9997 14.5322C21.1624 14.9976 21.1747 15.1021 21.1747 16.0038C21.1747 16.9056 21.1624 17.0101 20.9997 17.4755C20.7475 18.1974 20.3779 18.7854 19.8357 19.328C19.2936 19.8706 18.7058 20.2403 17.9843 20.4928C17.5192 20.6555 17.4147 20.668 16.5136 20.668C15.6125 20.668 15.508 20.6555 15.0429 20.4928C14.2965 20.2317 13.7319 19.8715 13.1654 19.2954C12.5839 18.7038 12.3199 18.2854 12.0474 17.5232C11.859 16.9963 11.8512 16.9358 11.8532 16.0038C11.8551 15.119 11.8702 14.9888 12.0238 14.5322C12.3499 13.5619 13.046 12.6481 13.883 12.0913C14.8003 11.4811 15.4554 11.2993 16.6387 11.3266C17.3926 11.3441 17.5429 11.3669 18.032 11.5386ZM15.7755 13.0328C14.1301 13.4759 13.1281 15.1279 13.5414 16.7158C13.8407 17.8656 14.6547 18.6789 15.8066 18.979C17.9576 19.5397 20.0472 17.4486 19.487 15.2964C19.0509 13.6212 17.3784 12.6011 15.7755 13.0328Z" fill="#BC8C4E"/>
                        </g>
                        <defs>
                            <clipPath id="clip0_206_171">
                                <rect width="32" height="32" fill="white" transform="translate(0.5)"/>
                            </clipPath>
                        </defs>
                        </svg>
                    </a>
                </div>
                <div class="text-sm">
                    Hakcipta terpelihara. &copy; {{ new Date().getFullYear() }} Raksi Atelier.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MobileNavigation',
    props: [
        "navActive",
        "showMobileNavigation"
    ],
};
</script>