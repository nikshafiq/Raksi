<template>
    <footer class="w-full bg-black text-white p-2">
        <div class="container mx-auto flex flex-col justify-center items-center gap-1">
            <div class="w-full flex items-center justify-center gap-1">
                <div class="flex flex-col items-center gap-1">
                    <div class="flex flex-col justify-center items-center gap-0">
                        <img class="h-icon" src="@/assets/img/logo/Raksi-Logo.png">
                        <div class="text-center text-primary text-h3 md:text-h2 font-philosopher uppercase">Raksi</div>
                    </div>
                    <div class="text-center">
                        High Perfumery from Malaysia, founded in 2025.
                    </div>
                    <div class="text-center">
                        FOLLOW US on our social media for latest info:
                    </div>

                    <div class="flex items-center justify-center gap-2 mb-1">
                        <a href="https://www.instagram.com/raksiatelier/" target="_blank" rel="noopener noreferrer">
                            <img class="w-call" src="@/assets/img/icon/Instagram.png" alt="Instagram">
                        </a>
                        <a href="https://www.tiktok.com/@nik.shafiq95" target="_blank" rel="noopener noreferrer">
                            <img class="w-call" src="@/assets/img/icon/TikTok.png" alt="TikTok">
                        </a>
                        <!-- Copy paste more social media here -->
                    </div>
                </div>
                <!-- <div>the house of raksi</div>
                <div>customer service</div>
                <div>legal</div> -->
            </div>
            <div>All right reserved. &copy; {{ new Date().getFullYear() }} Raksi Atelier. </div>
            <div class="text-white/10 text-sm">
                Design & developed by 
                <a href="https://www.khairulazry.com" target="_blank" rel="noopener noreferrer" class="underline">Khairul Azry</a>.
            </div>
        </div>
    </footer>
</template>

<script>
export default{
    name: "BottomFooter",
};
</script>