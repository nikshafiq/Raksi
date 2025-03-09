<template>
    <layout-blank>
        <section 
        class="bg-local bg-center h-full w-full bg-cover" 
        :style="{ backgroundImage: `url(${parfumImage})` }">
            <div class="bg-black bg-opacity-75 h-full">
                <div class="h-full flex flex-wrap items-center justify-center">
                    <div class="flex flex-col items-center font-philosopher text-white text-center space-y-1 p-1">
                        <div class="flex text-display-lg md:text-display-xl text-primary">
                            <div>4</div>
                            <img class="h-[80px] md:h-[128px]" src="@/assets/img/logo/Raksi-Logo.png">
                            <div>4</div>
                        </div>
                        <h1 class="text-h2 md:text-h1 uppercase">Page Not Found</h1>
                        <div class="">
                            <p class="text-base md:text-lg mb-1">Seems you entered the wrong URL or the page never exists in the first place.</p>
                        </div>
                        <div  @click="$router.go(-1)" class="w-full md:max-w-button p-1 bg-primary hover:bg-primary-800 text-white">
                            Go back
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </layout-blank>
</template>
  
<script>
import parfumImage from '@/assets/img/bg/parfum-bg.jpg';

export default {
    name: 'PageNotFound',
    data() {
        return {
        parfumImage
        }
    },
}
</script>