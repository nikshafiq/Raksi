<template>
    <layout-blank>
        <section 
        class="bg-local bg-center h-full w-full bg-cover" 
        :style="{ backgroundImage: `url(${parfumBgImage})` }">
            <div class="bg-black bg-opacity-75 h-full">
                <div class="h-full flex flex-wrap items-center justify-center">
                    <div class="flex flex-col items-center font-philosopher text-white text-center space-y-1 p-1">
                        <!-- <img class="max-h-[256px]" src="@/assets/img/logo/Raksi-Logo.png"> -->
                        <div class="flex flex-col justify-center items-center md:flex-row text-display-lg md:text-display-xl text-primary uppercase md:gap-4">
                            <div class="flex">
                                <div>C</div>
                                <img class="h-[80px] md:h-[128px]" src="@/assets/img/logo/Raksi-Logo.png">
                                <div>ming</div>
                            </div>
                            <div class="flex">
                                <div>S</div>
                                <img class="h-[80px] md:h-[128px]" src="@/assets/img/logo/Raksi-Logo.png">
                                <img class="h-[80px] md:h-[128px] -ml-0.5" src="@/assets/img/logo/Raksi-Logo.png">
                                <div>n</div>
                            </div>
                        </div>
                        <div class="md:text-lg">We are working very hard on our website. Stay tuned!</div>
                    </div>
                </div>
            </div>
        </section>
    </layout-blank>
</template>
  
<script>
import parfumBgImage from '@/assets/img/bg/parfum-bg.jpg';

export default {
    name: 'ComingSoon',
    data() {
        return {
        parfumBgImage
        }
    },
}
</script>