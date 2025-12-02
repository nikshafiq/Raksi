<template>
    <layout-default>
        <section 
        class="w-full bg-white font-philosopher">
            <div class="w-full flex flex-col md:flex-row pt-nav md:pt-nav-desktop bg-primary-50">
                <div class="w-full">
                    <img src="@/assets/img/product/hauri-ayangan/hauri-ayangan-001.png" alt="Hauri Ayangan" class="max-w-full">
                </div>
                <div class="w-full">
                    <img src="@/assets/img/product/hauri-ayangan/hauri-ayangan-002.png" alt="Hauri Ayangan with Bix" class="max-w-full">
                </div>
                <div class="flex flex-col w-full items-center justify-center p-2">
                    <div class="text-h2 md:text-h1 uppercase text-primary">Hauri Ayangan</div>
                    <div class="textsm md:text-md">Extrait De Parfum | 30ml</div>
                    <div class="text-h3 text-h1 text-primary">~</div>
                    <div class="text-lg font-bold mb-2">RM159.00</div>
                    <div class="w-full text-center px-2">
                        <ra-button 
                            buttonUrl="https://vt.tiktok.com/ZSSenGo4P/"
                            type="primary" 
                            label="Buy Now"/>
                    </div>
                </div>
            </div>
        </section>

        <section 
        class="bg-local bg-center h-hero-banner md:h-hero-banner-lg w-full bg-cover" 
        :style="{ backgroundImage: `url(${parfumBgImage})` }">
            <div class="bg-black bg-opacity-50 h-full pt-nav">
                <div class="container mx-auto h-full flex flex-col items-center justify-center font-philosopher text-white text-center gap-2 p-2">
                    <div class="flex flex-col items-center justify-center gap-1">
                        <div class="text-h3 md:text-h1 uppercase">RAKSI : The Scent of Unwritten Chapters</div>
                        <div class="mx-auto md:max-w-description text-base">Combination the story from dreams & books with the natural ingredients and establishes a luxurious, artistic tone.</div>
                    </div>
                    <div class="flex flex-col justify-center w-full md:flex-row gap-1 uppercase">
                        <ra-button routeTo="/tentang-kami" type="outline" label="More Info"/>
                    </div>
                </div>
            </div>
        </section>
    </layout-default>
</template>
  
<script>
import parfumBgImage from '@/assets/img/bg/parfum-bg.jpg';

export default {
    name: 'Hauri Ayangan',
    data() {
        return {
        parfumBgImage,
        }
    },
}
</script>