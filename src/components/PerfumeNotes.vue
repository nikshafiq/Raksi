<template>
    <section 
    class="bg-white text-primary h-full w-full">
        <div class="container mx-auto h-full flex flex-col items-center justify-center font-philosopher text-center gap-2 md:gap-3 py-4 md:py-8">
            <div class="text-h3 md:text-h1 uppercase">Perfume notes</div>
            <div class="mx-auto w-full flex flex-col md:flex-row gap-1 text-base md:text-lg items-start">
                <div class="flex w-full flex flex-col justify-center gap-0.5">
                    <div class="text-lg md:text-h2">Top Notes</div>
                    <div class="text-primary-950">{{ topNotes }}</div>
                </div>
                <div class="flex w-full flex flex-col justify-center gap-0.5">
                    <div class="text-lg md:text-h2">Heart Notes</div>
                    <div class="text-primary-950">{{ heartNotes }}</div>
                </div>
                <div class="flex w-full flex flex-col justify-center gap-0.5">
                    <div class="text-lg md:text-h2">Base Notes</div>
                    <div class="text-primary-950">{{ baseNotes }}</div>
                </div>
            </div>
        </div>
    </section>
</template>


<script>
export default{
    name: "Perfume Notes",
    props: [
        "topNotes",
        "heartNotes",
        "baseNotes",
    ]
};
</script>