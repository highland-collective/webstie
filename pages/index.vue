<script setup lang="ts">

import { type Ref, ref } from 'vue';
import { type Link } from '~/lib/domain/link';
import MobileDetect from 'mobile-detect'

const links: Ref<Array<Link>> = ref([
    {
        img: 'accnc_icon.png',
        alt: 'Austin Custom CNC Icon',
        title: 'Austin Custom CNC',
        href: 'https://austincustomcnc.com',
        widthClass: 'w-8',
        mobileWidthClass: 'w-6'
    },
    {
        img: 'howdy_built.png',
        alt: 'Howdy Built Icon',
        title: 'Howdy Built',
        href: 'https://www.instagram.com/danieldbaugh',
        widthClass: 'w-12',
        mobileWidthClass: 'w-10'
    },
    {
        img: 'kyle_icon.png',
        alt: 'Kyle Saldaña Gold Blanket',
        title: 'Kyle Saldaña',
        href: 'https://www.instagram.com/teneyenet',
        widthClass: 'w-10',
        mobileWidthClass: 'w-8'
    },
    {
        img: 'melissa_c_mariano_icon.png',
        alt: 'Melissa Claire Mariano Sad Space Robot',
        title: 'Melissa Claire Mariano',
        href: 'https://www.instagram.com/melissa_c_mariano',
        widthClass: 'w-10',
        mobileWidthClass: 'w-8'
    },
    {
        img: 'Melements_Moyo3k.png',
        alt: 'Moyo3k Melements Icon',
        title: 'Moyo Oyelola',
        href: 'http://melements.me',
        widthClass: 'w-8',
        mobileWidthClass: 'w-6'
    },
    {
        img: 'polis_icon_60.png',
        alt: 'Polis Icon',
        title: 'Polis Interactive',
        href: 'https://polis.tv',
        widthClass: 'w-8',
        mobileWidthClass: 'w-6'
    },
    {
        img: '2perf_icon.png',
        alt: '2Perf Logo',
        title: '2Perf Productions',
        href: 'https://2perf.us',
        widthClass: 'w-14',
        mobileWidthClass: 'w-12'
    }

])

const isDesktop: Ref<boolean> = ref(false);


const openLink = (href: string) => {
    if (href.indexOf('instagram') !== -1 && !isDesktop.value) {
        window.open(href, '_self');
    } else {
        window.open(href, '_blank');
    }
}

onMounted(() => {
    var md = new MobileDetect(window.navigator.userAgent);
    const isMobile = md.phone() !== null || md.mobile() === 'UnknownMobile';
    const isTablet = md.tablet() !== null || md.mobile() === 'UnknownTablet';
    isDesktop.value = !isMobile && !isTablet;
    console.log(isDesktop.value)
})
</script>

<template>
    <div class="flex flex-col font-sans bg-slate-800 text-white min-h-full">
        <header
            class="flex flex-col items-center mt-16"
        >
            <div 
                class="
                    rounded-full w-28 h-28 flex justify-center shadow-2xl shadow-lg shadow-slate-500/50
                "
            >
                <img
                    src="/images/logos/hc_logo_3d.svg"
                    alt="Highland Collective ATX Logo"
                    class="w-16"
                />
            </div>
            <h1
                class="mt-4 text-2xl font-semibold"
            >
                Highland Collective ATX
            </h1>
            <p class="text-center text-lg font-light mt-8 w-1/2">
                A loosely associated group of artists and makers working out of a shop in Central Austin
            </p>
        </header>
        <main class="flex flex-col items-center mt-8">
            <button 
                v-for="link in links"
                :key="link.img"
                class="
                    flex flex-row items-center justify-center rounded-xl border-2  mb-4
                    transition ease-in-out duration-150
                    
                "
                :class="{
                    'px-6 h-14 w-96': isDesktop,
                    'hover:scale-110 hover:bg-slate-600 hover:text-slate-200 hover:border-slate-200': isDesktop,
                    'active:bg-slate-400 active:text-slate-600 active:border-slate-600': isDesktop,
                    'px-3 h-12 w-80': !isDesktop,
                    'active:bg-slate-600 active:text-slate-200 active:border-slate-200': !isDesktop
                }"
                @click="openLink(link.href)"
            >
                <img 
                    :src="`/images/logos/${link.img}`"
                    :alt="link.alt"
                    :class="isDesktop ? link.widthClass : link.mobileWidthClass"
                />
                <div 
                    class="ml-3"
                    :class="{
                        'text-lg': isDesktop
                    }"
                >
                    {{ link.title }}
                </div>
            </button>
        </main>
        <footer class="text-center mt-8 mb-2">
            Powered by Broose 🪿
        </footer>
    </div>

</template>