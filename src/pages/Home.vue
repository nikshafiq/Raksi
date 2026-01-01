<template>
    <layout-default>
        <popup-screen 
            v-if="showPopup" 
            @close="showPopup = false"
            popupTitle=""
            closeButton="True">
            <!-- Your content goes here -->
             <img src="@/assets/img/photo/jualan-akhir-tahun-2025-en.png" alt="">
        </popup-screen>

        <section 
        class="bg-local bg-center h-screen w-full bg-cover" 
        :style="{ backgroundImage: `url(${raksiCollectionBgImage})` }">
            <div class="bg-black bg-opacity-50 h-full pt-nav">
                <div class="container mx-auto h-full flex flex-col items-center justify-center font-philosopher text-white text-center gap-2 p-2">
                    <div class="flex flex-col items-center justify-center gap-1">

                        <img class="h-[128px] md:h-[200px]" src="@/assets/img/logo/Raksi-Logo.png">
                        <div class="text-h3 md:text-h1 uppercase">RAKSI</div>
                        <div class="mx-auto md:max-w-description text-base">
                            From tales of ancient kingdoms to whispers of legendary warriors, RAKSI revives the forgotten splendor of the Malay world through luxurious artisanal perfumes — crafted with soul, memory, and locally sourced botanicals.
                            </div>
                    </div>
                    <div class="hidden flex flex-col justify-center w-full md:flex-row gap-1 uppercase">
                       <ra-button routeTo="/tentang-kami" type="outline" label="More Info"/>
                    </div>
                </div>
            </div>
        </section>

        <section 
        class="bg-local bg-center h-hero-banner md:h-hero-banner-lg w-full bg-cover" 
        :style="{ backgroundImage: `url(${hauriAyanganBgImage})` }">
            <div class="bg-black bg-opacity-50 h-full pt-nav md:pt-nav-desktop">
                <div class="container mx-auto h-full flex flex-col items-center justify-between font-philosopher text-white text-center p-2">
                    <div class="flex flex-col items-center justify-center gap-1">
                        <div class="text-h3 md:text-h1">HAURI AYANGAN</div>
                        <div class="mx-auto md:max-w-description text-base">This second fragrance from Raksi invites you to explore the story of a young man whose heart is attached to a woman. The scent of the woman makes him drift away in his dreams.</div>
                    </div>
                    <div class="flex flex-col justify-center w-full md:flex-row gap-1 uppercase">
                        <ra-button routeTo="/hauri-ayangan" type="outline" label="More Info"/>
                        <ra-button 
                            buttonUrl="https://wa.me/60134982001?text=Hi,%20I%20am%20interested%20to%20get%20Hauri%20Ayangan%20from%20Raksi."
                            type="primary" 
                            label="Get it Now"/>
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
                        <div class="mx-auto md:max-w-description text-base">The first fragrance from Raksi: Rasian was inspired by a young man who got the sign from his dream and broke out of his comfortable niche.</div>
                    </div>
                    <div class="flex flex-col justify-center w-full md:flex-row gap-1 uppercase">
                        <ra-button routeTo="/rasian" type="outline" label="More Info"/>
                        <ra-button 
                            buttonUrl="https://wa.me/60134982001?text=Hi,%20I%20am%20interested%20to%20get%20Rasian%20from%20Raksi."
                            type="primary" 
                            label="Get it Now"/>
                    </div>
                </div>
            </div>
        </section>

    </layout-default>
</template>
  
<script>
import raksiCollectionBgImage from '@/assets/img/bg/raksi-collection.png';
import hauriAyanganBgImage from '@/assets/img/bg/hauri-ayangan.jpg';
import rasianBgImage from '@/assets/img/bg/rasian.jpg';

export default {
    name: 'Home',
    data() {
        return {
        raksiCollectionBgImage,
        hauriAyanganBgImage,
        rasianBgImage,
        showPopup: false,
        }
    },
}
</script>
