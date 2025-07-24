<template>
    <layout-default>
        <popup-screen 
            v-if="showPopup" 
            @close="showPopup = false"
            popupTitle="Pengumuman"
            closeButton="True">
            <!-- Your content goes here -->
             <img src="@/assets/img/photo/hauri-ayangan-launch.png" alt="">
        </popup-screen>
        <section 
        class="bg-local bg-center h-hero-banner md:h-hero-banner-lg w-full bg-cover" 
        :style="{ backgroundImage: `url(${hauriAyanganBgImage})` }">
            <div class="bg-black bg-opacity-50 h-full pt-nav md:pt-nav-desktop">
                <div class="container mx-auto h-full flex flex-col items-center justify-between font-philosopher text-white text-center p-2">
                    <div class="flex flex-col items-center justify-center gap-1">
                        <div class="text-h3 md:text-h1">HAURI AYANGAN</div>
                        <div class="mx-auto md:max-w-description text-base">Wangian kedua keluaran Raksi ini mengajak anda menerokai kisah seorang pemuda yang terpaut hatinya pada seorang wanita. Kiduman si juwita membuatkannya terbuai asyik dalam angan-angan.</div>
                    </div>
                    <div class="flex flex-col justify-center w-full md:flex-row gap-1 uppercase">
                        <ra-button routeTo="/hauri-ayangan" type="outline" label="Info Lanjut"/>
                        <ra-button 
                            buttonUrl="https://wa.me/60134982001?text=Hi%2C%20saya%20berminat%20untuk%20dapatkan%20Rasian%20keluaran%20Raksi."
                            type="primary" 
                            label="Dapatkan Sekarang"/>
                    </div>
                </div>
            </div>
        </section>


        <section 
        class="bg-local bg-center h-hero-banner md:h-hero-banner-lg w-full bg-cover" 
        :style="{ backgroundImage: `url(${rasianBgImage})` }">
            <div class="bg-black bg-opacity-50 h-full">
                <div class="container mx-auto h-full flex flex-col items-center justify-between font-philosopher text-white text-center p-2">
                    <div class="flex flex-col items-center justify-center gap-1">
                        <div class="text-h3 md:text-h1">RASIAN</div>
                        <div class="mx-auto md:max-w-description text-base">Wangian pertama keluaran Raksi: Rasian mendapat inspirasi daripada seorang pemuda yang mendapat alamat dari mimpinya lalu merempuh keluar dari relung selesanya.</div>
                    </div>
                    <div class="flex flex-col justify-center w-full md:flex-row gap-1 uppercase">
                        <ra-button routeTo="/rasian" type="outline" label="Info Lanjut"/>
                        <ra-button 
                            buttonUrl="https://wa.me/60134982001?text=Hi%2C%20saya%20berminat%20untuk%20dapatkan%20Rasian%20keluaran%20Raksi."
                            type="primary" 
                            label="Dapatkan Sekarang"/>
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
                        <div class="text-h3 md:text-h1">RAKSI : SENI WANGIAN AGUNG</div>
                        <div class="mx-auto md:max-w-description text-base">Membawa maksud wangian, sesuatu yang harum atau bau-bauan.</div>
                    </div>
                    <div class="flex flex-col justify-center w-full md:flex-row gap-1 uppercase">
                        <ra-button routeTo="/tentang-kami" type="outline" label="Info Lanjut"/>
                    </div>
                </div>
            </div>
        </section>

    </layout-default>
</template>
  
<script>
import hauriAyanganBgImage from '@/assets/img/bg/hauri-ayangan.jpg';
import rasianBgImage from '@/assets/img/bg/rasian.jpg';
import parfumBgImage from '@/assets/img/bg/parfum-bg.jpg';

export default {
    name: 'Home',
    data() {
        return {
        hauriAyanganBgImage,
        rasianBgImage,
        parfumBgImage,
        showPopup: true,
        }
    },
}
</script>