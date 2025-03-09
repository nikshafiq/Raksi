<template>
    <layout-default>
        <section 
        class="bg-local bg-center h-hero-banner md:h-hero-banner-lg w-full bg-cover" 
        :style="{ backgroundImage: `url(${rasianBgImage})` }">
            <div class="bg-black bg-opacity-50 h-full pt-nav">
                <div class="container mx-auto h-full flex flex-col items-center justify-between font-philosopher text-white text-center p-2">
                    <div class="flex flex-col items-center justify-center gap-1">
                        <div class="text-h2 md:text-h1">Memperkenalkan : RASIAN</div>
                        <div class="mx-auto md:max-w-description">Wangian pertama keluaran Raksi: Rasian mendapat inspirasi daripada seorang pemuda yang mendapat alamat dari mimpimya lalu merempuh keluar dari relung selesanya.</div>
                    </div>
                    <div class="flex flex-col justify-center w-full md:flex-row gap-1 uppercase">
                        <div class="w-full md:max-w-button p-1 border border-white hover:bg-primary/50">Info Lanjut</div>
                        <a 
                            href="https://wa.me/message/K5AROQIQQADPA1" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            class="w-full md:max-w-button p-1 bg-primary hover:bg-primary-800 block text-center"
                            >
                            Dapatkan Sekarang
                        </a>
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
                        <div class="text-h2 md:text-h1">RAKSI : SENI WANGIAN AGUNG</div>
                        <div class="mx-auto md:max-w-description">Membawa maksud wangian, sesuatu yang harum atau bau-bauan.</div>
                    </div>
                    <div class="flex flex-col justify-center w-full md:flex-row gap-1 uppercase">
                        <!-- <div class="w-full md:max-w-button p-1 border border-white hover:bg-primary/50">Info Lanjut</div> -->
                        <div class="w-full md:max-w-button p-1 bg-primary hover:bg-primary-800 text-white">Info Lanjut</div>
                    </div>
                </div>
            </div>
        </section>

    </layout-default>
</template>
  
<script>
import rasianBgImage from '@/assets/img/bg/rasian.jpg';
import parfumBgImage from '@/assets/img/bg/parfum-bg.jpg';

export default {
    name: 'Home',
    data() {
        return {
        rasianBgImage,
        parfumBgImage,
        }
    },
}
</script>